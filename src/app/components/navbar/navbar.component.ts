import { AuthService } from './../../services/security/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public currentUser: any = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe( user => {
      this.currentUser = user;
    });
  }

  loggedIn() {
    this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logout();
  }

}
