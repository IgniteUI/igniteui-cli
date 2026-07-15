import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular';
import { UserStore } from '../services/user-store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  imports: [IgxAvatarComponent]
})
export class Profile {
  public userStore = inject(UserStore);
}
