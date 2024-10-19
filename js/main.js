var _a;
// elements
const radioViewOptions = document.querySelectorAll("input[name='view-option']");
const listView = document.getElementById("list-view");
const boardView = document.getElementById("board-view");
const closeButtons = document.querySelectorAll(".close-button");
const addBtn = document.getElementById('add-btn');
const setProjectOverlay = document.getElementById("set-project-overlay");
const submitPrj = document.getElementById("submit-project");
const prjForm = document.getElementById('add-prj-form');
const prjFormElements = prjForm === null || prjForm === void 0 ? void 0 : prjForm.querySelectorAll('input:not([type="submit"]), textarea');
// the current active overlay
let activeOverlay = null;
//** event listeners **//
// adding a project
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', () => {
    setProjectOverlay.classList.remove("hide");
    activeOverlay = setProjectOverlay;
    // disable scrolling for content behind the overlay
    document.body.classList.add("overflow-hidden");
});
// creating a project in sidebar
prjForm === null || prjForm === void 0 ? void 0 : prjForm.addEventListener('submit', (event) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const sidebarTop = document.getElementById("sidebar-top");
    const lastEle = document.getElementById("add-project");
    const prjName = (_a = document.getElementById("project-name")) === null || _a === void 0 ? void 0 : _a.value;
    let newPrj = document.createElement("div");
    let prjInfo = [];
    prjInfo.push((_b = document.getElementById("project-name")) === null || _b === void 0 ? void 0 : _b.value);
    prjInfo.push((_c = document.getElementById("project-description")) === null || _c === void 0 ? void 0 : _c.value);
    prjInfo.push((_d = document.getElementById("project-due-date-day")) === null || _d === void 0 ? void 0 : _d.value);
    prjInfo.push((_e = document.getElementById("project-due-date-month")) === null || _e === void 0 ? void 0 : _e.value);
    prjInfo.push((_f = document.getElementById("project-due-date-year")) === null || _f === void 0 ? void 0 : _f.value);
    localStorage.setItem((_g = document.getElementById("project-name")) === null || _g === void 0 ? void 0 : _g.value, JSON.stringify(prjInfo));
});
// callback that closes overlays
const closeOverlay = () => {
    activeOverlay.classList.add("hide");
    activeOverlay = null;
    // reenable scrolling
    document.body.classList.remove("overflow-hidden");
};
// close buttons inside overlays
closeButtons.forEach((button) => {
    button.addEventListener("click", closeOverlay);
});
const iconCount = parseInt((_a = localStorage.getItem("iconify-count")) !== null && _a !== void 0 ? _a : "0");
const renderPrj = () => {
    Object.keys(localStorage).forEach(key => {
        if (key.includes("iconify")) {
            return;
        }
        const value = localStorage.getItem(key);
        if (value) {
            try {
                const prjInfo = JSON.parse(value);
                const sidebarTop = document.getElementById("sidebar-top");
                const lastEle = document.getElementById("add-project");
                let newPrj = document.createElement("div");
                newPrj.className = "projects flex";
                const projectLogo = document.createElement("i");
                projectLogo.className = "bx bx-briefcase-alt-2";
                const projectName = document.createElement("span");
                projectName.textContent = prjInfo[0];
                projectLogo.addEventListener('mouseover', () => {
                    projectLogo.className = 'bx bx-minus-circle';
                });
                projectLogo.addEventListener('mouseout', () => {
                    projectLogo.className = "bx bx-briefcase-alt-2";
                });
                projectLogo.addEventListener('click', () => {
                    newPrj.remove();
                    localStorage.removeItem(prjInfo[0]);
                });
                newPrj.appendChild(projectLogo);
                newPrj.appendChild(projectName);
                sidebarTop === null || sidebarTop === void 0 ? void 0 : sidebarTop.insertBefore(newPrj, lastEle);
            }
            catch (e) {
                return;
            }
        }
    });
};
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
document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".heading-with-arrow");
    const timetableWrapper = document.querySelector(".relative-wrapper");
    const whiteBox = document.querySelector(".white-box");
    // Add click event to the arrow/heading to toggle collapsed/expanded state
    heading.addEventListener("click", function () {
        // Toggle the classes for collapsing and expanding
        timetableWrapper.classList.toggle("collapsed");
        timetableWrapper.classList.toggle("expanded");
        whiteBox.classList.toggle("collapsed");
        whiteBox.classList.toggle("expanded");
        // Adjust the height of the white box and maintain the pink background
        const pinkBackground = document.querySelector(".pink-background-shadow");
        if (whiteBox.classList.contains("collapsed")) {
            pinkBackground.style.height = "70px"; // Adjust pink background height when collapsed
        }
        else {
            pinkBackground.style.height = "123%"; // Reset to full height when expanded
        }
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
});
renderPrj();
export {};
