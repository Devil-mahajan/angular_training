import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentBtn: string = 'health-it';

  onToggle(tab: string) {
    this.currentBtn = tab;
    console.log(`Active Tab: ${tab}`);
  }

}
