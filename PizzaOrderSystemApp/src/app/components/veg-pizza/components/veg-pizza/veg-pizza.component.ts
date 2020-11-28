import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { pizaa } from 'src/app/common-models/pizaa-model';
import { SharedService } from 'src/app/common/shared.service';

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
  constructor(private sharedService: SharedService) { 
    this.display = false;
  }
 

  ngOnInit() {
    this.pizaa = [];
   this.pizaa.push({pizzaId:1, pizzaName: 'Margherita', description: 'A classic delight with 100% Real mozzarella cheese', 
   price: 199, imageLink: '../../../../../assets//Images//pizza-images/Margherita.webp',quantity: 1, isExtraCheeseSelected: true });

   this.pizaa.push({pizzaId:2,pizzaName: 'Margherita', description: 'Delightful combination of onion, capsicum, tomato & grilled mushroom', 
   price: 395, imageLink: '../../../../../assets//Images//pizza-images/Farmhouse.webp', quantity: 1,isExtraCheeseSelected: true });
   
   this.pizaa.push({pizzaId:3,pizzaName: 'Peppy-Paneer', description: 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 
   price: 395,imageLink: '../../../../../assets//Images//pizza-images/Peppy-Paneer.webp',quantity: 1, isExtraCheeseSelected: true });

   this.pizaa.push({pizzaId:4,pizzaName: 'Peppy-Paneer', description: 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 
   price: 395,imageLink: '../../../../../assets//Images//pizza-images/Peppy-Paneer.webp', quantity: 1, isExtraCheeseSelected: true });

   this.pizaa.push({pizzaId:5,pizzaName: 'Peppy-Paneer', description: 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 
   price: 395,imageLink: '../../../../../assets//Images//pizza-images/Peppy-Paneer.webp', quantity: 1, isExtraCheeseSelected: true });

   this.pizaa.push({pizzaId:6,pizzaName: 'Peppy-Paneer', description: 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 
   price: 395,imageLink: '../../../../../assets//Images//pizza-images/Peppy-Paneer.webp', quantity: 1, isExtraCheeseSelected: true });

   this.pizaa.push({pizzaId:7,pizzaName: 'Peppy-Paneer', description: 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 
   price: 395,imageLink: '../../../../../assets//Images//pizza-images/Peppy-Paneer.webp', quantity: 1 });

   this.pizaa.push({pizzaId:8,pizzaName: 'Peppy-Paneer', description: 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 
   price: 395,imageLink: '../../../../../assets//Images//pizza-images/Peppy-Paneer.webp' });

   this.pizaa.push({pizzaId:1,pizzaName: 'Peppy-Paneer', description: 'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika', 
   price: 395,imageLink: '../../../../../assets//Images//pizza-images/Peppy-Paneer.webp' });
   
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
