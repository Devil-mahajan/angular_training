import { Component,Input ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() taskList: { id: number; title: string; completed: boolean }[] = [];

  // Output property to notify parent about task completion
  @Output() taskCompleted: EventEmitter<number> = new EventEmitter<number>();

  // Output property to notify parent about task deletion
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter<number>();

  // Emit event when a task is completed
  completeTask(taskId: number): void {
    this.taskCompleted.emit(taskId);
  }

  // Emit event when a task is deleted
  deleteTask(taskId: number): void {
    this.taskDeleted.emit(taskId);
  }

}
