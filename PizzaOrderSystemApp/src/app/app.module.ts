import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddressComponent } from './components/address/address.component';
import {InputTextModule} from 'primeng/inputtext';
import { AuthComponent } from './components/auth/auth.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { HttpInterceptor } from './services/interceptor.service';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddressComponent,
    AuthComponent,
    OrderListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    InputMaskModule,
    FormsModule
    ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
