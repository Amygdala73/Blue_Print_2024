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
const submitPrj = document.getElementById("submit-project") as HTMLButtonElement;
const prjForm = document.getElementById('add-prj-form') as HTMLFormElement;
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
prjForm?.addEventListener('submit', (event): void => {
   const sidebarTop = document.getElementById("sidebar-top");
   const lastEle = document.getElementById("add-project");
   const prjName = (document.getElementById("project-name") as HTMLInputElement)?.value;

   let newPrj = document.createElement("div");
   let prjInfo: string[] = []; 
   prjInfo.push((document.getElementById("project-name") as HTMLInputElement)?.value);
   prjInfo.push((document.getElementById("project-description") as HTMLTextAreaElement)?.value);
   prjInfo.push((document.getElementById("project-due-date-day") as HTMLInputElement)?.value);
   prjInfo.push((document.getElementById("project-due-date-month") as HTMLInputElement)?.value);
   prjInfo.push((document.getElementById("project-due-date-year") as HTMLInputElement)?.value);
   localStorage.setItem((document.getElementById("project-name") as HTMLInputElement)?.value, JSON.stringify(prjInfo));
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

// // add task
// addTaskCTA!.addEventListener("click", () => {
//    setTaskOverlay!.classList.remove("hide");
//    activeOverlay = setTaskOverlay;
//    // disable scrolling for content behind the overlay
//    document.body.classList.add("overflow-hidden");
// });

// callback that closes overlays
const closeOverlay = (): void => {
   activeOverlay.classList.add("hide");
   activeOverlay = null;
   // reenable scrolling
   document.body.classList.remove("overflow-hidden");
}

// close buttons inside overlays
closeButtons.forEach((button) => {
   button.addEventListener("click", closeOverlay);
});

// open status dropdown
statusSelect!.addEventListener("click", () => {
   statusDropdown!.classList.toggle("hide");
});

// click a task
taskItems.forEach((task) => {
   task.addEventListener("click", closeOverlay);
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

const iconCount = parseInt(localStorage.getItem("iconify-count") ?? "0");

const renderPrj = (): void => {
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
            projectLogo.className = "bx bx-briefcase-alt-2"
            const projectName = document.createElement("span");
            projectName.textContent = prjInfo[0];

            projectLogo.addEventListener('mouseover', (): void => {
               projectLogo.className = 'bx bx-minus-circle';
            });
            projectLogo.addEventListener('mouseout', (): void => {
               projectLogo.className = "bx bx-briefcase-alt-2";
            });
            projectLogo.addEventListener('click', (): void => {
               newPrj.remove();
               localStorage.removeItem(prjInfo[0]);
            });
            
            newPrj.appendChild(projectLogo);
            newPrj.appendChild(projectName);
   
            sidebarTop?.insertBefore(newPrj, lastEle);
         } catch (e) {
            return;
         }
      }
   });
}

renderPrj();
