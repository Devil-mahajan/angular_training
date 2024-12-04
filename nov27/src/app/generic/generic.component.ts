import { Component,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  generic: string = "Generic"
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
