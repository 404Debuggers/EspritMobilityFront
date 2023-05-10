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
  c!:Candidacy;

  dorms !: Dormitories[];



  reservation : Reservation = new Reservation();
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

  addReservation(reservation: Reservation) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const candidacyId = reservation.candidacy?.candidatureId;
    if (!candidacyId) {
      // Handle case where candidacy is not defined
      return;
    }
    this.ReservService.AddReservation(reservation, id, candidacyId).subscribe();
    console.log(reservation);
    this.router.navigate(['/candidacy']);
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
