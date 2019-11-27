import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from './../../../../environments/environment.prod';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  deleteAccountForm: FormGroup
  loggedInUsername: string;
  @ViewChild ('deleteAccountModal', { static: false }) public deleteAccountModal: ElementRef;

  public uploader: FileUploader = new FileUploader({url: environment.apiUrl + '/profile/photo', itemAlias: 'profilePicture'})

  constructor(
    private authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit() {
    this.loggedInUsername = this.authService.returnUsername();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      alert('File uploaded succesfully');
    }

    this.deleteAccountForm = new FormGroup({});
    this.deleteAccountForm.addControl('username', new FormControl(null, [Validators.required]))
  }

  onSubmitDeleteAccount() {
    console.log('onSubmitDeleteAccount()');
    if (this.deleteAccountForm.value['username'] == this.loggedInUsername ) {
      this.authService.deleteAccount()
      .subscribe(
        () => {
          console.log('Delete account succeeded');
          this.deleteAccountModal.nativeElement.click();
          this.router.navigate(['/login']);
        }
      ),
      () => {
        console.log('Delete account failed');
      }
    } else {
      //TODO SHOW ALERT
      console.log('Username did not match')
    }
  }
}
