import { SetTextForElement } from "./utils";
import { format } from "date-fns";

const AddItemDialog = (addItemCallback, renderItemsCallback) => {
  const container = document.createElement("div");
  container.className = "addItemDialogContainer";

  const form = document.createElement("form");
  container.appendChild(form);

  ////
  // Title
  ////
  const titleLabel = document.createElement("label");
  SetTextForElement(titleLabel, "Title");
  titleLabel.for = "title";

  const title = document.createElement("input");
  title.type = "text";
  title.name = "title";
  title.id = "title";
  title.placeholder = "Title...";
  title.required = true;

  form.appendChild(titleLabel);
  form.appendChild(title);

  ////
  // Description
  ////
  const descriptionLabel = document.createElement("label");
  SetTextForElement(descriptionLabel, "Description");
  descriptionLabel.for = "description";

  const description = document.createElement("input");
  description.type = "text";
  description.name = "description";
  description.id = "description";
  description.placeholder = "Description...";

  form.appendChild(descriptionLabel);
  form.appendChild(description);

  ////
  // Due Date
  ////
  const dueDateLabel = document.createElement("label");
  SetTextForElement(dueDateLabel, "Due date");
  dueDateLabel.for = "dueDate";

  const dueDate = document.createElement("input");
  dueDate.type = "date";
  dueDate.name = "dueDate";
  dueDate.id = "dueDate";
  dueDate.value = format(new Date(), "yyyy-MM-dd");

  form.appendChild(dueDateLabel);
  form.appendChild(dueDate);

  ////
  // Priority
  ////
  const priorityLabel = document.createElement("label");
  SetTextForElement(priorityLabel, "Priority");
  priorityLabel.for = "priority";

  // TODO (bbrady) - this makes more sense as a dropdown with a number and
  // description
  const priority = document.createElement("input");
  priority.type = "number";
  priority.name = "priority";
  priority.id = "priority";
  priority.min = 1;
  priority.max = 5;
  priority.value = 3;

  form.appendChild(priorityLabel);
  form.appendChild(priority);

  ////
  // Submit button
  ////
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Add Item";
  form.onsubmit = (e) => {
    e.preventDefault();
    addItemCallback(
      title.value,
      description.value,
      dueDate.value,
      priority.value
    );
    renderItemsCallback();
  };
  form.appendChild(submitButton);

  return container;
};

export { AddItemDialog };
