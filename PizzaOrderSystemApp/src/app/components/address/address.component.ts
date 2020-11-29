import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/common-models/address';
import { SharedService } from 'src/app/common/shared.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddressComponent implements OnInit {
  display: boolean;
  address: Address;
  subscription: Subscription[];

  @Input() addressDisplayInput: any;
  @Output() closedaddressPopUp = new EventEmitter();

  constructor(private  sharedService: SharedService, private orderService: OrderService) {
    this.display = false;
    this.address = {};
    this.subscription = [];

  }

  ngOnInit(): void {
    this.openAddressPopUpWindow();
  }

  hide() {
    this.addressDisplayInput = false;
    this.closedaddressPopUp.emit();
  }

  openAddressPopUpWindow() {
    this.subscription.push(this.sharedService.openAddressPopUp.subscribe(result => {
      if(result) {
          this.address.pizzaList = JSON.stringify(result);
          this.address.userId = localStorage.getItem('Id');
      } 
    }));
  }


  submit() {
    this.subscription.push(this.orderService.placeOrder(this.address).subscribe(result => {
      if(result) {

      }
    }));
  }

}
