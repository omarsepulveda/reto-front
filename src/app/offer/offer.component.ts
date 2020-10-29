import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offerSelected: any;

  constructor(
    public appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getOffers();
  }

}
