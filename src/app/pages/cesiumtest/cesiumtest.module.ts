import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CesiumtestRoutingModule } from './cesiumtest-routing.module';
import { CesiumtestComponent } from './cesiumtest.component';


@NgModule({
  declarations: [CesiumtestComponent],
  imports: [
    CommonModule,
    CesiumtestRoutingModule
  ]
})
export class CesiumtestModule { }
