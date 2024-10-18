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

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".heading-with-arrow");
    const timetableWrapper = document.querySelector(".relative-wrapper");

    // Add click event to the arrow/heading to toggle collapsed/expanded state
    heading.addEventListener("click", function () {
        timetableWrapper.classList.toggle("collapsed");
        timetableWrapper.classList.toggle("expanded");
    });

    // Action for "Book a Room" button
    const bookRoomButton = document.querySelector(".book-room");
    bookRoomButton.addEventListener("click", function () {
        alert("Booking a room is currently unavailable. Please try again later.");
    });

    // Action for availability list items
    document.querySelectorAll('.availability-list li').forEach(item => {
        item.addEventListener('click', function () {
            alert('You selected: ' + item.textContent);
        });
    });

    // Action to remove the notification when cancel is clicked
    const cancelIcon = document.querySelector(".notibox .cancel");
    cancelIcon.addEventListener("click", function () {
        const notificationBox = this.parentElement;
        notificationBox.classList.add("gone");
    });
});

