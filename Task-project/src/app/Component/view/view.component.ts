import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  isVisible :boolean = true;


toggle() {
  this.isVisible = !this.isVisible
}

}
