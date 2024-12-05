import { Component, Input, Output, EventEmitter, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent {
  show = true;

  @Input() loginDetails: any = {};
  @Input() currentPages: string = '';
  @Output() pageChanged = new EventEmitter<string>();
  Object: any = Object;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void { }

  changePage(page: string) {
    this.currentPages = page;
    this.pageChanged.emit(page);
  }

}
