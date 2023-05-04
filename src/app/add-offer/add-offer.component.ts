import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
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
  constructor(private offerService:OfferService,
    private router: Router,) { }

  ngOnInit(): void {
  }
  addOffer(offer: any) {
    //console.log(p.value)
    this.offerService.addOffer(offer.value).subscribe()
    this.offerService.getAllOffer().subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );
    this.router.navigate(['/offer']);
    };

}
