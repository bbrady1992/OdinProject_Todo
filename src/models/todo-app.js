import { TodoItem } from "./todo-item";
import { TodoList } from "./todo-list";

const TodoApp = () => {
  let projects = [];
  const defaultList = TodoList("Default");
  projects.push(defaultList);

  const createProject = (projectName) => {
    const newProject = TodoList(projectName);
    projects.push(newProject);
  };

  const projectNames = () => {
    return projects.map((p) => p.title);
  };

  const currentProject = () => {
    return projects[0];
  };

  return { createProject, currentProject, projectNames };
};

export default TodoApp;
