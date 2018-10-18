import { Injectable, isDevMode } from '@angular/core';

import { User } from '../models/user';

const USER_TOKEN = 'currentUser';


/**
 * Service used to store and provide the current logged in user in the app.
 *
 * **NOTE**: Keep in mind using local storage can be susceptible to XSS attacks.
 * Consider not storing the User o the client storage if the app requirements allow,
 * adding a fingerprint to the JWT claims that is sent with a secure cookie,
 * or other security measures.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _currentUser: User;
  /** Current logged in user, if any */
  public get currentUser(): User { return this._currentUser; }

  /** Initials of the current user, if any */
  public get initials(): string {
    if (!this.currentUser) {
      return null;
    }
    let initials = this.currentUser.given_name.substr(0, 1);
    if (this.currentUser.family_name) {
      initials += this.currentUser.family_name.substr(0, 1);
    }
    return initials;
  }

  constructor() {
    this._currentUser = JSON.parse(localStorage.getItem(USER_TOKEN));
  }

  /** Save new login as current user */
  public setCurrentUser(user: User) {
    if (isDevMode()) {
      localStorage.setItem(USER_TOKEN, JSON.stringify(user));
    }
    this._currentUser = user;
  }

  /** Clear current user */
  public clearCurrentUser() {
    this._currentUser = null;
    localStorage.removeItem(USER_TOKEN);
  }
}
