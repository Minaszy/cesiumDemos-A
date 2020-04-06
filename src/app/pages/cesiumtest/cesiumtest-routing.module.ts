import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CesiumtestComponent } from './cesiumtest.component';

const routes: Routes = [
  { path: '', component: CesiumtestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CesiumtestRoutingModule { }
