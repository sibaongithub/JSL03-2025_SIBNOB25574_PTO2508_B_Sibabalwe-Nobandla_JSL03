const initialTasks = [
    {
        id: 1,
        title: "Launch Epic Career",
        description: "Create a killer Resume",
        status: "todo",
    },
    {
        id: 2,
        title: "Master JavaScript",
        description: "Get comfortable with the fundamentals",
        status: "doing",
    },
    {
        id: 3,
        title: "Contribute to Open Source Projects",
        description: "Gain practical experience and collaborate with others in the software development community",
        status: "done",
    },
];

let allTasks = [...initialTasks];

// Constants
const MAX_NEW_TASKS = 3;
const VALID_STATUSES = ['todo', 'doing', 'done'];

// Functions
function getNextId() {
    if (allTasks.length === 0) {
        return 1;
    }
    const lastTask = allTasks[allTasks.length - 1];
    return lastTask.id + 1;
}

function validateStatus(status) {
    const normalizedStatus = status.toLowerCase().trim();
    return VALID_STATUSES.includes(normalizedStatus);
}

function getTaskFromUser(taskNumber) {
    let title = prompt(`Enter task ${taskNumber} title:`);
    let description = prompt(`Enter task ${taskNumber} description:`);
    let status = prompt(`Enter task ${taskNumber} status (todo, doing, or done):`);
    
    while (!validateStatus(status)) {
        alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
        status = prompt(`Enter task ${taskNumber} status (todo, doing, or done):`);
    }
    
    return {
        id: getNextId(),
        title: title,
        description: description,
        status: status.toLowerCase().trim()
    };
}

function getCompletedTasks() {
    return allTasks.filter(task => task.status === 'done');
}

function logAllTasks() {
    console.log('All tasks:');
    console.log(allTasks);
}

function logCompletedTasks() {
    const completedTasks = getCompletedTasks();
    console.log('Completed tasks:');
    console.log(completedTasks);
}

// Add new tasks
let newTasksAdded = 0;

while (newTasksAdded < MAX_NEW_TASKS) {
    const newTask = getTaskFromUser(newTasksAdded + 1);
    allTasks.push(newTask);
    newTasksAdded++;
    
    if (newTasksAdded === MAX_NEW_TASKS) {
        alert("There are enough tasks on your board, please check them in the console.");
        break;
    }
}

// Display results
logAllTasks();
logCompletedTasks();
