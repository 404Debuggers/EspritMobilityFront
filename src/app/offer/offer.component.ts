import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';
import { RouterModule } from '@angular/router';
import {Router} from "@angular/router";
import { CandidacyService } from '../shared/candidacy.service';
import { Offer } from '../class/offer';
import { error } from 'console';

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
  isFavorite: boolean | undefined;
  constructor(private offerService : OfferService,private router: Router) { }

  ngOnInit(): void {
    const token = sessionStorage.getItem('Token') || 'default_token';
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
    //this.offerService.getAllOffer().subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );
    this.offerService.getSimilarOffers(token).subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );
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
    chart(offer: Offer) {
      this.router.navigate(['/chart', offer.offerId]);
    }
    toggleFavorite(offerId: any) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const index = favorites.indexOf(offerId);
      if (this.checkIfOfferInFavorites(offerId)) {
        this.deleteFavorite(offerId);
        console.log('Offer removed from favorites');
        if (index !== -1) {
          favorites.splice(index, 1);
        }
      } else {
        this.addFav(offerId);
        console.log('Offer added to favorites');
        if (index === -1) {
          favorites.push(offerId);
        }
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
      this.isFavorite = !this.isFavorite;
    }

    checkIfOfferInFavorites(offerId: any): boolean {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      return favorites.includes(offerId);
    }

    addFav(offerId: any) {


      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      if (favorites.indexOf(offerId) === -1) {
        favorites.push(offerId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
      this.offerService.addFavandAssigntouser(offerId).subscribe(() => {});
    }

    deleteFavorite(offerId: any) {

      this.offerService.deleteFavorite(offerId).subscribe((response) => {
        console.log(response);

      },
      (error) => {
        console.log(error);}
        );
    }
    redirectToprogramoffer() {
      this.router.navigate(['programOffer']);

      }
}

