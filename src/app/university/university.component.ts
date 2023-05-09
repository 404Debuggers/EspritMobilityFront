import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../shared/university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  universities :any;

  form : boolean = true;
  universiteId: any
  nameUniversite: any
  location: any
  lattitude: any
  longitude: any
  description: any
  type: any
  image : any
  
  


  constructor(private universityservice:UniversityService) { }

  ngOnInit(): void {
    this.getAllUniv();

    
  }
  getAllUniv(){
    this.universityservice.getAllunis().subscribe((res:any)=>this.universities=res);
  }

  addUni(university: any) {
    //console.log(p.value)
    this.universityservice.addUni(university.value).subscribe()
    this.getAllUniv()

}

suppUni(universiteId: any){
  console.log('Offer ID:', universiteId);
  this.universityservice.suppUni(universiteId).subscribe(() => {
    this.getAllUniv();
  });
       
}



}
