import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nov27';
  currentPage: any = "home";

  pageHasBeenChanged(page: string) {
    this.currentPage = page;
  }
}
