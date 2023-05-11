import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../shared/reservation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {

  constructor(private  reservationService:ReservationService, private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(paymentForm: NgForm) {
    const cardNumber = paymentForm.value.cardNumber;
    const expMonth = paymentForm.value.expMonth;
    const expYear = paymentForm.value.expYear;
    const cvc = paymentForm.value.cvc;
    const amount = paymentForm.value.amount;
    const currency = paymentForm.value.currency;
    const reservationId = paymentForm.value.reservationId;
    const recipientEmail = paymentForm.value.recipientEmail;

    this.reservationService.payDormFees(cardNumber, expMonth, expYear, cvc, amount, currency, reservationId, recipientEmail)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

}
