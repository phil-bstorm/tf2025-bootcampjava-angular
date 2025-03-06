import {Component, inject, input, Signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../features/auth/services/auth.service';

@Component({
  selector: 'nav-bar',
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  private $auth: AuthService = inject(AuthService);

  userConnected: Signal<boolean> = this.$auth.isConnected;
}
