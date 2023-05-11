import { Component, OnInit } from '@angular/core';
import { OfferService } from '../shared/offer.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  role:string | undefined;
  offers: any[] = [];
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {

    const token = sessionStorage.getItem('Token') || 'default_token';
    this.role = ""+sessionStorage.getItem("Role");


    this.offerService.getFavOffers().subscribe(
      (offers: any[]) => {
        this.offers = offers;
        console.log(this.offers); // print the fetched offers to the console
      },
      (error: any) => console.log(error)
    );



  }



  deleteFavorite(offerId: any) {
    this.offerService.deleteFavorite(offerId).subscribe(() => {});
    this.offerService.getFavOffers().subscribe(
      (offers: any[]) => {
        this.offers = offers;
        console.log(this.offers); // print the fetched offers to the console
      },
      (error: any) => console.log(error)
    );

  }

}
