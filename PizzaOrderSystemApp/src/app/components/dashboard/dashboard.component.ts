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
  selectMenuName: string;
  constructor(private routingService: RoutingService, private sharedService: SharedService) {
    this.menuBarItem = MenuBarItem;
  }

  ngOnInit() {
    this.userName = localStorage.getItem('UserName');
    this.getUserName();
    if (localStorage.getItem('menuName')) {
      this.selectMenuName = localStorage.getItem('menuName');
      this.navigateToMenu( this.selectMenuName )
    }  else {
      this.selectMenuName = this.menuBarItem.VegPizza;
    }
  }

  getUserName() {
    this.sharedService.userNameEvent.subscribe(result => {
      if (result) {
        this.userName = result;
      }
    });
  }

  navigateToMenu(menuName) {
    localStorage.setItem('menuName', menuName);
    this.selectMenuName = menuName;
    switch (menuName) {
      case this.menuBarItem.VegPizza:
        this.routingService.redirectToVegPizza();
        break;

      case this.menuBarItem.NonVegPizza:
        this.routingService.redirectToCommingSoon();

        break;

      case this.menuBarItem.MakeYourOwnPizza:
        this.routingService.redirectToCommingSoon();

        break;

      case this.menuBarItem.OtherFood:
        this.routingService.redirectToCommingSoon();

        break;

      case this.menuBarItem.YourOrder:
        this.routingService.redirectToOrderList();
        break;

    }
  }

  signUp() {
    this.sharedService.openAuthPopUpWindow(true);
  }

  logOut() {
    this.userName = '';
    localStorage.clear();
  }

}
