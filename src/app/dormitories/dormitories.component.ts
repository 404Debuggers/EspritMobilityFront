import { Component, OnInit } from '@angular/core';
import { DormitoriesService } from '../shared/dormitories.service';
import { Router } from '@angular/router';
import { Reservation } from '../class/reservation';

@Component({
  selector: 'app-dormitories',
  templateUrl: './dormitories.component.html',
  styleUrls: ['./dormitories.component.css']
})
export class DormitoriesComponent implements OnInit {
  role:string | undefined;
  dorms : any;
  constructor(private DormitoriesService : DormitoriesService,private router: Router) { }

getalldorm(){
  this.DormitoriesService.GetAllDorm().subscribe(data =>{
    this.dorms = data
  });
}

  ngOnInit(): void {
    this.role = ""+sessionStorage.getItem("Role");
    this.getalldorm();
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
  redirectToaddDorm() {
    this.router.navigate(['addDorm']);

    }
    redirectToaddReservation(dormId: number){
      this.router.navigate(['addReservation/',dormId]);     console.log("hhhhhhhhhh");
    }
    addpaiment(){
      this.router.navigate(['/payment'])
    }


}
