const notify = document.querySelector(".container__notify");
const btn = document.querySelector(".container--btn");

btn.addEventListener("click", active);

// Function to handle notification count increment
function active() {
  // To get the current count
  let add = Number(notify.getAttribute("data-count") || 0);
  // To set the new count
  notify.setAttribute("data-count", add + 1);
  // To add class when count is 0
  if (add === 0) {
    notify.classList.add("add-numb");
  }
  false;
}
