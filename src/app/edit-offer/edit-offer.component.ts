import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';
import { NgForm } from '@angular/forms';
import { Offer } from '../class/offer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {
  offer: Offer | undefined;
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

  constructor(private offerService :OfferService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('offerId');
    this.offerId=id;
    console.log(id)

  }
  editOffer(offer : NgForm){
    this.offerService.editOffer(offer.value).subscribe();
    this.router.navigate(['/offer']);
  }

}
