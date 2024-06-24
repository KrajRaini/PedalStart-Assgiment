const apiBaseUrl = 'http://localhost:3000/tasks';

document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    const task = { title, description, dueDate };

    const res = await fetch(apiBaseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    });

    const newTask = await res.json();
    addTaskToDOM(newTask);
    document.getElementById('task-form').reset();
});

async function fetchTasks() {
    const res = await fetch(apiBaseUrl);
    const tasks = await res.json();
    tasks.forEach(task => addTaskToDOM(task));
}

function addTaskToDOM(task) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('list-group-item', 'task', task.status.toLowerCase());
    taskDiv.innerHTML = `
        <div>
            <h5>${task.title}</h5>
            <p>${task.description}</p>
            <small>Due: ${new Date(task.dueDate).toDateString()}</small>
            <small>Status: ${task.status}</small>
        </div>
        <div>
            <button class="btn btn-success" onclick="toggleStatus('${task._id}')">Toggle Status</button>
            <button class="btn btn-info" onclick="editTask('${task._id}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteTask('${task._id}')">Delete</button>
        </div>
    `;
    document.getElementById('tasks').appendChild(taskDiv);
}

async function toggleStatus(id) {
    const taskRes = await fetch(`${apiBaseUrl}/${id}`);
    const task = await taskRes.json();
    const updatedStatus = task.status === 'Pending' ? 'Completed' : 'Pending';

    const res = await fetch(`${apiBaseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: updatedStatus })
    });

    const updatedTask = await res.json();
    document.getElementById('tasks').innerHTML = '';
    fetchTasks();
}

async function editTask(id) {
    // Implement edit functionality
}

async function deleteTask(id) {
    await fetch(`${apiBaseUrl}/${id}`, { method: 'DELETE' });
    document.getElementById('tasks').innerHTML = '';
    fetchTasks();
}

fetchTasks();
