import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentGuardService {

  constructor(
    public authenticationService: AuthenticationService
  ) {

  }

  canActivate(): boolean {
    console.log('estado: '+this.authenticationService.isAuthenticated());
    return this.authenticationService.isAuthenticated();
  }
}
