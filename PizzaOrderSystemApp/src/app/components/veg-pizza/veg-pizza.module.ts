import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegPizzaRoutingModule } from './veg-pizza-routing.module';
import { VegPizzaComponent } from './components/veg-pizza/veg-pizza.component';
import {CardModule} from 'primeng/card';
import {SplitButtonModule} from 'primeng/splitbutton';
import { CraftComponent } from '../craft/craft.component';
import {DialogModule} from 'primeng/dialog';
import { CustomisePizzaComponent } from '../../components/customise-pizza/customise-pizza.component';
import {CarouselModule} from 'primeng/carousel';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [VegPizzaComponent, CraftComponent, CustomisePizzaComponent],
  imports: [
    CommonModule,
    VegPizzaRoutingModule,
    CardModule,
    SplitButtonModule,
    DialogModule,
    CarouselModule,
    CheckboxModule,
    RadioButtonModule,
    FormsModule,
    TooltipModule]
})
export class VegPizzaModule { }
