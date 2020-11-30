import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../common-models/address';
import { pizza } from '../common-models/pizza-model';

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

  getOrders(): Observable<Address[]> {
    const url = this.baseUrl  +   environment.Order.getOrders;
    return this.http.get<Address[]>(url);
  }

}
