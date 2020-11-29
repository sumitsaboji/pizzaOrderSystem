import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderListComponent } from './components/order-list/order-list.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent, 
  children: [
    {
      path: 'veg-pizza',
      loadChildren: () => import('../app/components/veg-pizza/veg-pizza.module').then(m => m.VegPizzaModule)
    },
    {
      path: 'order-list',
      component: OrderListComponent
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
