import {Component, inject, input, Signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../features/auth/services/auth.service';

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
  private $authService:AuthService = inject(AuthService);

  links = input.required<INavLink[]>()
  // userConnected: boolean = false;
  userConnected: Signal<boolean> = this.$authService.isConnected;

  seConnecter() {
    this.$authService.seConnecter();
  }
}
