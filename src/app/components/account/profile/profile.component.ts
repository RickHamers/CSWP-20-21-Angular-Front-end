import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {environment} from './../../../../environments/environment.prod';
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FileUploader, FileSelectDirective} from 'ng2-file-upload'
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  imageSource: string
  deleteAccountForm: FormGroup
  loggedInUsername: string;
  @ViewChild('deleteAccountModal', {static: false}) public deleteAccountModal: ElementRef;

  public uploader: FileUploader = new FileUploader({
    url: environment.apiUrl + '/profile/photo',
    itemAlias: 'profilePicture'
  })

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loggedInUsername = this.authService.returnUsername();
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('FileUpload:uploaded:', item, status, response);
      alert('File uploaded succesfully');
    }

    this.deleteAccountForm = new FormGroup({});
    this.deleteAccountForm.addControl('username', new FormControl(null, [Validators.required]))
  }

  onSubmitDeleteAccount() {
    console.log('onSubmitDeleteAccount()');
    if (this.deleteAccountForm.value['username'] == this.loggedInUsername) {
      this.authService.deleteAccount()
        .subscribe(
          () => {
            console.log('Delete account succeeded');
            this.deleteAccountModal.nativeElement.click();
            this.authService.logout();
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

  uploadProfilePicture() {
    try {
      this.userService.uploadProfilePicture(this.imageSource)
        .subscribe(
          () => {
            console.log('uploadProfilePicture() succeeded');
          },
          () => {
            console.log('uploadProfilePicture() failed');
          }
        )
    } catch (e) {
      console.log(e);
    }
  }

  previewPhoto(inputFile: any) {
    try {
      if (inputFile.target.files && inputFile.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (result) => {
          console.log(result.target['result']);
          this.imageSource = result.target['result']
        };
        reader.readAsDataURL(inputFile.target.files[0]);
      }
    } catch (e) {
      console.log(e);
    }
  }
}
