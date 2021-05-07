import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit {
  text:string="Login";
  @ViewChild('loginButton')loginButton:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    // this.text="My Account"
    console.log(this.loginButton);
    this.loginButton.nativeElement.innerText="My Account";
  }
}
