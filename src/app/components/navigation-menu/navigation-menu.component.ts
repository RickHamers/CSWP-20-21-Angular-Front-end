import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  userID;

  isLoggedIn$: Observable<boolean>;

  constructor(private authservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authservice.isLoggedIn;
    this.userID = this.authservice.returnUserID();
  }
  
  onLogout() {
    this.authservice.logout();
    this.router.navigate(['/login']);
  }
}
