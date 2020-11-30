import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { pizza } from 'src/app/common-models/pizza-model';
import {OrderService} from '../../services/order.service'
import * as _ from 'lodash';
import { Address } from 'src/app/common-models/address';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderListComponent implements OnInit {
  address: Address[];
  constructor(private orderService: OrderService ) { 
    this.address = [];
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(result => {
      if(result) {
        const data = result;
        data.map(a => a.pizzaList =  JSON.parse(a.pizzaList));
        this.address = data;
      }
    })
  }

  getSubtotal(order) {
    return  order.pizzaList.reduce((acc, val) => acc += (val.quantity * val.price), 0);

  }



}
