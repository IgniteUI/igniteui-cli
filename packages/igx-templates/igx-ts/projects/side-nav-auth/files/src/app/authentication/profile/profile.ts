import { Component, inject } from '@angular/core';
import { UserStore } from '../services/user-store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  public userStore = inject(UserStore);
}
