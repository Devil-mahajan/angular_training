
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/Page/header/header.component';
import { FooterComponent } from './Component/Page/footer/footer.component';
import { LayoutComponent } from './Component/Page/layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CounterComponent } from './Component/counter/counter.component';
import { CountParentComponent } from './Component/count-parent/count-parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './Component/child/child.component';
import { ParentComponent } from './Component/parent/parent.component';
import { LoginComponent } from './Component/login/login.component';
import { ThemeDirective } from './Component/directives/theme.directive';
import { ThemeSwitchComponent } from './Component/theme-switch/theme-switch.component';
import { TruncatePipe } from './Component/truncate.pipe';
import { TransformComponent } from './Component/transform/transform.component';
import { IfNotDirective } from './Component/directives/if-not.directive';
import { ViewComponent } from './Component/view/view.component';
import { BoxComponent } from './Component/box/box.component';
import { YourComponent } from './Component/your/your.component';
import { SearchComponent } from './Component/search/search.component';
import { FormComponent } from './Component/form/form.component';
import { ExerciseComponent } from './Component/exercise/exercise.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    CounterComponent,
    CountParentComponent,
    ChildComponent,
    ParentComponent,
    LoginComponent,
    ThemeDirective,
    ThemeSwitchComponent,
    TruncatePipe,
    TransformComponent,
    IfNotDirective,
    ViewComponent,
    BoxComponent,
    YourComponent,
    SearchComponent,
    FormComponent,
    ExerciseComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, FormsModule,ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
