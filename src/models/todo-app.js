import { TodoItem } from "./todo-item";
import { TodoList } from "./todo-list";
import { LocalStorageInterface } from "../storage/localStorageInterface";

const TodoApp = () => {
  let projects = new Map();

  const _updateProjectsInStorage = () => {
    LocalStorageInterface.StoreProjectIDs(Array.from(projects.keys()));
  };

  const createProject = (projectName) => {
    const newProject = TodoList(projectName);
    projects.set(newProject.id, newProject);
    _updateProjectsInStorage();
    LocalStorageInterface.StoreProject(newProject);
    return newProject.id;
  };

  const deleteProject = (projectID) => {
    if (projects.delete(projectID)) {
      _updateProjectsInStorage();
    }
  };

  const getProjects = () => projects;

  // Returns undefined if no project with that ID exists
  const getProjectByID = (ID) => {
    return projects.get(ID);
  };

  const _init = () => {
    const projectIDs = LocalStorageInterface.GetProjectIDs();
    console.log(`Restoring projects with IDs [${projectIDs}]`);
    if (projectIDs !== null) {
      for (let projectID in projectIDs) {
        console.log(`Restoring project ${projectID}`);
        const project = LocalStorageInterface.GetProject(projectID);
        projects.set(project.id, project);
      }
    } else {
      const defaultList = TodoList("Default");
      projects.set(defaultList.id, defaultList);
      _updateProjectsInStorage();
    }
  };

  _init();

  return {
    createProject,
    deleteProject,
    getProjectByID,
    getProjects,
  };
};

export default TodoApp;
