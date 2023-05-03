import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private  reservationService:ReservationService, private route: ActivatedRoute,
    private router: Router) { }

  payDormFees() {
    const cardNumber = '4242 4242 4242 4242';
    const expMonth = '05';
    const expYear = '2025';
    const cvc = '111';
    const amount = 100;
    const currency = 'USD';
    const reservationId = 10;
    const recipientEmail = 'mohamedamine.aouini@esprit.tn';

    this.reservationService.payDormFees(cardNumber, expMonth, expYear, cvc, amount, currency, reservationId, recipientEmail)
      .subscribe(response => {
        console.log('Payment successful!');
      }, error => {
        console.error(error);
      });
  }
  ngOnInit(): void {
  }

}
