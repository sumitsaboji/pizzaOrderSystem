import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { pizza } from 'src/app/common-models/pizza-model';
import { OrderService } from '../../services/order.service'
import * as _ from 'lodash';
import { Address } from 'src/app/common-models/address';
import { SharedService } from 'src/app/common/shared.service';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderListComponent implements OnInit {
  address: Address[];
  isloading: boolean;
  constructor(private orderService: OrderService, private sharedService: SharedService) {
    this.address = [];
    this.isloading = false;
  }

  ngOnInit(): void {
    this.getOrders();
    this.userLogin();
    this.userLogOut();
  }

  userLogin() {
    this.sharedService.userLoginEvent.subscribe(result => {
      if (result) {
        this.getOrders();
      }
    })
  }

  userLogOut() {
    this.sharedService.userLogedOutEvent.subscribe(result => {
      if (result) {
       this.address = [];
      }
    })
  }

  getOrders() {
    this.isloading = true;
    this.orderService.getOrders().subscribe(result => {
      this.isloading = false;
      if (result) {
        const data = result;
        data.map(a => a.pizzaList = JSON.parse(a.pizzaList));
        this.address = data;
      }
    }, error => {
      this.isloading = false;
      if (error.status === 401) {
        this.sharedService.openAuthPopUpWindow(true);

      }
    })
  }

  getSubtotal(order) {
    return order.pizzaList.reduce((acc, val) => acc += (val.quantity * val.price), 0);

  }



}
