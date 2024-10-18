// elements
const radioViewOptions = document.querySelectorAll("input[name='view-option']");
const listView = document.getElementById("list-view");
const boardView = document.getElementById("board-view");
const addTaskCTA = document.getElementById("add-task-cta");
const setTaskOverlay = document.getElementById("set-task-overlay");
const closeButtons = document.querySelectorAll(".close-button");
const statusSelect = document.getElementById("status-select");
const statusDropdown = document.getElementById("status-dropdown");
const taskItems = document.querySelectorAll(".task-item");
const viewTaskOverlay = document.getElementById("view-task-overlay");
const deleteTaskCTA = document.getElementById("delete-task-cta");
const notification = document.getElementById("notification");
const addBtn = document.getElementById('add-btn');
const setProjectOverlay = document.getElementById("set-project-overlay");
const submitPrj = document.getElementById("submit-project") as HTMLButtonElement;
const prjForm = document.getElementById('add-prj-form');
const prjFormElements = prjForm?.querySelectorAll('input:not([type="submit"]), textarea');
// the current active overlay
let activeOverlay: any = null;

//** event listeners **//

// adding a project
addBtn?.addEventListener('click', (): void => {
   setProjectOverlay!.classList.remove("hide");
   activeOverlay = setProjectOverlay;
   // disable scrolling for content behind the overlay
   document.body.classList.add("overflow-hidden");
})

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
submitPrj?.addEventListener('submit', (event): void => {
   event.preventDefault();
   const sidebarTop = document.getElementById("sidebar-top");
   const lastEle = document.getElementById("add-project");
   const prjName = (document.getElementById("project-name") as HTMLInputElement)?.value;

   let newPrj = document.createElement("div");

   alert("asdfasd");

   // sidebarTop?.insertBefore(newPrj, lastEle);
   sidebarTop?.appendChild(newPrj);
   // if (parentElement) {
   //    // 创建新元素
   //    const newElement = document.createElement(newElementType);
      
   //    // 将新元素添加到父元素
   //    parentElement.appendChild(newElement);
      
   //    // 调用回调函数，传入新创建的元素
   //    callback(newElement);
   // } else {
   //    console.error(`Parent element with id "${parentId}" not found.`);
   // }
})

// radio buttons for view option
radioViewOptions.forEach((radioButton) => {
   radioButton.addEventListener("change", (event) => {
      const eventTarget = event.target;
      const viewOption = eventTarget!.value;

      switch (viewOption) {
      case "list":
         boardView!.classList.add("hide");
         listView!.classList.remove("hide");
         break;
      case "board":
         listView!.classList.add("hide");
         boardView!.classList.remove("hide");
         break;
      }
   });
});

// add task
addTaskCTA!.addEventListener("click", () => {
   setTaskOverlay!.classList.remove("hide");
   activeOverlay = setTaskOverlay;
   // disable scrolling for content behind the overlay
   document.body.classList.add("overflow-hidden");
});

// close buttons inside overlays
closeButtons.forEach((button) => {
   button.addEventListener("click", () => {
      activeOverlay.classList.add("hide");
      activeOverlay = null;
      // reenable scrolling
      document.body.classList.remove("overflow-hidden");
   });
});

// open status dropdown
statusSelect!.addEventListener("click", () => {
   statusDropdown!.classList.toggle("hide");
});

// click a task
taskItems.forEach((task) => {
   task.addEventListener("click", () => {
      viewTaskOverlay!.classList.remove("hide");
      activeOverlay = viewTaskOverlay;
      // disable scrolling for content behind the overlay
      document.body.classList.add("overflow-hidden");
   });
});

// delete a task
deleteTaskCTA!.addEventListener("click", () => {
   activeOverlay.classList.add("hide");
   activeOverlay = null;
   // reenable scrolling
   document.body.classList.remove("overflow-hidden");
   // show notification & hide it after a while
   notification!.classList.add("show");
   setTimeout(() => {
      notification!.classList.remove("show");
   }, 3000);
});
