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
  isProfilePictureLoading: boolean;
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
    this.retrievePhoto();

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

  retrievePhoto(){
    this.isProfilePictureLoading = true;
    this.userService.getProfilePicture()
    .subscribe(
      (result) => {
       let resultString = JSON.stringify(result);
       let substring = resultString.substring(resultString.indexOf(',' + 1), resultString.indexOf('}'))
      //var image = btoa(resultString.substring(resultString.indexOf(',' + 1), resultString.indexOf('}')));
      console.log("Formatted:" + "\n" +  substring)
      var image = btoa(resultString);
        this.imageSource  = image;
        this.isProfilePictureLoading = false;
        console.log('retrievePhoto() succeeded');
      },
      () => {
        this.isProfilePictureLoading = false;
        console.log('retrievePhoto() failed');
      }
    )
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
