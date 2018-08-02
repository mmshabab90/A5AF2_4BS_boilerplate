import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;


  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router) {
      this.user = firebaseAuth.authState;
    }

    isLoggedIn() {
      if (this.userDetails == null ) {
          return false;
      } else {
        return true;
      }
    }

    signup(email: string, password: string) {
      this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Registration Successful!');
          this.router.navigate(['/alarms']);
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }

    login(email: string, password: string) {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          this.router.navigate(['/alarms']);
          console.log('Login Successful!');
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }

    logout() {
      this.firebaseAuth.auth.signOut()
        .then((res) => this.router.navigate(['/login']));
    }

}
