import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/common/layout/layout.component';
import { ShopComponent } from './components/shop/shop.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
// import { HeaderComponent } from './components/common/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [{
  path:'',component:LayoutComponent, children:[
    {
       path:'',component:MainComponent
    },
    {
      path:'shop',component:ShopComponent
    },
    {
      path: 'why-us',component:WhyUsComponent
    },
    {
      path:'testimonial',component:TestimonialComponent
    },
    {
      path:'contact-us',component:ContactUsComponent
    },
    {
      path:'login',component:LoginComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
