import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Auth } from 'src/app/common-models/auth';
import { SharedService } from 'src/app/common/shared.service';
import { ToasMessageService } from 'src/app/common/toas-message.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit, OnDestroy {
  auth: Auth;
  subscription: Subscription[];
  isregister: boolean;
  userName: string;
  isloading: boolean;
  unregisterMessage: string;
  
  constructor(private authService: AuthService, private sharedService: SharedService,
    private toasMessageService: ToasMessageService) {
    this.auth =  {};
    this.subscription = [];
    this.isregister = false;
    this.isloading = false;
    this.unregisterMessage = '';
  }
  @Input() authDisplayInput: any;
  @Output() closedAuthPopUp = new EventEmitter();
  @Output() userNameEvent = new EventEmitter();
  ngOnInit(): void {
  }

  hide() {
    this.authDisplayInput = false;
    this.closedAuthPopUp.emit();
  }

  register() {
    this.isloading = true;
    this.auth.MobileNo = (Number(this.auth.MobileNo));
    this.subscription.push(this.authService.register(this.auth).subscribe(result => {
      this.isloading = false;
      if(result) {
        this.closedAuthPopUp.emit();
        this.login();
        this.isregister = false;
        this.unregisterMessage = '';
    }
    }, error => {
      this.isloading = false;
      
      this.toasMessageService.showErrorMessage('Somethink went wrong.');

    }));
  }

  login() {
    this.isloading = true;
    this.auth.MobileNo = (Number(this.auth.MobileNo));
    this.subscription.push(this.authService.login(this.auth).subscribe(result => {
      this.isloading = false;
      if(result) {
        this.userName = result.data.userName ;
        localStorage.setItem('UserName', this.userName);
        localStorage.setItem('Token', result.data.token);
        localStorage.setItem('Id', result.data.id);
        this.authDisplayInput = false;
        this.sharedService.populateUserName(this.userName);
      } else {
        this.unregisterMessage = 'You dont have an account please Register here';
        this.isregister = true;
        this.isloading = false;
      }
    }, error => {
      this.isloading = false;
      this.isregister = false;
      this.unregisterMessage = '';
      this.toasMessageService.showErrorMessage('Somethink went wrong.');

    }));
  }
  ngOnDestroy() {
    this.subscription.map(a => a.unsubscribe);
  }

}
