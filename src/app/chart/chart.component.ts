import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, Color } from 'chart.js';
import { OfferService } from '../shared/offer.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

//   offerId: any | undefined;
//   chartData: any;

//   public pieChartOptions: ChartOptions = {
//     responsive: true,
//   };
//   public pieChartLabels: any[] = [];
//   public pieChartData: any[] = [];
//   public pieChartType: ChartType = 'pie';
//   public pieChartLegend: boolean = true;
//   public pieChartColors: Color[] = [
//     {
//     backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(255, 205, 86, 0.5)'],
//     borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 205, 86, 1)'],
//     hoverBackgroundColor: ['rgba(255, 99, 132, 0.8', 'rgba(255, 159, 64, 0.8', 'rgba(255, 205, 86, 0.8'],
//     hoverBorderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 205, 86, 1)']
//     },
//   ];
//   constructor(private offerService : OfferService , private router: Router , private route: ActivatedRoute) {
//     monkeyPatchChartJsTooltip();
//     monkeyPatchChartJsLegend();}



   ngOnInit(): void {


//     const id = this.route.snapshot.paramMap.get('offerId');
//     this.offerId = id;

//     this.offerService.getChartsForOffer(this.offerId).subscribe((charts: Map<any, any>) => {
//       console.log('Offer ID:', this.offerId);
//       this.chartData = charts;
//   console.log(this.chartData);
//   for (const [key, value] of this.chartData.entries()) {
//     this.pieChartLabels.push(key);
//     this.pieChartData.push(value);
//     (this.pieChartColors[0].backgroundColor as string[]).push(value.color);
//   }
// });




 }

}
