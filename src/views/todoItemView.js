import { TodoItem } from "../models/todo-item";
import { SetTextForElement } from "./utils";
import { format } from "date-fns";
import "../style/todoItemView.css";

const TodoItemView = (todoItem, completeItemCallback, deleteItemCallback) => {
  console.log("Creating view for todoItem" + todoItem.id);
  const container = document.createElement("div");
  container.classList.add("todoItemContainer");

  const completed = document.createElement("input");
  completed.type = "checkbox";
  completed.checked = todoItem.completed;
  completed.addEventListener("click", (e) => {
    completeItemCallback(e.target.checked);
  });
  container.appendChild(completed);

  const title = document.createElement("p");
  SetTextForElement(title, todoItem.title);
  container.appendChild(title);

  const description = document.createElement("p");
  SetTextForElement(description, todoItem.description);
  container.appendChild(description);

  const date = document.createElement("p");
  SetTextForElement(date, format(todoItem.dueDate, "MM/dd/yyyy"));
  container.appendChild(date);

  const priority = document.createElement("p");
  SetTextForElement(priority, todoItem.priority);
  container.appendChild(priority);

  const deleteButton = document.createElement("button");
  SetTextForElement(deleteButton, "X");
  container.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    deleteItemCallback(todoItem.id);
  });

  return container;
};

export { TodoItemView };
