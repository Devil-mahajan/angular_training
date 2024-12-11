
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LayoutComponent } from './components/common/layout/layout.component';

import { ShopComponent } from './components/shop/shop.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { GiftComponent } from './components/gift/gift.component';
import { SavingComponent } from './components/saving/saving.component';
import { InfoComponent } from './components/info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,

    ShopComponent,
    WhyUsComponent,
    TestimonialComponent,
    ContactUsComponent,
    LoginComponent,
    SliderComponent,
    GiftComponent,
    SavingComponent,
    InfoComponent,
    MainComponent,
    ProductDetailsComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
