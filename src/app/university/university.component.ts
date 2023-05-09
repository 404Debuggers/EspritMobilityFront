import { Component, OnInit, ViewChild } from '@angular/core';
import { UniversityService } from '../shared/university.service';
import { University } from '../class/university';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  @ViewChild('f') univform!: NgForm;
  universities: University[] = [];
university!:University;
  form : boolean = true;
  universiteId: any
  nameUniversite: any
  location: any
  lattitude: any
  longitude: any
  description: any
  type: any
  image : any
  editMode: boolean = false;
  
  


  constructor(private universityservice:UniversityService) { }

  ngOnInit(): void {
    this.getAllUniv();
    

    
  }
  getAllUniv(){
    this.universityservice.getAllunis().subscribe((res:any)=>this.universities=res);
  }
  
  
  addUni(university: any) {
    //console.log(p.value)
    if(!this.editMode){
    this.universityservice.addUni(university.value).subscribe(() => {
      // update ListInterview with the new interview
      this.universityservice
        .getAllunis()
        .subscribe((res: any) => {
          this.universities = res;
        });
    });
    }
    else{
      
      this.universityservice.editUni(this.univform.value).subscribe(() => {
        const index = this.universities.findIndex(
          (i) => i.universiteId === this.university?.universiteId
        );
        if (index !== -1) {
          this.universities[index] = this.university;
        }
        this.editMode = false;
        this.university = new University();
        this.univform.resetForm();
        this.universityservice
        .getAllunis()
        .subscribe((res: any) => {
          this.universities = res;
        });
      })
      
  }
    }



suppUni(universiteId: any){
  console.log('Offer ID:', universiteId);
  this.universityservice.suppUni(universiteId).subscribe(() => {
    this.getAllUniv();
  });
       
}


OnEditClickedd(id: any) {
  let currentUniv = this.universities.find((p:any) => {
    return p.universiteId === id;
  });
  
  this.univform.form.patchValue({
    universiteId:currentUniv?.universiteId,
    nameUniversite: currentUniv?.nameUniversite,
    location: currentUniv?.location,
    lattitude: currentUniv?.lattitude,
    longitude: currentUniv?.longitude,
    description: currentUniv?.description,
    type: currentUniv?.type
    
  });

  this.editMode = true;
}
switch () {
  this.editMode = false
  this.university = {
    universiteId: null,
nameUniversite: null,
location: null,
lattitude: null, 
longitude: null,
description: null,
type: null,
image : null
    
  };
}
}