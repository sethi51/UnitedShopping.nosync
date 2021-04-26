import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  display:boolean=false;
  visibleSidebar1;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideMenu(){
    this.display=!this.display;
  }
}
