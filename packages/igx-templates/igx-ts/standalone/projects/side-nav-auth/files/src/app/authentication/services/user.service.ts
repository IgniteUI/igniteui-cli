import { Injectable, isDevMode } from '@angular/core';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage';

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
  // tslint:disable-next-line:variable-name
  private _currentUser: User | null;
  /** Current logged in user, if any */
  public get currentUser() { return this._currentUser; }

  /** Initials of the current user, if any */
  public get initials(): string | null {
    if (!this.currentUser) {
      return null;
    }
    let initials = this.currentUser.given_name.substr(0, 1);
    if (this.currentUser.family_name) {
      initials += this.currentUser.family_name.substr(0, 1);
    }
    return initials;
  }

  constructor(private localStorage: LocalStorageService) {
    const storedUser = this.localStorage.getItem(USER_TOKEN);
    this._currentUser = storedUser ? JSON.parse(storedUser) : null;
  }

  /** Save new login as current user */
  public setCurrentUser(user: User) {
    if (isDevMode()) {
      this.localStorage.setItem(USER_TOKEN, JSON.stringify(user));
    }
    this._currentUser = user;
  }

  /** Clear current user */
  public clearCurrentUser() {
    this._currentUser = null;
    this.localStorage.removeItem(USER_TOKEN);
  }
}
