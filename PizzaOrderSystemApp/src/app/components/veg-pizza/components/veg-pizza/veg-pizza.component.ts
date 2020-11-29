import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { pizaa } from 'src/app/common-models/pizaa-model';
import { SharedService } from 'src/app/common/shared.service';
import { VegPizzaService } from '../../services/veg-pizza.service';

@Component({
  selector: 'app-veg-pizza',
  templateUrl: './veg-pizza.component.html',
  styleUrls: ['./veg-pizza.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VegPizzaComponent implements OnInit {
  pizaa: pizaa[]; 
  display: boolean;
  selectedPizza: any;
  constructor(private sharedService: SharedService, private vegPizzaService: VegPizzaService) {
    this.display = false;
  }
 

  ngOnInit() {
    this.pizaa = [];
   this.GetVegPizzaList();
  }

  GetVegPizzaList() {
    this.vegPizzaService.GetVegPizzaList().subscribe(result => {
      if(result) {
          this.pizaa = result;
          this.pizaa.map(a => a.imageLink = '../../../../../assets//Images/pizza-images/' + a.imageLink);
      }
    });

  }
  addRemoveItem(data) {
    this.sharedService.addRemoveItemCraftFunc(data);
  }


  addItemIntoCraft(data) {
    this.sharedService.addItemIntoCraftFunc(data);
  }

  updateItemCount(data) {
    this.pizaa.filter(a => a.pizzaId === data.pizzaId).map(a => a.quantity = data.quantity);
  }

  hidePopUp(data) {
    this.display = !this.display;
  }

}
