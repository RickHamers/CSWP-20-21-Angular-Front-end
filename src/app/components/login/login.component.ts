import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({});
    this.loginForm.addControl('username', new FormControl(null, [Validators.required]));
    this.loginForm.addControl('password', new FormControl(null, [Validators.required]));
  }
  onSubmit() {
    const username = this.loginForm.value['username'];
    const password = this.loginForm.value['password'];
    this.authService.login(username, password)
      .subscribe(
        () => {
        console.log('login succeeded');
        this.router.navigate(['/advertisement/index']);
        },
        () => {
          console.log('login failed');
        }
      );
  }
}
