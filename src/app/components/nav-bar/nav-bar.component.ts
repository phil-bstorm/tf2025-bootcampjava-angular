import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';

export interface INavLink {
  label: string,
  routerLink?: string | Array<any>
  children?: INavLink[]
}

@Component({
  selector: 'nav-bar',
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  links = input.required<INavLink[]>()
}
