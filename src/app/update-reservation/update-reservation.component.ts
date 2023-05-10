import { Component, OnInit } from '@angular/core';
import { Dormitories } from '../class/dormitories';
import { ReservationService } from '../shared/reservation.service';
import { DormitoriesService } from '../shared/dormitories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {
  selectedDormitoryId: any;
  reservations :any;
  idReserv : any;
  dormitories : any;
  idDorm : any;
  dormName : any;
  dorms!:Dormitories[];



  dorForUpdate !: Dormitories;



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idReserv = params['id'];
    });

    this.reservationService.GetReservationById(this.idReserv).subscribe(data => {
      this.reservations = data;
      this.selectedDormitoryId = this.reservations.idDorm;
    });

    this.dormitoriesService.GetAllDorm().subscribe(data => {
      this.dorms = data;
    });
}



  constructor( private reservationService :ReservationService ,
    private dormitoriesService : DormitoriesService,
    private route :ActivatedRoute,
    private router: Router) { }

  getalldorm(){
    this.dormitoriesService.GetAllDorm().subscribe(data =>{
      this.dorms = data
    });
  }


  /*updateReservation(): void {
    const idDorm = this.selectedDormitoryId;
    //const idDorm = Number(this.selectedDormitoryId);

    console.log(idDorm);

    this.reservationService.updateReservations(this.reservations, this.idReserv, idDorm).subscribe();
    this.router.navigate(['ListReservation'] );
  }*/

  updateReservation(): void {
    const idDorm = this.selectedDormitoryId;
    this.idDorm = idDorm;
    console.log(idDorm);

    this.reservationService.updateReservations(this.reservations, this.idReserv, this.idDorm).subscribe();
    this.router.navigate(['/Reservation' ]);
  }

}
