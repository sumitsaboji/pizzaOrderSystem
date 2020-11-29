import { Component, OnDestroy } from '@angular/core';
import { SharedService } from './common/shared.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'PizzaOrderSystemApp';
  addressDisplay: boolean;
  authDisplay:  boolean;
  subscription: Subscription[];

  constructor(private sharedService: SharedService) {
    this.addressDisplay = false;
    this.authDisplay = false;
    this.subscription = [];
    this.openAuthPopUpWindow();
    this.openAddressPopUpWindow();
  }

  openAuthPopUpWindow() {
    this.subscription.push(this.sharedService.openAuthPopUp.subscribe(result => {
      if(result) {
          this.authDisplay = true;
      } 
    }));
  }

  openAddressPopUpWindow() {
    this.subscription.push(this.sharedService.openAddressPopUp.subscribe(result => {
      if(result) {
          this.addressDisplay = true;

      } 
    }));
  }


  closedPopUp() {
    this.authDisplay = false;
  }

  closedAddressPopUp() {
    this.addressDisplay = false;
  }
  ngOnDestroy() {
    this.subscription.map(a => a.unsubscribe);
  }

  

}
