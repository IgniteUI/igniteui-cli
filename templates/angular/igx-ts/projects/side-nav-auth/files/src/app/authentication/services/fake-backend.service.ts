import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, dematerialize } from 'rxjs/operators';
import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';

import msKeys from './microsoft-keys';
import { Register } from '../models/register';
import { ExternalLogin } from '../models/login';
import { UserJWT } from '../models/user';
import { encodeBase64Url } from './jwt-util';

@Injectable({
    providedIn: 'root'
})
export class BackendInterceptor implements HttpInterceptor {
    users: StorageUser[];

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        return of(null).pipe(mergeMap(() => {
            // login user
            if (request.url.endsWith('/login') && request.method === 'POST') {
                return this.loginHandle(request);
            }

            // register user
            if (request.url.endsWith('/register') && request.method === 'POST') {
                const user = this.getStorageUser(request);
                return this.registerHandle(user);
            }

            // login user with external provider
            if (request.url.endsWith('/extlogin') && request.method === 'POST') {
                const user = this.getStorageExtUser(request);
                return this.registerHandle(user, true);
            }

            // Microsoft-specific OIDC discovery URI
            if (request.url.endsWith('ms-discovery/keys') && request.method === 'GET') {
                return of(new HttpResponse({ status: 200, body: msKeys }));
            }

            return next.handle(request);
        }))
        .pipe(materialize())
        .pipe(dematerialize());
    }

    registerHandle(newUser: StorageUser, update = false) {
        const duplicateUser = this.users.find(user => user.email === newUser.email);
        if (duplicateUser && !update) {
            return throwError({ error: { message: 'Account with email "' + newUser.email + '" already exists' } });
        }
        if (update && duplicateUser) {
            Object.assign(duplicateUser, newUser);
        } else {
            this.users.push(newUser);
        }
        localStorage.setItem('users', JSON.stringify(this.users));

        const body = this.getUserJWT(newUser);

        return of(new HttpResponse({ status: 200, body: this.generateToken(body) }));
    }

    loginHandle(request: HttpRequest<any>) {
        const foundUser = this.users.find(user => {
            return user.email === request.body.email;
        });
        // authenticate
        if (foundUser) {
            const body = this.getUserJWT(foundUser);

            return of(new HttpResponse({ status: 200, body: this.generateToken(body) }));
        } else {
            return throwError({ status: 401, error: { message: 'User does not exist!' } });
        }
    }

    private getStorageUser(request: HttpRequest<any>): StorageUser {
        const user = request.body as Register;
        let fullName = user.given_name;
        fullName += user.family_name ? ` ${user.family_name}` : '';
        return {
            id: String(this.users.length + 1),
            name: fullName,
            email: user.email,
            given_name: user.given_name,
            family_name: user.family_name,
            picture: ''
        };
    }

    private getStorageExtUser(request: HttpRequest<any>): StorageUser {
        const user = request.body as ExternalLogin;
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            given_name: user.given_name || user.name.split(' ').shift(),
            family_name: user.family_name || user.name.split(' ').pop(),
            picture: user.picture,
            externalToken: user.externalToken,
            externalProvider: user.externalProvider
        };
    }

    private getUserJWT(user: StorageUser): UserJWT {
        return {
            exp: Math.floor(new Date().getTime() / 1000) + (7 * 24 * 60 * 60),
            name: user.name,
            given_name: user.given_name,
            family_name: user.family_name,
            email: user.email,
            picture: user.picture
        };
    }

    /** Note: This is used for example purposes only and does NOT generate a valid JWT w/ base64Url encoding */
    private generateToken(payload: any): string {
        const header = {
            alg: 'Mock',
            typ: 'JWT'
        };
        return encodeBase64Url(header) + '.' + encodeBase64Url(payload) + '.mockSignature';
    }
}

interface StorageUser {
    id: string;
    name: string;
    email: string;
    given_name: string;
    family_name: string;
    picture?: string;
    externalToken?: string;
    externalProvider?: string;
}

export const BackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor,
    multi: true
};
