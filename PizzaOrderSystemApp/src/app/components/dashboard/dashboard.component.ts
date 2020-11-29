import { Component, OnInit } from '@angular/core';
import { MenuBarItem } from 'src/app/common/menu-bar.constant';
import { RoutingService } from 'src/app/common/routing.service';
import { SharedService } from 'src/app/common/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menuBarItem: any;
  userName: string;
  constructor(private routingService: RoutingService, private sharedService:  SharedService) {
    this.menuBarItem = MenuBarItem;
  }

  ngOnInit() {
    this.userName = localStorage.getItem('UserName');
    this.getUserName();
  }

  getUserName() {
    this.sharedService.userNameEvent.subscribe(result => {
      if(result) {
        this.userName = result;
      }
    })
  }

  navigateToMenu(menuName) {

    switch (menuName) {

      case this.menuBarItem.VegPizza:
        this.routingService.redirectToVegPizza();
        break;

      case this.menuBarItem.NonVegPizza:

        break;

      case this.menuBarItem.MakeYourOwnPizza:

        break;

      case this.menuBarItem.OtherFood:

        break;
      
      case this.menuBarItem.YourOrder:
          this.routingService.redirectToOrderList();
      break;
  
    }
  }

  signUp() {
    this.sharedService.openAuthPopUpWindow(true);
  }

}
