import {inject, Injectable, signal} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private $router: Router = inject(Router);

  isConnected = signal(false);

  constructor() {
    // const tokenFromStorage = localStorage.getItem("token");
    // const convertedToken = tokenFromStorage === "true";
    // this.isConnected.update(() => convertedToken);
    this.isConnected.update(() => localStorage.getItem("token") === "true");
  }

  seConnecter(){
    this.isConnected.update(() => !this.isConnected());

    localStorage.setItem("token", String(this.isConnected()));

    if(!this.isConnected()) {
      this.$router.navigate(["/"]);
    }
  }
}
