import {inject, Injectable, signal} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private $router: Router = inject(Router);

  isConnected = signal(false);

  seConnecter(){
    this.isConnected.update(() => !this.isConnected());

    if(!this.isConnected()) {
      this.$router.navigate(["/"]);
    }
  }
}
