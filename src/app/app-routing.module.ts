import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //Home
  {path: 'item', component: ItemComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule { }
