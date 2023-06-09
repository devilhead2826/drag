document.addEventListener("DOMContentLoaded", function() {
  const draggableItems = document.querySelectorAll(".draggable-item");
  const targetContainer = document.getElementById("container2");
  const resetButton = document.getElementById("reset-button");
  
  draggableItems.forEach(item => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
  });

  targetContainer.addEventListener("dragover", dragOver);
  targetContainer.addEventListener("dragenter", dragEnter);
  targetContainer.addEventListener("dragleave", dragLeave);
  targetContainer.addEventListener("drop", drop);

  resetButton.addEventListener("click", resetContainers);
});

let draggedItem = null;

function dragStart() {
  draggedItem = this;
  this.classList.add("dragging");
}

function dragEnd() {
  this.classList.remove("dragging");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("dragover");
}

function dragLeave() {
  this.classList.remove("dragover");
}

function drop() {
  this.classList.remove("dragover");
  this.appendChild(draggedItem);
  displaySuccessMessage("Item successfully dropped!");
}

function resetContainers() {
  const container1 = document.getElementById("container1");
  const container2 = document.getElementById("container2");
  container2.innerHTML = "";
  Array.from(container1.children).forEach(item => {
    container1.appendChild(item);
  });
}

function displaySuccessMessage(message) {
  const successMessage = document.createElement("p");
  successMessage.classList.add("success-message");
  successMessage.innerText = message;
  document.body.appendChild(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, 3000);
}
