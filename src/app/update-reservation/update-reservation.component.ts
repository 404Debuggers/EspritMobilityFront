import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../Reservation.model';
import { ReservationService } from '../reservation.service';
import { DormitoriesService } from '../shared/dormitories.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {
  
  selectedDormitoryId: number | undefined;
  reservations :any;
  idReserv : any;
  dormitories : any;
  idDorm : any;
  dormName : any;
  dorms:any;


  

  

  constructor( private reservationService :ReservationService , 
    private dormitoriesService : DormitoriesService,
    private route :ActivatedRoute,
    private router: Router) { }
  
  getalldorm(){
    this.dormitoriesService.GetAllDorm().subscribe(data =>{
      this.dorms = data
    });
  }
   
 
  updateReservation(): void {
    const idDorm = Number(this.route.snapshot.paramMap.get('idDorm'));
    this.reservationService.updateReservations(this.reservations, this.idReserv, idDorm).subscribe();
    this.router.navigate(['ListReservation'])
  }






  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.idReserv=params['id'];
    })
    this.getalldorm();
    
    this.reservationService.GetReservationById(this.idReserv).subscribe(data =>{
      this.reservations=data
    });
  }

}
