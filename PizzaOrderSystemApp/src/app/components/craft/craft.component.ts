import { Component, ElementRef, OnInit, Output, ViewChild, ViewEncapsulation, EventEmitter } from '@angular/core';
import { pizaa } from 'src/app/common-models/pizaa-model';
import { SharedService } from 'src/app/common/shared.service';
import _remove from 'lodash/remove';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CraftComponent implements OnInit {
  pizaa: pizaa[]; 
  subTotal: number;
  @ViewChild('scrollDiv') scroll: ElementRef;
  @Output() updatedCount = new EventEmitter<any>();

  constructor(private sharedService: SharedService) { 
    this.pizaa = [];
    this.subTotal = 0;
  }

  ngOnInit() {
    this.addItemIntoCraft();
    this.addRemoveItem();
    this.addCustomisePizza();
  }



  addItemIntoCraft() {
    this.sharedService.addItemIntoCraft.subscribe(result => {
      if (result) {
        const data  =JSON.parse(JSON.stringify(result))
        if(this.pizaa.filter(a => a.pizzaId === data.pizzaId).length === 0) { 
          this.pizaa.push(data);
          this.subTotal = this.pizaa.reduce((acc, val) => acc += (val.quantity * val.price), 0);
          document.getElementById('scrollDiv').scrollTop = document.getElementById('scrollDiv').scrollHeight;
        }
      }
    });
  }


  addCustomisePizza() {
    this.sharedService.addcustomisePizza.subscribe(result => {
      if (result) {
        const data  = JSON.parse(JSON.stringify(result))
        let topping = []; 
        topping = data.toppings.map(a => a.toppingName);
        if(data.isExtraCheeseSelected) {
            topping.push('extra cheese');
        }
        let toppingMessage = topping.length > 0 ? 'With ' + topping.toString() : '';
        data.description = data.size + ' Size'  + ' ' +  toppingMessage;
        this.pizaa.push(data);
        this.subTotal = this.pizaa.reduce((acc, val) => acc += (val.quantity * val.price), 0);

      }
    });
  }

  identify(index, item){
    return item.name; 
 }

 addRemoveItem() {
  this.sharedService.addRemoveItemCraft.subscribe(result => {
    if (result) {
      
      if(this.pizaa.filter(a => a.pizzaId === result.pizzaId).length > 0 ) {
        this.addRemoveItemSubFunc(result);
      }
      
    }
  });
  }

  addRemoveItemSubFunc(result) {
    const data  = JSON.parse(JSON.stringify(result))

    if(this.pizaa.filter(a => a.pizzaId === data.pizzaId).length > 0 && data.quantity > 0) {
       this.pizaa.filter(a => a.pizzaId === data.pizzaId).map(a => a.quantity = data.quantity);
       this.updatedCount = data;
      } 

    if(data.quantity === 0) {
      _remove( this.pizaa, x => x.pizzaId === data.pizzaId);
      this.updatedCount = data;
    }
    this.subTotal = this.pizaa.reduce((acc, val) => acc += (val.quantity * val.price), 0);
    document.getElementById('scrollDiv').scrollTop = document.getElementById('scrollDiv').scrollHeight;
  }

  clear(data) {
    _remove( this.pizaa, x => x.pizzaId === data.pizzaId);

  }

  checkOut() {
    this.sharedService.openAddressPopUpWindow(this.pizaa);
  }

  


}
