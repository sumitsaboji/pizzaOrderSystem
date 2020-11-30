import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/common-models/address';
import { RoutingService } from 'src/app/common/routing.service';
import { SharedService } from 'src/app/common/shared.service';
import { ToasMessageService } from 'src/app/common/toas-message.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddressComponent implements OnInit, OnDestroy {
  display: boolean;
  address: Address;
  subscription: Subscription[];
  isloading: boolean;
  @Input() addressDisplayInput: any;
  @Output() closedaddressPopUp = new EventEmitter();

  constructor(private  sharedService: SharedService, private orderService: OrderService,
    private toasMessageService: ToasMessageService, private routingService: RoutingService) {
    this.display = false;
    this.address = {};
    this.subscription = [];
    this.isloading = false;

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
    this.isloading = true;
    this.subscription.push(this.orderService.placeOrder(this.address).subscribe(result => {
      this.isloading = false;
      if(result) {
        this.toasMessageService.showSuccessMessage('Your Order is placed. You can see your orders in Your Order tab');
        this.closedaddressPopUp.emit();
        this.sharedService.clearCraft(this.address);
      }
    }, error => {
      this.isloading = false;
      this.toasMessageService.showErrorMessage('Somethink went wrong.');

    }));
  }

  ngOnDestroy() {
    this.subscription.map(a => a.unsubscribe);
  }

}
