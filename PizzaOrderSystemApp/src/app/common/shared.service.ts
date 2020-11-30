import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { pizza } from '../common-models/pizza-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private addItemIntoCraftSouce  = new BehaviorSubject<pizza>(null);
  addItemIntoCraft = this.addItemIntoCraftSouce.asObservable();

  private addRemoveItemCraftSouce =  new BehaviorSubject<pizza>(null);
  addRemoveItemCraft = this.addRemoveItemCraftSouce.asObservable();

  
  private addcustomisePizzaSouce = new BehaviorSubject<pizza>(null);
  addcustomisePizza = this.addcustomisePizzaSouce.asObservable();

  private authSource = new BehaviorSubject(null);
  openAuthPopUp = this.authSource.asObservable();

  private addressSource = new BehaviorSubject(null);
  openAddressPopUp = this.addressSource.asObservable();

  private userNameSource = new BehaviorSubject(null);
  userNameEvent = this.userNameSource.asObservable();

  
  private clearCraftSource = new BehaviorSubject(null);
  clearCraftevent = this.clearCraftSource.asObservable();

  private userLogedInSource = new BehaviorSubject(null);
  userLoginEvent = this.userLogedInSource.asObservable();

  private userLogedOutSource = new BehaviorSubject(null);
  userLogedOutEvent = this.userLogedOutSource.asObservable();

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

  clearCraft(data) {
    this.clearCraftSource.next(data);
  }

  userLogin() {
    this.userLogedInSource.next(true);
  }

  
  userLogOut() {
    this.userLogedOutSource.next(true);
  }
}
