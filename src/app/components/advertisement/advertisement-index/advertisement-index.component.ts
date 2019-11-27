import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../../services/advertisement.service';

@Component({
  selector: 'app-advertisement-index',
  templateUrl: './advertisement-index.component.html',
  styleUrls: ['./advertisement-index.component.scss']
})
export class AdvertisementIndexComponent implements OnInit {

  advertisements$;
  isLoading: Boolean = false;
  isEmptyIndex: boolean = false;
  getAllAdvertisements;

  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit() {
    //TODO CLEANUP
    this.isLoading = true;
    this.getAllAdvertisements = this.advertisementService.getAllAdvertisements()
    .toPromise().
    finally(
      () => {
        this.advertisements$ = this.getAllAdvertisements;
        this.isLoading = false;
      }
      ).catch(
      (error) => {
        console.log('Error: ' + error.message)
        console.log('No advertisements found')
        this.isEmptyIndex = true;
        this.isLoading = false;
      }
    )
  }
}
