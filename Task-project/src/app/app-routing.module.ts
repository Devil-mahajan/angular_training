import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Component/Page/layout/layout.component';
import { CounterComponent } from './Component/counter/counter.component';

import { ParentComponent } from './Component/parent/parent.component';
import { LoginComponent } from './Component/login/login.component';
import { ThemeSwitchComponent } from './Component/theme-switch/theme-switch.component';
import { TransformComponent } from './Component/transform/transform.component';
import { ViewComponent } from './Component/view/view.component';
import { YourComponent } from './Component/your/your.component';
import { ExerciseComponent } from './Component/exercise/exercise.component';


const routes: Routes = [
  { 
    path: '', component: LayoutComponent , children:[

      { path: 'counter', component: CounterComponent },
      { path: 'parent', component: ParentComponent },
     
      {path:'theme' , component:ThemeSwitchComponent},
      {path:'transform' ,component:TransformComponent},
      {path:'view' ,component:ViewComponent},
      {path:'your' , component:YourComponent},
      {path:'exercise',component:ExerciseComponent}
    
    ]

  },
  {path:'login' , component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
