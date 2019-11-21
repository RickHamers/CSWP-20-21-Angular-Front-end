import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../../services/advertisement.service';

@Component({
  selector: 'app-advertisement-index',
  templateUrl: './advertisement-index.component.html',
  styleUrls: ['./advertisement-index.component.scss']
})
export class AdvertisementIndexComponent implements OnInit {

  advertisements$; //any[] ?
  isLoading: Boolean = false;
  getAllAdvertisementsSubscription: Subscription;

  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit() {
    // this.isLoading = true;
    // this.getAllAdvertisementsSubscription = this.advertisementService.getAllAdvertisements()
    // .subscribe(
    //   (result) => {
    //     console.log(result);
    //     result = this.advertisements$
    //     this.isLoading = false;
    //   }
    // )
   this.advertisements$ = this.advertisementService.getAllAdvertisements();
  }
}
