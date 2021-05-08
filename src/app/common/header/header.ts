import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import {DialogService} from 'primeng/dynamicdialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  providers:[DialogService]
})
export class HeaderComponent implements OnInit {
  text:string="Login";
  @ViewChild('loginButton')loginButton:ElementRef;
  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }
  login(){
    // this.text="My Account"
    // console.log(this.loginButton);
    // this.loginButton.nativeElement.innerText="My Account";
    const ref = this.dialogService.open(LoginComponent, {
      data:{},
      header: 'Login',
      width: '50%'
  });
  }
}
