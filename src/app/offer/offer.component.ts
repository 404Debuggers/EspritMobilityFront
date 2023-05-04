import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';
import { RouterModule } from '@angular/router';
import {Router} from "@angular/router";
import { CandidacyService } from '../shared/candidacy.service';
import { Offer } from '../class/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  role:string | undefined;
  form : boolean = true;
  offers :any | undefined;
  offer!:Offer;
  constructor(private offerService : OfferService,private router: Router) { }

  ngOnInit(): void {
    this.role = ""+sessionStorage.getItem("Role");
    this.offer = {
      offerId: null,
      dateDebut: null,
      dateFin: null,
      nbPlace: null,
      description: null,
      deadline: null,
      fieldOfStudy: null,
      prerequis: null,
      image: null,
      frais: null,
      archive: null,
      university: null,
      title: null,
    }
    this.offerService.getAllOffer().subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );
  }
   redirectToCandidacyForm(offerId: number) {

    this.router.navigate(['addcandidacy/',offerId]);     console.log("hhhhhhhhhh");
}
// redirectToCandidacyForm(offerId: number) {
//   this.router.navigate(['addcandidacy/id:', offerId]);
// }
redirectTocandidacylist(offerId: number) {
  this.router.navigate(['viewcandidacybyoffer', offerId]);

  }
  redirectToaddoffer() {
    this.router.navigate(['addoffer']);

    }
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
      window.location.reload();
    }
    redirectToeditOffer(offer: Offer) {
      this.router.navigate(['/editoffer', offer.offerId]);
    }
}

