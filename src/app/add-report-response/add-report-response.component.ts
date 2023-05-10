import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReponseReport } from '../class/reponse-report';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseReportService } from '../shared/response-report.service';

@Component({
  selector: 'app-add-report-response',
  templateUrl: './add-report-response.component.html',
  styleUrls: ['./add-report-response.component.css']
})
export class AddReportResponseComponent implements OnInit {

  reponseform! :FormGroup;
  reponseReport!:ReponseReport;
  reportId:any;

  constructor(private route: ActivatedRoute,
    private router: Router,private reponseReportService: ResponseReportService, private fb: FormBuilder) {
      this.reponseform = this.fb.group({
        reportId: [ Validators.required],
        repdescription: ['', Validators.required]
      });
}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.reportId = params.get('id');
    });
  }
  addReponse() {
    const reponseReport = this.reponseform.value;
    this.reponseReportService.addReponse(this.reportId, reponseReport).subscribe({
      next: (response) => {
        console.log(response);
        console.log(reponseReport);
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.router.navigate(['/report'])
  }


}
