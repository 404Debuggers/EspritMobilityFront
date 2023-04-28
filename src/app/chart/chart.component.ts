import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferService } from '../shared/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  offerId: any | undefined;
 
  constructor(private offerService : OfferService , private router: Router) { }

  

  ngOnInit(): void {
  }
  
}
