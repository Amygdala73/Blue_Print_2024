var _a;
// elements
const radioViewOptions = document.querySelectorAll("input[name='view-option']");
const listView = document.getElementById("list-view");
const boardView = document.getElementById("board-view");
// const addTaskCTA = document.getElementById("add-task-cta");
// const setTaskOverlay = document.getElementById("set-task-overlay");
const closeButtons = document.querySelectorAll(".close-button");
const statusSelect = document.getElementById("status-select");
const statusDropdown = document.getElementById("status-dropdown");
const taskItems = document.querySelectorAll(".task-item");
const viewTaskOverlay = document.getElementById("view-task-overlay");
const deleteTaskCTA = document.getElementById("delete-task-cta");
const notification = document.getElementById("notification");
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
// function validateForm() {
//    let isValid = true;
//    prjFormElements?.forEach(element => {
//       if (!(element as HTMLInputElement | HTMLTextAreaElement).checkValidity()) {
//          isValid = false;
//       }
//    });
//    submitPrj!.disabled = !isValid;
// }
// prjFormElements?.forEach(element => {
//    element.addEventListener('input', validateForm);
// });
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
// radio buttons for view option
radioViewOptions.forEach((radioButton) => {
    radioButton.addEventListener("change", (event) => {
        const eventTarget = event.target;
        const viewOption = eventTarget.value;
        switch (viewOption) {
            case "list":
                boardView.classList.add("hide");
                listView.classList.remove("hide");
                break;
            case "board":
                listView.classList.add("hide");
                boardView.classList.remove("hide");
                break;
        }
    });
});
// // add task
// addTaskCTA!.addEventListener("click", () => {
//    setTaskOverlay!.classList.remove("hide");
//    activeOverlay = setTaskOverlay;
//    // disable scrolling for content behind the overlay
//    document.body.classList.add("overflow-hidden");
// });
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
// open status dropdown
statusSelect.addEventListener("click", () => {
    statusDropdown.classList.toggle("hide");
});
// click a task
taskItems.forEach((task) => {
    task.addEventListener("click", closeOverlay);
});
// delete a task
deleteTaskCTA.addEventListener("click", () => {
    activeOverlay.classList.add("hide");
    activeOverlay = null;
    // reenable scrolling
    document.body.classList.remove("overflow-hidden");
    // show notification & hide it after a while
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
});
const iconCount = parseInt((_a = localStorage.getItem("iconify-count")) !== null && _a !== void 0 ? _a : "0");
const renderPrj = () => {
    Object.keys(localStorage).slice(iconCount + 2).forEach(key => {
        const value = localStorage.getItem(key);
        if (value) {
            try {
                const prjInfo = JSON.parse(value);
                console.log(`${key}:`, prjInfo);
                const sidebarTop = document.getElementById("sidebar-top");
                const lastEle = document.getElementById("add-project");
                let newPrj = document.createElement("div");
                newPrj.className = "projects flex";
                const projectLogo = document.createElement("i");
                projectLogo.className = "bx bx-briefcase-alt-2";
                const projectName = document.createElement("span");
                projectName.textContent = prjInfo[0];
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
renderPrj();
export {};
