import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HomePageComponent
  ],
  exports: [
    HomePageComponent,
  ]
})
export class SharedModule { }
