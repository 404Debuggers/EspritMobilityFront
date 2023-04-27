import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';
import { Offer } from '../class/offer';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {
  offer: Offer | undefined;

  constructor(private route: ActivatedRoute, private offerService: OfferService, private router: Router) { }

  ngOnInit(): void {


    const id = this.route.snapshot.paramMap.get('id');
    this.offerService.getofferbyid(id).subscribe();
  }

  editOffer(offer : Offer){
    this.offerService.editOffer(offer).subscribe();
  }
  

  }


