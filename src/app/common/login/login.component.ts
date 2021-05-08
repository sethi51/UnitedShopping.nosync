import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  password:any;
  constructor(public dialogService: DialogService,public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
  }
  createNewAccount(){
    this.ref.close();
    const ref = this.dialogService.open(NewUserComponent, {
      header: 'Create New User Account',
      width: '50%'
  });
  }
}
