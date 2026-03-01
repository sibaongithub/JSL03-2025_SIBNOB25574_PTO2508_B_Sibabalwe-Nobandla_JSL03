# JSL03 Project: Console-Based Task Manager - My Solution

## Project Overview

I built a JavaScript task management system that allows users to add new tasks through browser prompts. The system starts with 3 pre-loaded tasks and lets users add 3 more, storing everything as objects in an array. It includes input validation, task filtering, and displays results in the browser console.

## What I Built

### Core Features

- **Task Storage System** - Tasks are stored as objects in an array, each with an id, title, description, and status
- **Add New Tasks** - Users can add up to 3 new tasks through prompts
- **Unique ID Generation** - Each task automatically gets a unique, incremental ID
- **Input Validation** - Only accepts 'todo', 'doing', or 'done' as status values
- **Task Limit Alert** - Shows alert message when 3 tasks have been added
- **Filter Function** - Separates completed tasks from all tasks
- **Console Display** - Shows both all tasks and filtered completed tasks

### Technologies Used

- **JavaScript (ES6)** - Array manipulation, objects, functions, loops
- **HTML5** - Basic structure
- **Browser APIs** - Prompts, alerts, console logging

## How It Works

### Initial Setup

The system starts with 3 tasks already in the array:

```javascript
const initialTasks = [
    { id: 1, title: "Launch Epic Career", description: "Create a killer Resume", status: "todo" },
    { id: 2, title: "Master JavaScript", description: "Get comfortable with the fundamentals", status: "doing" },
    { id: 3, title: "Contribute to Open Source Projects", description: "Gain practical experience...", status: "done" }
];
```

### Adding Tasks

When the page loads, the user is prompted 3 times to enter:
1. Task title
2. Task description  
3. Task status (with validation)

Each new task gets an ID of 4, 5, and 6.

### Validation Logic

If a user enters an invalid status, they see an alert and are prompted again:
- Valid: `todo`, `doing`, `done`
- Invalid: anything else triggers re-prompt

### Console Output

After entering 3 tasks, the console displays:

**All tasks:**
```
All tasks:
(6) [Object, Object, Object, Object, Object, Object]
  - 3 initial tasks (IDs 1-3)
  - 3 new tasks (IDs 4-6)
```

**Completed tasks only:**
```
Completed tasks:
(X) [Object, Object, ...]
  - Only tasks with status: "done"
```

## How to Use

1. **Open the HTML file** in a browser
2. **Open Developer Console** (Press F12)
3. **Follow the prompts:**
   - Enter title for task 1
   - Enter description for task 1
   - Enter status for task 1 (todo/doing/done)
   - Repeat for tasks 2 and 3
4. **See the alert** after task 3: "There are enough tasks on your board, please check them in the console."
5. **Check the console** to see:
   - All 6 tasks displayed
   - Completed tasks filtered and displayed separately

## Code Structure

### Main Functions

- `getNextId()` - Calculates the next available ID
- `validateStatus()` - Checks if status input is valid
- `getTaskFromUser()` - Handles user prompts and creates task object
- `getCompletedTasks()` - Filters tasks where status === 'done'
- `logAllTasks()` - Displays all tasks in console
- `logCompletedTasks()` - Displays only completed tasks

### Flow

1. Initialize array with 3 tasks
2. Loop 3 times to collect new tasks
3. Validate each input
4. Add validated tasks to array
5. Show alert when limit reached
6. Log all tasks to console
7. Log filtered completed tasks to console

## What I Learned

Through this project, I practiced:

- **Array Methods** - Using push() to add items and filter() to create new arrays
- **Objects** - Creating and working with objects that have multiple properties
- **Functions** - Writing reusable functions for specific tasks
- **Validation** - Checking user input and handling errors
- **Loops** - Using while loops with counters
- **Browser APIs** - Working with prompts, alerts, and console.log()

## Challenges & Solutions

**Challenge:** Making sure each task gets a unique ID  
**Solution:** Created `getNextId()` function that finds the last task's ID and adds 1

**Challenge:** Validating status input  
**Solution:** Used a while loop to keep asking until valid input received

**Challenge:** Filtering only completed tasks  
**Solution:** Used array filter() method with condition `task.status === 'done'`

## Future Improvements

If I expand this project, I could:
- Allow users to delete or edit tasks
- Save tasks to localStorage so they persist after refresh
- Add a visual task board instead of just console output
- Allow unlimited tasks instead of limiting to 3

## Files

- `index.html` - Main HTML file with Kanban board interface
- `scripts.js` - All JavaScript logic for task management
- `README.md` - This documentation file
- `assets` - This is the main file containing all image files

## Author

Sibabalwe Nobandla  
Student Number: SIBNOB25574  
Project: JSL03 - Console-Based Task Manager
