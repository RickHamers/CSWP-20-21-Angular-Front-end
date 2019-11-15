import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService } from '../../../services/advertisement.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-advertisement-edit',
  templateUrl: './advertisement-edit.component.html',
  styleUrls: ['./advertisement-edit.component.scss']
})
export class AdvertisementEditComponent implements OnInit {

  editAdvertisementForm: FormGroup;
  advertisement;
  isLoading: boolean = true;
  getAdvertisementSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private advertisementService: AdvertisementService, private authservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (result) => {
        this.getAdvertisementSubscription = this.advertisementService.getAdvertisement(result.id)
          .subscribe(
            (result) => {
              this.advertisement = result;
              this.isLoading = false;
            });
      });

    this.editAdvertisementForm = new FormGroup({});
    this.editAdvertisementForm.addControl('title', new FormControl(null, [Validators.required]));
    this.editAdvertisementForm.addControl('content', new FormControl(null, [Validators.required]));
  }

  onSubmit() {
    const title = this.editAdvertisementForm.value['title'];
    const content = this.editAdvertisementForm.value['content'];
    const advertisementId = this.advertisement._id;
    this.advertisementService.updateAdvertisement(title, content, advertisementId)
      .subscribe(
        () => {
          console.log('update advertisement succeeded');
          this.router.navigate(['/advertisement/detail/' + advertisementId]);
        },
        () => {
          console.log('update advertisement failed');
        }
      );
  }

}
