import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  tasks = [
    { id: 1, title: 'Learn Angular', completed: false,isEditing:false,newTitle:'' },
    { id: 2, title: 'Build a To-Do List App', completed: false,isEditing:false,newTitle:'' },
    { id: 3, title: 'Master TypeScript', completed: false,isEditing:false,newTitle:'' },
  ];

  // Add a new task
  addTask(newTaskTitle: string): void {
    const newTask = {
      id: this.tasks.length + 1,
      title: newTaskTitle,
      completed: false,
      isEditing: false,
      newTitle: ''
    };
    this.tasks.push(newTask);
  }

  // Handle task completion event from child
  onTaskCompleted(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = true;
      console.log(`Task "${task.title}" marked as completed!`);
    }
  }

  // Handle task deletion event from child
  onTaskDeleted(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    console.log(`Task with ID ${taskId} deleted!`);
  }

  onUpdatedTask(taskId:number , updatedTitle:string): void{
    const task = this.tasks.find(t => t.id === taskId);
    if(task) {
      task.title = updatedTitle;
      console.log(`Task "${taskId}" updated to "${updatedTitle}"`);
    }
  }

}
