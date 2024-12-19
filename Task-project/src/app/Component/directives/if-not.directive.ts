import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfNotDirective {

  constructor(
    private tempalateRef : TemplateRef<any> ,
    private viewContainer :ViewContainerRef
  ) {}

  @Input() set appIfNot(condition:boolean){
    if(!condition){
      this.viewContainer.createEmbeddedView(this.tempalateRef)
    }
    else{
      this.viewContainer.clear();
    }
  }

}
