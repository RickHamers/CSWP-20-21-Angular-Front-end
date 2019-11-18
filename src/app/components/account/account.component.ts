import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  username;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.username = this.authService.returnUsername();
  }
}
