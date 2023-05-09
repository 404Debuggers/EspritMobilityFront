import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';
import { Offer } from '../class/offer';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})

export class OfferComponent implements OnInit {
  form : boolean = false;
  
  offerId: any;
  isFavorite: boolean;
  offers: any[] = [];

  constructor(private offerService: OfferService, private route: ActivatedRoute) {
    this.isFavorite = false;
  }

  ngOnInit(): void {
    // this.offerId = +this.route.snapshot.paramMap.get('id')?.toString();

    // this.offerService.getAllOffer().subscribe(offer => {
    //   this.offer = offer;
    //   this.isFavorite = this.checkIfOfferInFavorites();
    // });

    this.offerService.getSimilarOffers(sessionStorage.getItem("id")).subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );
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
  
  

  // toggleFavorite(offerId: any) {
  //   if (this.isFavorite) {
  //     this.deleteFavorite(offerId);
  //     console.log('Offer removed from favorites');
  //   } else {
  //     this.addFav(offerId);
  //     console.log('Offer added to favorites');
  //   }
  //   this.isFavorite = !this.isFavorite;
  // }

  addFav(offerId: any) {

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.indexOf(offerId) === -1) {
      favorites.push(offerId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    this.offerService.addFavandAssigntouser(sessionStorage.getItem("id"),offerId).subscribe(() => {});
  }

  deleteFavorite(offerId: any) {
    this.offerService.deleteFavorite(sessionStorage.getItem("id"),offerId).subscribe(() => {});
  }







  // checkIfOfferInFavorites(): boolean {
  //   const found = this.offerService.getFavOffers(sessionStorage.getItem("id")).find((o: any) => o.id === this.offerId);
  //   return found !== undefined;
  // }
  }






  // addFav(offerId: any) {
  //   const userId = sessionStorage.getItem("id");
  //   const found = this.offers.find((o: any) => o.id === offerId);

  //   if (!found) {
  //     this.offerService.addFavandAssigntouser(userId, offerId).subscribe(
  //       (response) => {
  //         console.log(response);
  //         this.offers.push(found);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // }
  


