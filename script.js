const newTaskEl = document.getElementById("new-task");
const listContainerEl = document.getElementById("list-container");
const BtnEl = document.querySelector(".add-btn");

BtnEl.addEventListener("click", function() {
    const taskText = newTaskEl.value;
    if (taskText === "") {
        alert("Please enter something");
    } else {
        // Create a new task element
        let li = document.createElement("li");
        li.textContent = taskText;

        // Create a delete button for the task
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn"; // Assign the "delete-btn" class

        deleteBtn.addEventListener("click", function() {
            // Remove the task when the delete button is clicked
            listContainerEl.removeChild(li);
        });

        // Append the task and delete button to the list container
        li.appendChild(deleteBtn);
        listContainerEl.appendChild(li);

        newTaskEl.value = ""; // Clear the input field
    }
});
