import { AddItemDialog } from "./addItemDialog";
import { TodoItemView } from "./todoItemView";
import { SetTextForElement } from "./utils";
import { TodoItem } from "../models/todo-item";
import { parseISO } from "date-fns";

const ProjectView = (() => {
  const renderProject = (project) => {
    const container = document.createElement("div");

    const title = document.createElement("h1");
    SetTextForElement(title, project.title);
    container.appendChild(title);

    const addTodoButton = document.createElement("button");
    SetTextForElement(addTodoButton, "Add Item");
    container.appendChild(addTodoButton);

    const itemHeader = document.createElement("h2");
    SetTextForElement(itemHeader, "To-do Items");
    container.appendChild(itemHeader);

    const itemList = document.createElement("ul");
    container.appendChild(itemList);

    const _renderTodoItems = () => {
      while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
      }
      project.items.forEach((item) => {
        const listItem = document.createElement("li");
        const todoItemView = TodoItemView(
          item,
          (isComplete) => {
            item.completed = isComplete;
            console.log(`Item ${item.id} checkbox clicked`);
            console.log({ item });
          },
          () => {
            project.deleteItem(item.id);
            _renderTodoItems();
          }
        );
        listItem.appendChild(todoItemView);
        itemList.appendChild(listItem);
      });
    };

    _renderTodoItems();

    const projectView = document.querySelector("#projectView");
    // Clear existing project view if it exists
    while (projectView.firstChild) {
      projectView.removeChild(projectView.firstChild);
    }
    projectView.appendChild(container);

    projectView.appendChild(
      AddItemDialog((title, description, dueDate, priority) => {
        console.log(`Date is ${dueDate}`);
        const newItem = TodoItem(
          title,
          description,
          parseISO(dueDate),
          priority
        );
        project.addItem(newItem);
      }, _renderTodoItems)
    );
  };

  return { renderProject };
})();

export { ProjectView as ProjectView2 };
