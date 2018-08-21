import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './model/LoginResultModel'
import {User} from './model/UserModel'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }

  register(firstName: string, lastName: string, email: string, password: string): Observable<User> {
    return this.http.post<User>('https://reqres.in/api/register', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });
  }
}
