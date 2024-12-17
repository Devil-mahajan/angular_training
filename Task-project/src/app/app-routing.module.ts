import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Component/Page/layout/layout.component';
import { CounterComponent } from './Component/counter/counter.component';

import { ParentComponent } from './Component/parent/parent.component';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'parent', component: ParentComponent },
  {path:'login' , component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
