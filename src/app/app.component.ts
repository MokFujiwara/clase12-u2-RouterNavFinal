import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private platform: Platform,
    private authServ: AuthenticationService
  ) {
    platform.ready().then(() => {
      authServ.authState.subscribe(estado => {
        if (estado) {
          router.navigate(['menu']);
        } else {
          router.navigate(['login']);
        }
      });
    });
  }
}
