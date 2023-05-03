import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  form : boolean = false;
  offers :any | undefined;
  constructor(private offerService : OfferService) { }

  ngOnInit(): void {

    //this.offerService.getAllOffer().subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );
    
    this.offerService.getSimilarOffers(sessionStorage.getItem("id")).subscribe((data) => { this.offers = data ;
      console.log(data);
    });
    


  }


}
