import { Injectable } from '@angular/core';

/*importar librerías*/
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private platform: Platform,
    private router: Router
  ) {

  }

  login() {
    var objeto ={
      user_name:'juan',
      user_pass:'1234'
    }
    this.storage.create();
    this.storage.set('USER',objeto).then((resp)=>{
      console.log(objeto);
      this.router.navigate(['menu']);
      this.authState.next(true);
    });
   }

  logout() {
    this.storage.create();
    this.storage.remove('USER').then(()=>{
      this.router.navigate(['login']);
      this.authState.next(false);
    });
   }

  isAuthenticated():boolean {
    return this.authState.value;
   }
   
  ifLogin() {
    this.storage.create();
    this.storage.get('USER').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

}
