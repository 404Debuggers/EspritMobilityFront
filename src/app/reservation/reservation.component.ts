import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../shared/reservation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  role:string | undefined;
  reservation:any;

  constructor(private reservationservice : ReservationService, private router: Router) { }
  getAllReservations(){
    this.reservationservice.getAllReservations().subscribe(data =>{
      this.reservation = data
    })
  }

  ngOnInit(){
    this.getAllReservations();
    this.role = ""+sessionStorage.getItem("Role");
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
