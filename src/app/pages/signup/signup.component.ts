import { AuthService } from './../../services/security/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { User } from '../../classes/user';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  private dbPath = '/users';

  user: FirebaseObjectObservable<User> = null;
  users: FirebaseListObservable<User[]> = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  private createForm(): void {
    this.signupForm = this.fb.group({
      // fullName: ['', [Validators.required]],
      // username: ['', [Validators.required]],
      // phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submit(): void {
    // TODO call the auth service
      if (this.signupForm.valid) {
        const {email, password} = this.signupForm.value;
        this.authService.signup(email, password);
      }
  }

}
