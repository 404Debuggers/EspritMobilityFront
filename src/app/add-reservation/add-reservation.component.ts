import { Component, OnInit } from '@angular/core';
import { Dormitories } from '../class/dormitories';
import { Reservation } from '../Reservation.model';
import { ReservationService } from '../reservation.service';

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


  
  reservation : Reservation = new Reservation();

  constructor(private ReservService : ReservationService) { }
  addReservation(){
    this.ReservService.AddReservation(this.reservation ,this.idDorm).subscribe();
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


  ngOnInit(): void {
    this.getAllCondidacy;
    this.getAlldorm;

    this.ReservService.GetAllDorm().subscribe(data =>{
      this.dorms = data
    });
  }

}
