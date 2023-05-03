import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {

  reservation:any;

  constructor(private reservationservice : ReservationService, private router: Router) { }
  getAllReservations(){
    this.reservationservice.getAllReservations().subscribe(data =>{
      this.reservation = data
    })
  }

  ngOnInit(){
    this.getAllReservations();
      }

      reloadComponent(): void {
        const currentRoute = this.router.url.split('?')[0];
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentRoute]);
        });
      }
      deleteReservation(id: number){
        this.reservationservice.DeleteReservation(id).subscribe();
        this.getAllReservations();
        this.reloadComponent();
      }

}
