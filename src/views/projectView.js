import { TodoItemView } from "./todoItemView";
import { SetTextForElement } from "./utils";

const ProjectView = (app) => {
  const _app = app;
  const container = document.createElement("div");

  const title = document.createElement("h1");
  SetTextForElement(title, _app.currentProject().title);
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
    _app.currentProject().items.forEach((item) => {
      const listItem = document.createElement("li");
      const todoItemView = TodoItemView(item);
      listItem.appendChild(todoItemView);
      itemList.appendChild(listItem);
    });
  };

  _renderTodoItems();

  const projectView = document.querySelector("#projectView");
  projectView.appendChild(container);
};

export { ProjectView };
