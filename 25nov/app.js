// app.js
import { addTask, updateTask, deleteTask, viewTasks } from './taskManager.js';

// Sample tasks
const task1 = { title: 'Finish Project', description: 'Complete the project by deadline', priority: 'High' };
const task2 = { title: 'Grocery Shopping', description: 'Buy vegetables and fruits', priority: 'Low' };

// Adding tasks
addTask(task1);
addTask(task2);

// View all tasks
viewTasks();  // Display tasks

// Update task 1
updateTask(1, { priority: 'Medium' });  // Update task 1

// View updated tasks
viewTasks();  // Display updated tasks

// Delete task 2
deleteTask(2);  // Delete task 2

// View remaining tasks
viewTasks();  // Display remaining tasks