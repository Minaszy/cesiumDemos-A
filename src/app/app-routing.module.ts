import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cesium' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'water', loadChildren: () => import('./pages/water-face/water-face.module').then(m => m.WaterFaceModule) },
  { path: 'cesium', loadChildren: () => import('./pages/cesiumtest/cesiumtest.module').then(m => m.CesiumtestModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
