import { Component, EventEmitter, OnInit, Output, ViewEncapsulation, Input, DoCheck } from '@angular/core';
import { topping } from 'src/app/common-models/topping';
import { VegPizzaService } from '../veg-pizza/services/veg-pizza.service';
import {SharedService} from '../../common/shared.service'


@Component({
  selector: 'app-customise-pizza',
  templateUrl: './customise-pizza.component.html',
  styleUrls: ['./customise-pizza.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomisePizzaComponent implements OnInit, DoCheck {
  display: any;
  _selectedCustomisePizza: any;
  toppingsList: topping[];
  extraCheesePrice: number;
  selectedCrust: number;
  customisePizzaMaster: any;
  selectedSize: number;
  quantity: number;
  total: any;
  isExtraCheeseSelected: any;
  customisePizza: any;

  @Output() closePop = new EventEmitter();
  @Input() set selectedCustomisePizza(value: any) {
    this._selectedCustomisePizza = value;
  }

  constructor(private vegPizzaService: VegPizzaService, private sharedService: SharedService ) {
    this.toppingsList = [];
    this.extraCheesePrice = 75;
    this.selectedSize = 1;
    this.quantity = 1;
    this.total = 0;
    this.customisePizzaMaster = {};
    this.isExtraCheeseSelected = [];
    this.customisePizza = {};
  }

  ngOnInit() {
    this.display = true;
    this.getCustomisePizzaMaster();
  }

  getCustomisePizzaMaster() {
    this.vegPizzaService.getCustomisePizzaMaster().subscribe(result => {
      if (result) {
        this.customisePizzaMaster = result;
        this.customisePizzaMaster.topping.map(a => a.toppingImageLink = '../../../assets/Images/toppings/' + a.toppingImageLink);
        this.total = this.customisePizzaMaster.regularPrice;
        this.selectedCrust = this.customisePizzaMaster.NewHandTossed;
      }
    })
  }
  hide() {
    this.closePop.emit(false);
  }

  selectedPizza() {


  }

  addCraft() {
    this.sharedService.addCustomisePizzeToCraft(this.customisePizza);
    this.display = false;

  }

  ngDoCheck() {
    this.customisePizza.pizzaName =  this._selectedCustomisePizza.pizzaName;
    if (this.selectedSize === 1) {
      this.customisePizza.size = 'Regular';
      this.customisePizza.sizePrice = this.customisePizzaMaster.regularPrice;
    }
    if (this.selectedSize === 2) {
      this.customisePizza.size = 'Medium';
      this.customisePizza.sizePrice = this.customisePizzaMaster.mediumPrice;
    }
    if (this.selectedSize === 3) {
      this.customisePizza.size = 'Large';
      this.customisePizza.sizePrice = this.customisePizzaMaster.largePrice;
    }

    if(this.customisePizzaMaster && this.customisePizzaMaster.topping) {
      this.customisePizza.toppings = this.customisePizzaMaster.topping.filter(a => a.isSelected === true);
    } else {
      this.customisePizza.toppings = [];
    }
    this.customisePizza.selectedCrust = this.selectedCrust;

    this.total  =  this.customisePizza.sizePrice +  (Number(this.customisePizza.selectedCrust)) + 
    this.customisePizza.toppings.reduce((acc, val) => acc += val.toppingPirce, 0);
    this.total = this.isExtraCheeseSelected[0] ? this.total + (Number(this.isExtraCheeseSelected[0])) : this.total;
    
    this.customisePizza.total =  this.total;

    this.customisePizza.price =  this.total;
    this.customisePizza.description =  this._selectedCustomisePizza.description;
    this.customisePizza.quantity =  this.quantity;
    this.customisePizza.isCustomise = true;
    this.customisePizza.isExtraCheeseSelected =  this.isExtraCheeseSelected[0];


  }



}
