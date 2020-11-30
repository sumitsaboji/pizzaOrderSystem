import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { pizza } from 'src/app/common-models/pizza-model';
import { SharedService } from 'src/app/common/shared.service';
import { ToasMessageService } from 'src/app/common/toas-message.service';
import { VegPizzaService } from '../../services/veg-pizza.service';

@Component({
  selector: 'app-veg-pizza',
  templateUrl: './veg-pizza.component.html',
  styleUrls: ['./veg-pizza.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VegPizzaComponent implements OnInit, OnDestroy {
  pizaa: pizza[]; 
  display: boolean;
  selectedPizza: any;
  isloading: boolean;
  subscription: Subscription[]; 
  constructor(private sharedService: SharedService, private vegPizzaService: VegPizzaService,
    private toasMessageService: ToasMessageService) {
    this.display = false;
    this.isloading = false;
    this.subscription = [];
  }
 

  ngOnInit() {
    this.pizaa = [];
   this.GetVegPizzaList();
  }

  GetVegPizzaList() {
    this.isloading =  true;
    this.subscription.push(this.vegPizzaService.GetVegPizzaList().subscribe(result => {
      if(result) {
        this.isloading =  false;
          this.pizaa = result;
          this.pizaa.map(a => a.imageLink = '../../../../../assets//Images/pizza-images/' + a.imageLink);
      }
    }, error => {
      this.isloading =  false;
      this.toasMessageService.showErrorMessage('Somethink went wrong.');

    }));

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

  ngOnDestroy() {
    this.subscription.map(a => a.unsubscribe)
  }

}
