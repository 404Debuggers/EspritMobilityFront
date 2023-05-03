import { Component, OnInit } from '@angular/core';
import { DormitoriesService } from '../shared/dormitories.service';

@Component({
  selector: 'app-dormitories',
  templateUrl: './dormitories.component.html',
  styleUrls: ['./dormitories.component.css']
})
export class DormitoriesComponent implements OnInit {
dorms : any;

role:string | undefined;

  constructor(private DormitoriesService : DormitoriesService) { }

getalldorm(){
  this.DormitoriesService.GetAllDorm().subscribe(data =>{
    this.dorms = data
  });
}

  ngOnInit(): void {
    this.getalldorm();
    this.role = ""+sessionStorage.getItem("Role");
  
    this.dorms={
     DormitoriesId :null,
     Dormstatus:null,
     rent:null,
     NbPlaces :null,
     location :null,
     lattitude:null,
     longitude:null,
     archive:null,
     prix:null,  
     dormType:null,
     rating:null
    }
  }

  deleteDorm(DormitoriesId: any) {

    console.log("DormitoriesId test",DormitoriesId);
    this.DormitoriesService.deleteDorm(DormitoriesId).subscribe();
    window.location.reload();
  }

}
