import { Component } from '@angular/core';

@Component({
  selector: 'app-count-parent',
  templateUrl: './count-parent.component.html',
  styleUrls: ['./count-parent.component.css']
})
export class CountParentComponent {
  parentCount : number = 0;

}
