import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';
import { Router } from '@angular/router';
import { Offer } from '../class/offer';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-program-offer',
  templateUrl: './program-offer.component.html',
  styleUrls: ['./program-offer.component.css']
})
export class ProgramOfferComponent implements OnInit {

  offer: Offer = new Offer();

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
  offerDate: any; 
  showDatePicker = false;

  
  
 
  constructor(private offerService : OfferService , private router: Router ) { }

  ngOnInit(): void {
  }

  addOfferWithDate(f: NgForm, offerTime: string) {
    const newOffer = new Offer();
newOffer.title = this.offer.title;
newOffer.description = this.offer.description;
newOffer.fieldOfStudy = this.offer.fieldOfStudy;
newOffer.frais = this.offer.frais;

    this.offerService.addOfferAtSpecificTime(this.offer, offerTime).subscribe();
    f.resetForm();
  }
 


}
