import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitedShoppingHomeComponent } from './united-shopping-home/united-shopping-home.component';

const routes: Routes = [
  {
    path: '', component: UnitedShoppingHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
