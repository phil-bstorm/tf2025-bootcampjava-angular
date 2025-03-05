import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected = signal(false);

  seConnecter(){
    this.isConnected.update(() => true);
  }
}
