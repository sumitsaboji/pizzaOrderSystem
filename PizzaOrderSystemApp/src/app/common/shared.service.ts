import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { pizaa } from '../common-models/pizaa-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private addItemIntoCraftSouce  = new BehaviorSubject<pizaa>(null);
  addItemIntoCraft = this.addItemIntoCraftSouce.asObservable();

  private addRemoveItemCraftSouce: BehaviorSubject<Array<pizaa>> = new BehaviorSubject([]);
  addRemoveItemCraft = this.addRemoveItemCraftSouce.asObservable();
  constructor() { }

  addItemIntoCraftFunc(data) {
    this.addItemIntoCraftSouce.next(data);
  }

  addRemoveItemCraftFunc(data) {
    this.addRemoveItemCraftSouce.next(data);
  }

  
}
