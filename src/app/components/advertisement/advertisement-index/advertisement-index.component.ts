import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../../services/advertisement.service';

@Component({
  selector: 'app-advertisement-index',
  templateUrl: './advertisement-index.component.html',
  styleUrls: ['./advertisement-index.component.scss']
})
export class AdvertisementIndexComponent implements OnInit {

  advertisements$;

  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit() {
    this.advertisements$ = this.advertisementService.getAllAdvertisements();
  }

}
