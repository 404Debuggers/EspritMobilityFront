import { Component, OnInit } from '@angular/core';
import { Dormitories } from '../class/dormitories';
import { Reservation } from '../class/reservation';
import { ReservationService } from '../shared/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidacy } from '../class/candidacy';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  idCondidacy : any;

  idDorm: any;

  condidacy : any;

  dorms !: Dormitories[];
  candidacys :any;

  dormitoriesId:any=this.ReservService.GetAllCondidacy;

  reservation: Reservation = new Reservation();
  candidacy: Candidacy = new Candidacy();
  dorm: Dormitories = new Dormitories();
  reservationForm: any;
  dormId = 1;
  candidacyId=1;


  ngOnInit(): void {
    this.getAllCondidacy;
    this.getAlldorm;
    this.addReservation;
    this.ReservService.GetAllDorm().subscribe(data =>{
      this.dorms = data
    });
    this.route.params.subscribe(params => {
      this.idDorm = ['id'];
  })
}
  constructor(private ReservService : ReservationService,private router: Router,private route: ActivatedRoute) { }

  addReservation(dormId:any,candidacyId:any) {
    this.candidacys=this.ReservService.GetAllCondidacy;
    // Set the candidacy and dormitory IDs
    //var candidacyId = this.candidacy.candidatureId;
    //var dormId = this.dorm.dormitoriesId;
console.log(this.reservation)
      // Call the service method and pass in the required parameters
    this.ReservService.AddReservation(this.reservation,candidacyId,dormId)
      .subscribe(data=> {
        console.log(data);
      });
  }
  getAllCondidacy(){
    this.ReservService.GetAllCondidacy().subscribe(data =>{
      this.condidacy = data
    });
  }
  getAlldorm(){
    console.log(this.reservation)
    /*
    this.ReservService.AddReservation(this.dorms , this.dorms.).subscribe(
      data => {alert("Reservation ajoutée avec success")},
      err => {alert("Erreur d'ajout !")}

    )*/
  }



}
