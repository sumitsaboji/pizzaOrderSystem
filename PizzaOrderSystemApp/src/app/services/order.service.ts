import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../common-models/address';
import { pizaa } from '../common-models/pizaa-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  placeOrder(address: Address) {
    const url = this.baseUrl  +   environment.Order.placeOrder;
    return this.http.post(url, address);
  }

  getOrders(): Observable<pizaa[]> {
    const url = this.baseUrl  +   environment.Order.getOrders;
    return this.http.get<pizaa[]>(url);
  }

}
