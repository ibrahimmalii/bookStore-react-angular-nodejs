import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    // About paypal
    render(
      {
        id: '#myPaypal',
        currency: 'USD',
        value: '30.00',
        onApprove: (details) => {
          this.router.navigateByUrl('/sells/success')
        }
      }
    )
  }

}
