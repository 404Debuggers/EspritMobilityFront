import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { OfferService } from '../shared/offer.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Offer } from '../class/offer';


@Component({
  selector: 'app-offer-back',
  templateUrl: './offer-back.component.html',
  styleUrls: ['./offer-back.component.css']
})
export class OfferBackComponent implements OnInit {
  form : boolean = true;
  offers :any | undefined;
  offerId : any
  dateDebut: any;
  dateFin: any
  nbPlace: any;
  description: any;
  deadline: any;
  fieldOfStudy: any;
  prerequis: any;
  image: any;
  frais: any;
  archive: any;
  university: any;
  title: any;

  
  
 
  constructor(private offerService : OfferService , private router: Router) { }
  ngOnInit(): void {
    this.offerService.getAllOffer().subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );
  }

  addOffer(offer: any) {
    //console.log(p.value)
    this.offerService.addOffer(offer.value).subscribe()
    };

    deleteOffer(offerId: any){
      console.log('Offer ID:', offerId);
      this.offerService.deleteOffer(offerId).subscribe(
        response => {
          // Handle success
          this.offerService.getAllOffer().subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );
        },
        error => {
          console.error('Error deleting offer:', error);
        }
      );
    }

    editOffer(offer: Offer) {
      this.router.navigate(['/', offer.offerId]);
    }
    
   
  
}
