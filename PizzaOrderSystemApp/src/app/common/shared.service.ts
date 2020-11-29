import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { pizaa } from '../common-models/pizaa-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private addItemIntoCraftSouce  = new BehaviorSubject<pizaa>(null);
  addItemIntoCraft = this.addItemIntoCraftSouce.asObservable();

  private addRemoveItemCraftSouce =  new BehaviorSubject<pizaa>(null);
  addRemoveItemCraft = this.addRemoveItemCraftSouce.asObservable();

  
  private addcustomisePizzaSouce = new BehaviorSubject<pizaa>(null);
  addcustomisePizza = this.addcustomisePizzaSouce.asObservable();

  private authSource = new BehaviorSubject(null);
  openAuthPopUp = this.authSource.asObservable();

  private addressSource = new BehaviorSubject(null);
  openAddressPopUp = this.addressSource.asObservable();

  private userNameSource = new BehaviorSubject(null);
  userNameEvent = this.userNameSource.asObservable();

  constructor() { }

  addItemIntoCraftFunc(data) {
    this.addItemIntoCraftSouce.next(data);
  }

  addRemoveItemCraftFunc(data) {
    this.addRemoveItemCraftSouce.next(data);
  }

  addCustomisePizzeToCraft(data) {
    this.addcustomisePizzaSouce.next(data);
  }

  openAuthPopUpWindow(data) {
    this.authSource.next(data);
  }
  openAddressPopUpWindow(data) {
    this.addressSource.next(data);
  }


  populateUserName(data) {
    this.userNameSource.next(data);
  }
}
