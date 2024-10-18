const tasks = {
    todo: [],
    doing: [],
    done: []
};

function addTask(status) {
    const taskName = prompt("Enter task name:");
    if (taskName) {
        tasks[status].push(taskName);
        renderTasks();
    }
}

function renderTasks() {
    document.getElementById('todo-list').innerHTML = tasks.todo.map(task => `<li>${task}</li>`).join('');
    document.getElementById('doing-list').innerHTML = tasks.doing.map(task => `<li>${task}</li>`).join('');
    document.getElementById('done-list').innerHTML = tasks.done.map(task => `<li>${task}</li>`).join('');
    updateProgress();
}

function updateProgress() {
    const totalTasks = tasks.todo.length + tasks.doing.length + tasks.done.length;
    const completedTasks = tasks.done.length;
    const progressPercentage = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

    document.getElementById('progress').style.width = progressPercentage + '%';
}
