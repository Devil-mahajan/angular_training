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
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './Component/child/child.component';
import { ParentComponent } from './Component/parent/parent.component';
import { LoginComponent } from './Component/login/login.component';
import { ThemeDirective } from './Component/directives/theme.directive';

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
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
