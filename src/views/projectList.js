import { SetTextForElement } from "./utils";

const ProjectList = (app) => {
  const _app = app;
  const projectList = document.querySelector("#projectList");

  const addProjectButton = document.createElement("button");
  SetTextForElement(addProjectButton, "Add Project");

  addProjectButton.addEventListener("click", () => {
    const newProjectName = prompt("Enter name for new project");
    _app.createProject(newProjectName);
    _renderProjectNames();
  });
  projectList.appendChild(addProjectButton);

  const list = document.createElement("ul");
  projectList.appendChild(list);

  const _renderProjectNames = () => {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    _app.projectNames().forEach((element) => {
      const listItem = document.createElement("li");
      SetTextForElement(listItem, element);
      list.appendChild(listItem);
    });
  };

  _renderProjectNames();
};

export { ProjectList };
