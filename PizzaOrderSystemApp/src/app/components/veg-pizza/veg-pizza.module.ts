import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegPizzaRoutingModule } from './veg-pizza-routing.module';
import { VegPizzaComponent } from './components/veg-pizza/veg-pizza.component';
import {CardModule} from 'primeng/card';
import {SplitButtonModule} from 'primeng/splitbutton';
import { CraftComponent } from '../craft/craft.component';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [VegPizzaComponent, CraftComponent],
  imports: [
    CommonModule,
    VegPizzaRoutingModule,
    CardModule,
    SplitButtonModule,
    ]
})
export class VegPizzaModule { }
