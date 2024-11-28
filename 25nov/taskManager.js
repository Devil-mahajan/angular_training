// taskManager.js

let tasks = []; // Array to hold tasks
let nextId = 1; // To keep track of the next task ID

// Function to add a task
export const addTask = (task) => {
    task.id = nextId++;
    tasks.push(task);
    console.log(`Task added: ${task.title}`);
};

// Function to update a task
export const updateTask = (id, updatedTask) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
        console.log(`Task updated: ${tasks[taskIndex].title}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

// Function to delete a task
export const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        console.log(`Task deleted: ${tasks[taskIndex].title}`);
        tasks.splice(taskIndex, 1);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
};

// Function to view all tasks
export const viewTasks = () => {
    console.log('Current Tasks:');
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Priority: ${task.priority}`);
    });
};