import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from 'src/app/components/service/list/list.component';
import { ItemComponent } from 'src/app/components/service/item/item.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ServiceModule { }
