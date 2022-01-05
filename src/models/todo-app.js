import { TodoItem } from "./todo-item";
import { TodoList } from "./todo-list";

const TodoApp = () => {
  let projects = new Map();
  const defaultList = TodoList("Default");
  let currentProjectID = defaultList.id;
  projects.set(defaultList.id, defaultList);

  const createProject = (projectName) => {
    const newProject = TodoList(projectName);
    projects.set(newProject.id, newProject);
  };

  const projectNames = () => {
    const projectNames = [];
    projects.forEach((p) => projectNames.push(p.title));
    return projectNames;
  };

  const currentProject = () => {
    return projects.get(currentProjectID);
  };

  const setCurrentProject = (projectID) => {
    currentProjectID = projectID;
  };

  // Returns undefined if no project with that ID exists
  const getProjectByID = (ID) => {
    return projects.get(ID);
  };

  return {
    createProject,
    currentProject,
    projectNames,
    setCurrentProject,
    getProjectByID,
  };
};

export default TodoApp;
