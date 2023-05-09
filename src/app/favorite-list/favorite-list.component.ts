import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  offers: any[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit() {
    const userId = Number(sessionStorage.getItem("id"));
    this.offerService.getFavOffers(userId).subscribe(
      (offers: any[]) => {
        this.offers = offers;
        console.log(this.offers); // print the fetched offers to the console
      },
      (error: any) => console.log(error)
    );
  }

  deleteFavorite(offerId: any) {
    this.offerService.deleteFavorite(sessionStorage.getItem("id"),offerId).subscribe(() => {});
    this.offerService.getFavOffers(sessionStorage.getItem("id")).subscribe(
      (offers: any[]) => {
        this.offers = offers;
        console.log(this.offers); // print the fetched offers to the console
      },
      (error: any) => console.log(error)
    );

  }

}
