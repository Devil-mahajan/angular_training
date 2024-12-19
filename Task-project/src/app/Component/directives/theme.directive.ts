import { Directive,Input ,ElementRef ,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {
  @Input() appTheme: 'light' | 'dark' = 'light'; 
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.appTheme === 'light') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ffffff');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#000000'); 
    } else if (this.appTheme === 'dark') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#333333'); 
      this.renderer.setStyle(this.el.nativeElement, 'color', '#ffffff'); 
    }
  }


}
