# Task Management Application

## Overview

This project is a Task Management Application that allows users to create, read, update, and delete tasks. It is built using Node.js with Express for the back-end and vanilla HTML, CSS, and JavaScript for the front-end. The application ensures high performance, scalability, and security.

## Features

- **Create Task**: Users can add new tasks with a title, description, and due date.
- **Read Tasks**: The landing page displays a list of tasks. Users can view detailed information of each task.
- **Update Task**: Users can edit existing tasks.
- **Delete Task**: Users can delete tasks.
- **Toggle Task Status**: Users can mark tasks as completed or pending.
- **Responsive Design**: The application is responsive and works on both desktop and mobile devices.

## Technologies Used

- **Front-end**: HTML, CSS (Bootstrap), JavaScript
- **Back-end**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Version Control**: Git

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running on your machine.

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd task-management-app
Install the dependencies:
npm install

Ensure MongoDB is running. If MongoDB is not installed, you can download and install it from here.

Start the server:

node server.js
Open index.html in your browser to view the front-end:

http://localhost:3000

Project Structure

task-management-app/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server.js
└── package.json
Explanation of Files
public/index.html: The main HTML file for the front-end.
public/styles.css: The CSS file for styling the front-end.
public/script.js: The JavaScript file containing the front-end logic.
server.js: The main server file for the back-end, handling API routes and database interactions.
package.json: The file containing metadata about the project and its dependencies.
API Endpoints
GET /tasks: Retrieve all tasks.
POST /tasks: Create a new task.
GET /tasks/
: Retrieve a single task by its ID.
PUT /tasks/
: Update an existing task.
DELETE /tasks/
: Delete a task.
Usage
Adding a Task
Fill in the task title, description, and due date in the form.
Click the "Add Task" button.
The task will appear in the task list.
Viewing Tasks
The landing page displays a list of tasks.
Click on a task to view detailed information.
Editing a Task
Click the "Edit" button next to a task.
Update the task details and save the changes.
Deleting a Task
Click the "Delete" button next to a task.
The task will be removed from the list.
Toggling Task Status
Click the "Toggle Status" button next to a task.
The task status will change between "Pending" and "Completed".
Future Improvements
Implement user authentication to manage tasks for different users.
Add more advanced filtering and sorting options for tasks.
Enhance the UI/UX with more interactive elements and animations.
Implement notifications or reminders for tasks nearing their due dates.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
