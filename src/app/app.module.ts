import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeIndexComponent } from './home/home-index/home-index.component';
import { HomeSectionComponent } from './home/home-section/home-section.component';
import { AboutComponent } from './home/about/about.component';
import { MenuComponent } from './home/menu/menu.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { ContactComponent } from './home/contact/contact.component';
import { ButtonComponent } from './home/button/button.component';
import { IdexShopComponent } from './shop/idex-shop/idex-shop.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';
import { ProductComponent } from './shop/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeIndexComponent,
    HomeSectionComponent,
    AboutComponent,
    MenuComponent,
    GalleryComponent,
    ContactComponent,
    ButtonComponent,
    IdexShopComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
