import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  userId: string;
  username: string;
  passwordForm: FormGroup;
  showAlert: boolean = false;
  alert = {
    type: "",
    message: ""
  }

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.userId = this.authService.returnUserID();
    this.username = this.authService.returnUsername();

    this.passwordForm = new FormGroup({});
    this.passwordForm.addControl('oldPassword', new FormControl(null, [Validators.required]));
    this.passwordForm.addControl('newPassword', new FormControl(null, [Validators.required]));
  }

  onSubmit() {
    const username = this.username;
    const oldPassword = this.passwordForm.value['oldPassword'];
    const newPassword = this.passwordForm.value['newPassword'];
    this.authService.updatePassword(username, oldPassword, newPassword)
      .subscribe(
        () => {
          this.alert = {
            type: "succes",
            message: "Password change succesful!"
          }
          this.showAlert = true;
          console.log('password change succeeded');
          this.router.navigate(['/account/profile']);
        },
        () => {
          this.alert = {
            type: "danger",
            message: "Password change failed"
          }
          this.showAlert = true;
          console.log('password change failed');
        }
      );
  }
}
