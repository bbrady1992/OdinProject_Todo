import { TodoItem } from "./todo-item";
import { TodoList } from "./todo-list";
import { LocalStorageInterface } from "../storage/localStorageInterface";

const TodoApp = () => {
  let projects = new Map();
  const defaultList = TodoList("Default");
  projects.set(defaultList.id, defaultList);

  const _updateProjectIdsInStorage = () => {
    LocalStorageInterface.StoreProjectIDs(Array.from(projects.keys()));
  };

  const createProject = (projectName) => {
    const newProject = TodoList(projectName);
    projects.set(newProject.id, newProject);
    _updateProjectIdsInStorage();
    return newProject.id;
  };

  const getProjects = () => projects;

  // Returns undefined if no project with that ID exists
  const getProjectByID = (ID) => {
    return projects.get(ID);
  };

  _updateProjectIdsInStorage();

  return {
    createProject,
    getProjectByID,
    getProjects,
  };
};

export default TodoApp;
