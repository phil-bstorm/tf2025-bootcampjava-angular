import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {INavLink, NavBarComponent} from '../../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'user',
  imports: [
    RouterOutlet,
    NavBarComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  links: INavLink[] = [
    {
      label: "list",
      routerLink: ['list']
    },
    {
      label: "details",
      routerLink: ['details']
    }
  ];
}
