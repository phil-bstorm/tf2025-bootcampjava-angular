import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavBarComponent} from '../../../components/nav-bar/nav-bar.component';
import {NavBarUserComponent} from '../components/nav-bar-user/nav-bar-user.component';

@Component({
  selector: 'user',
  imports: [
    RouterOutlet,
    NavBarComponent,
    NavBarUserComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
