import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent {
  theme: 'light' | 'dark' = 'light'; 

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light'; 
  }

}
