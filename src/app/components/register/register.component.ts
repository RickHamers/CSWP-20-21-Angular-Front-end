import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({});
    this.registerForm.addControl('username', new FormControl(null, [Validators.required]));
    this.registerForm.addControl('password', new FormControl(null, [Validators.required]));
  }

  onSubmit() {
    const username = this.registerForm.value['username'];
    const password = this.registerForm.value['password'];
    this.authservice.register(username, password)
      .subscribe(
        () => {
          console.log('register succeeded');
          this.router.navigate(['/login']);
        },
        () => {
          console.log('register failed');
        }
      );
  }
  
}
