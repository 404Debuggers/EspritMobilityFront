import { Component, OnInit } from '@angular/core';
import { ReponseReport } from '../class/reponse-report';
import { ResponseReportService } from '../shared/response-report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-response',
  templateUrl: './report-response.component.html',
  styleUrls: ['./report-response.component.css']
})
export class ReportResponseComponent implements OnInit {
  listReponseReport: any;
  form : boolean = true;
  reponse! : ReponseReport;
  constructor(private reponseReportService:ResponseReportService
    ,private router:Router) { }

  ngOnInit(): void {
    this.getAllReponse();

  }

  getAllReponse() {
    this.reponseReportService.getAllReponse().subscribe(data => {this.listReponseReport = data});
  }
  reloadComponent(): void {
    const currentRoute = this.router.url.split('?')[0];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }

}
