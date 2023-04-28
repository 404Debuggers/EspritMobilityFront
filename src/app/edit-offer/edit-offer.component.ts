import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';
import { Offer } from '../class/offer';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { error } from 'console';
import { NgForm } from '@angular/forms';

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

  constructor(private route: ActivatedRoute, private offerService: OfferService, private router: Router) { }

  ngOnInit(){

    const id = this.route.snapshot.paramMap.get('offerId');
    this.offerId=id;
    console.log(id)
    this.offerService.getofferbyid(id).subscribe(      (data) => {console.log(data)
      },
      (error) => { console.error(error); }
    );

  }

  editOffer(offer : NgForm){
    this.offerService.editOffer(offer.value).subscribe();
  }
  
  

  }


