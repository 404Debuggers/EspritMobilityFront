import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { OfferService } from '../shared/offer.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Offer } from '../class/offer';


@Component({
  selector: 'app-offer-back',
  templateUrl: './offer-back.component.html',
  styleUrls: ['./offer-back.component.css']
})
export class OfferBackComponent implements OnInit {
  offer: Offer = new Offer();

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

  
  categories: any[] = ['male,0-18', 'male,19-30', 'male,31-50', 'male,>50', 'female,0-18', 'female,19-30', 'female,31-50', 'female,>50'];
  chartData: Map<any, any> | undefined;
 
  constructor(private offerService : OfferService , private router: Router) { }
  ngOnInit(): void {
    this.offerService.getAllOffer().subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );
  }


  

  addOffer(offer: any) {
    //console.log(p.value)
    this.offerService.addOffer(offer.value).subscribe()
    this.offerService.getAllOffer().subscribe(data => { this.offers = data ; } , err => { console.log(err.error)} );
    };

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
    }

    editOffer(offer: Offer) {
      this.router.navigate(['/edit-offer', offer.offerId]);
    }



    


 chart(offer: Offer) {
      this.router.navigate(['/chart', offer.offerId]);
    }

    
    // generateCharts(offerId: any) {
    //   this.offerService.getChartsForOffer(offerId).subscribe(
    //     charts => this.charts$ = charts
        
    //   );this.router.navigate(['/chart'])
    // }
   
    // generateCharts() {
    //   this.offerService.getChartsForOffer(this.offerId).subscribe(
    //     chartData => {
    //       // chartData is the data returned by the API call
    //       // you can pass this data to the chart component
    //       // and display the chart
    //       console.log(chartData);
    //     },
    //     error => {
    //       console.error('Error generating chart:', error);
    //     }
    //   );}

    // generateCharts(offerId: any) {
    //   console.log('Offer ID:', offerId);
    //   this.offerService.getChartsForOffer(offerId).subscribe((charts) => {
    //     this.chartData = charts;
    //     console.log(charts);
    //   });
    //   this.router.navigate(['/chart', offerId.offerId]);
    // }
    


    
}
