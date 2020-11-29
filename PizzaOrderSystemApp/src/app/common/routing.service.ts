import { Injectable } from '@angular/core';
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private route: Router) { }

  redirectToVegPizza() {
    this.route.navigate(['dashboard/veg-pizza']);
  }

  redirectToOrderList() {
    this.route.navigate(['dashboard/order-list']);
  }
}
