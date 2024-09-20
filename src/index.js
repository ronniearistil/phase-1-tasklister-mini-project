document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add event listener for form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get the value from the input field
    const newTaskDescription = document.getElementById("new-task-description").value;

    // Create a new list item (li) element
    const newTask = document.createElement("li");
    newTask.textContent = newTaskDescription;

    // Add delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      newTask.remove();
    });

    // Append the delete button to the task and add the task to the list
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    // Clear the input field
    form.reset();
  });
});
