import {Component, inject, Signal} from '@angular/core';
import {AuthService} from '../../features/auth/services/auth.service';

@Component({
  selector: 'connection-state',
  imports: [],
  templateUrl: './connection-state.component.html',
  styleUrl: './connection-state.component.scss'
})
export class ConnectionStateComponent {
  private $authService:AuthService = inject(AuthService);

  userConnected: Signal<boolean> = this.$authService.isConnected;

  seConnecter() {
    this.$authService.seConnecter();
  }
}
