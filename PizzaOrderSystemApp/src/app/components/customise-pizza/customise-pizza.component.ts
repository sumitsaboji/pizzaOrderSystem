import { Component, EventEmitter, OnInit, Output, ViewEncapsulation, Input } from '@angular/core';
import { topping } from 'src/app/common-models/topping';


@Component({
  selector: 'app-customise-pizza',
  templateUrl: './customise-pizza.component.html',
  styleUrls: ['./customise-pizza.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomisePizzaComponent implements OnInit {
  display: any;
  _selectedCustomisePizza: any;
  toppingsList: topping[];
  extraCheesePrice: number;

  @Output() closePop = new EventEmitter();
  @Input() set selectedCustomisePizza(value: any) {
    this._selectedCustomisePizza = value;
  }

  constructor() {
    this.toppingsList = [];
    this.extraCheesePrice = 75;
  }

  ngOnInit() {
    this.display = true;
    this.toppingsList.push({ topingId: 1, toppingName: 'Capsicum', toppingImageLink: '../../../assets/Images/toppings/toppingsCapsicum.webp', toppingPirce: 10, isSelected: false });
    this.toppingsList.push({ topingId: 1, toppingName: 'Jalapeno', toppingImageLink: '../../../assets/Images/toppings/toppingsJalapeno.webp', toppingPirce: 10, isSelected: false, });
    this.toppingsList.push({ topingId: 1, toppingName: 'Mushroom', toppingImageLink: '../../../assets/Images/toppings/toppingsMushroom.webp', toppingPirce: 10, isSelected: false });
    this.toppingsList.push({ topingId: 1, toppingName: 'Onion', toppingImageLink: '../../../assets/Images/toppings/toppingsOnion.webp', toppingPirce: 10, isSelected: false });
    this.toppingsList.push({ topingId: 1, toppingName: 'Paneer', toppingImageLink: '../../../assets/Images/toppings/toppingsPaneer.webp', toppingPirce: 10, isSelected: false });
    this.toppingsList.push({ topingId: 1, toppingName: 'Tomato', toppingImageLink: '../../../assets/Images/toppings/toppingsTomato.webp', toppingPirce: 10,isSelected: false });
    
  }

  hide() {
    this.closePop.emit(false);
  }

  selectedPizza() {

  }



}
