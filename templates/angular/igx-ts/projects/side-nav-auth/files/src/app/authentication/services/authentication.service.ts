import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User, LoginResult } from '../models/user';
import { Login, ExternalLogin } from '../models/login';
import { Register } from '../models/register';
import { parseUser } from './jwt-util';

/** Authentication API Service */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  /** Send basic credentials to login endpoint. */
  public async login(userData: Login): Promise<LoginResult> {
    return this.loginPost('/login', userData);
  }

  /** Send user info from 3rd party provider to external login endpoint. */
  public async loginWith(userInfo: ExternalLogin): Promise<LoginResult> {
    return this.loginPost('/extlogin', userInfo);
  }

  /** Send user info to register endpoint. */
  public async register(userData: Register): Promise<LoginResult> {
    return this.loginPost('/register', userData);
  }

  protected async loginPost(endpoint: string, userData: any): Promise<LoginResult> {
    let data: string;
    try {
      data = await this.http.post(endpoint, userData).toPromise() as string;
    } catch (e) {
      return { error: e.message };
    }
    const user: User = parseUser(data);
    return { user };
  }
}
