import { Component, OnInit } from '@angular/core';
import { MenuBarItem } from 'src/app/common/menu-bar.constant';
import { RoutingService } from 'src/app/common/routing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menuBarItem: any;
  constructor(private routingService: RoutingService) {
    this.menuBarItem = MenuBarItem;
  }

  ngOnInit() {
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
    }
  }

}
