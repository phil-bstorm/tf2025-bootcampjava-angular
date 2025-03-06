import { CanActivateFn } from '@angular/router';
import {AuthService} from '../../auth/services/auth.service';
import {inject} from '@angular/core';

export const connectedGuard: CanActivateFn = (route, state) => {
  const $auth:AuthService = inject(AuthService);

  if($auth.isConnected()){
    console.log("Ok passe.");
    return true;
  }
  console.log("TU N'ES PAS CONNECTE!");
  return false;
  // return $auth.isConnected() //en plus court
};
