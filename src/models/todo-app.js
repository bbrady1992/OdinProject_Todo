import { TodoItem } from "./todo-item";
import { TodoList } from "./todo-list";

const TodoApp = () => {
  let projects = [];
  const defaultList = TodoList("Default");
  const item1 = TodoItem("Item1", "Desc1", "2021-01-04", 100);
  defaultList.addItem(item1);
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
