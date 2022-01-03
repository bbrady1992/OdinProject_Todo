import { SetTextForElement } from "./utils";

const ProjectView = (app) => {
  const _app = app;
  const container = document.createElement("div");

  const title = document.createElement("h1");
  SetTextForElement(title, _app.currentProject().title);
  container.appendChild(title);

  const projectView = document.querySelector("#projectView");
  projectView.appendChild(container);
};

export { ProjectView };
