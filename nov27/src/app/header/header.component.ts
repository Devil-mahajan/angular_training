import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  home: string = "Home"

  @Input() item = "Hello";
  @Input() currentPage!: string;
  @Output() pageChanged = new EventEmitter<string>();

  constructor(){  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.currentPage);
  }

  ngOnInit(): void {  }

  changePage(page: string) {
    this.currentPage = page;
    this.pageChanged.emit(page);
  }

}
