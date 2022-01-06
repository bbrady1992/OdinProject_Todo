import { TodoItem } from "./todo-item";
import { TodoList } from "./todo-list";

const TodoApp = () => {
  let projects = new Map();
  const defaultList = TodoList("Default");
  projects.set(defaultList.id, defaultList);

  const createProject = (projectName) => {
    const newProject = TodoList(projectName);
    projects.set(newProject.id, newProject);
    return newProject.id;
  };

  const getProjects = () => projects;

  // Returns undefined if no project with that ID exists
  const getProjectByID = (ID) => {
    return projects.get(ID);
  };

  return {
    createProject,
    getProjectByID,
    getProjects,
  };
};

export default TodoApp;
