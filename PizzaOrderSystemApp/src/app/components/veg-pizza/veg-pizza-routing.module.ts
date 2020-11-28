import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VegPizzaComponent } from './components/veg-pizza/veg-pizza.component';


const routes: Routes = [
  // { path: '', redirectTo: 'veg-pizza', pathMatch: 'full' },
  {path: '', component: VegPizzaComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VegPizzaRoutingModule { }
