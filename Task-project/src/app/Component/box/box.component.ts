import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit , OnDestroy{
  colors:string[] = ['red','blue','pink','black','orenage','yellow','green'];
  boxes: string[] = ['red','blue','pink','orange']
  private intervalId : number | null = null; 

  ngOnInit(): void {
    
    this.intervalId = window.setInterval(() =>{
      this.changeColor();
    },10000)
  }

  ngOnDestroy(): void {
    if(this.intervalId !==null){
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    
    
  }
  changeColor(): void{
    this.boxes = this.boxes.map(() => this.getRandomColor());
  }
  getRandomColor():string{
    return this.colors[Math.floor(Math.random()* this.colors.length)]
  }

}
