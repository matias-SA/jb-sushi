import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { IdexShopComponent } from './shop/idex-shop/idex-shop.component';

const routes: Routes = [
  { path: '', component: HomeIndexComponent },
  { path: 'shop', component: IdexShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
