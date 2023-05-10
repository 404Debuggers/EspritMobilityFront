import { Component, OnInit } from '@angular/core';
import { ReportService } from '../shared/report.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  reportform! :FormGroup;
  userId:string | undefined
  constructor(private reportService: ReportService, private fb: FormBuilder,private router: Router,) {
    this.reportform=this.fb.group({
      status:[null,[Validators.required]],
      type:[null,[Validators.required]],
      description:[null,[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.userId = ""+sessionStorage.getItem("id");
    console.log(this.userId);
  }

  AddReport(){
    this.reportService.addReport(this.reportform.value).subscribe({
      next:(Response)=> {console.log(Response)},
      error:(error)=> {console.log(error)}})
      this.router.navigate(['/report']);
        }




}
