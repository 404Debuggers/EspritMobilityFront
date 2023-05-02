import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  
  ListInterview : any;
  form : boolean =true;
 
  closeResult! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
