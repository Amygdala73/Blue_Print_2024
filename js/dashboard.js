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

document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("add-task-cta");
    const overlay = document.querySelector(".overlay");
    const closeButton = overlay.querySelector(".close-button");

    // Show overlay when clicking "Add Task"
    addTaskButton.addEventListener("click", () => {
        overlay.classList.remove("hide");
    });

    // Hide overlay when clicking close button
    closeButton.addEventListener("click", () => {
        overlay.classList.add("hide");
    });

    // Hide overlay if clicked outside of the overlay content
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.classList.add("hide");
        }
    });

    // Form submit action (you can add the backend logic here)
    overlay.querySelector(".add-task-form").addEventListener("submit", function (e) {
        e.preventDefault();
        // Capture form data here
        console.log("New Task Added:", {
            name: document.getElementById("task-name").value,
            description: document.getElementById("task-desc").value,
            dueDate: `${document.getElementById("task-day").value}-${document.getElementById("task-month").value}-${document.getElementById("task-year").value}`,
            status: document.getElementById("task-status").value
        });

        // Close overlay after task is added
        overlay.classList.add("hide");
    });
});
