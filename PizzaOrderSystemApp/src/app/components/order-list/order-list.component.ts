import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { pizaa } from 'src/app/common-models/pizaa-model';
import {OrderService} from '../../services/order.service'
import * as _ from 'lodash';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderListComponent implements OnInit {
  pizza: pizaa[];
  constructor(private orderService: OrderService ) { 
    this.pizza = [];
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(result => {
      if(result) {
        const data = result;
        _.forEach(data, item => {
          const pizzaItem = JSON.parse(item.pizzaList);
          // this.pizza.push(pizzaItem);
        });

      }
    })
  }



}
