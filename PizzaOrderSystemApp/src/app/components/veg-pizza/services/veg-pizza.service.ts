import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment}  from  '../../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VegPizzaService {
  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  GetVegPizzaList() : Observable<any> {
    const url = this.baseUrl + environment.vegPizza.GetVegPizzaList;
    return   this.httpClient.get(url);
  }

  getCustomisePizzaMaster() {
    const url = this.baseUrl + environment.vegPizza.GetCustomisePizzaMaster;
    return   this.httpClient.get(url);
  }
}
