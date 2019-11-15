import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../../services/advertisement.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisement-create',
  templateUrl: './advertisement-create.component.html',
  styleUrls: ['./advertisement-create.component.scss']
})
export class AdvertisementCreateComponent implements OnInit {

  advertisementForm: FormGroup;

  constructor(private advertisementService: AdvertisementService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.advertisementForm = new FormGroup({});
    this.advertisementForm.addControl('title', new FormControl(null, [Validators.required]));
    this.advertisementForm.addControl('content', new FormControl(null, [Validators.required]));
  }

  onSubmit() {
    const title = this.advertisementForm.value['title'];
    const content = this.advertisementForm.value['content'];
    this.advertisementService.postAdvertisement(title, content)
      .subscribe(
        () => {
          console.log('post advertisement succeeded');
          this.router.navigate(['/advertisement/index']);
        },
        () => {
          console.log('post advertisement failed');
        }
      );
  }


}
