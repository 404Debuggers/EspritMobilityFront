import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/shared/offer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
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

  toogle() {
    const element = document.body as HTMLBodyElement;
    element.classList.toggle('toggle-sidebar');
  }
}
