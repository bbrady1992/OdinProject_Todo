import { TodoItemFromJSON } from "../models/todo-item";
import { TodoListFromJSON } from "../models/todo-list";

const LocalStorageInterface = (() => {
  // Arg: projectIDs - Array<int>
  const StoreProjectIDs = (projectIDs) => {
    localStorage.setItem("projectIDs", JSON.stringify(projectIDs));
  };

  const GetProjectIDs = () => {
    return JSON.parse(localStorage.getItem("projectIDs"));
  };

  const GetNextProjectID = () => {
    let nextID = localStorage.getItem("nextProjectID");
    if (nextID === null) {
      nextID = 0;
    } else {
      nextID = parseInt(nextID);
    }
    localStorage.setItem("nextProjectID", `${nextID + 1}`);
    return nextID;
  };

  // Arg: projectID (int) - ID for project
  // Arg: itemIDs (Array<int>) - Array of item IDs for project
  const StoreItemIDsForProject = (projectID, itemIDs) => {
    localStorage.setItem(`${projectID}.ItemIDs`, JSON.stringify(itemIDs));
  };

  const GetItemIDsForProject = (projectID) => {
    return JSON.parse(localStorage.getItem(`${projectID}.ItemIDs`));
  };

  // Arg: projectID (int) - project ID
  // Arg: todoItem (TodoItem) - TodoItem object
  const StoreItem = (projectID, todoItem) => {
    localStorage.setItem(
      `${projectID}.${todoItem.id}`,
      JSON.stringify(todoItem)
    );
  };

  // Arg: projectID (int)
  // Arg: itemID (int)
  const GetItem = (projectID, itemID) => {
    const itemJSON = JSON.parse(localStorage.getItem(`${projectID}.${itemID}`));
    const item = TodoItemFromJSON(itemJSON);
    return item;
  };

  // Arg: projectID (int)
  // Arg: itemID (int)
  const DeleteItem = (projectID, itemID) => {
    localStorage.removeItem(`${projectID}.${itemID}`);
  };

  // Arg: project (TodoList)
  const StoreProject = (project) => {
    // Store project metadata
    const projectData = {
      id: project.id,
      title: project.title,
      _nextItemIndex: project._nextItemIndex,
    };
    localStorage.setItem(`project${project.id}`, JSON.stringify(projectData));

    // Store IDs of todo items in this project
    const projectItemIDs = project.items.map((i) => i.id);
    StoreItemIDsForProject(project.id, JSON.stringify(projectItemIDs));

    // Store todo items in this project
    for (let item in project.items) {
      StoreItem(project.id, item);
    }
  };

  // Arg: projectID (int)
  const GetProject = (projectID) => {
    const projectData = JSON.parse(localStorage.getItem(`project${projectID}`));
    const project = TodoListFromJSON(projectData);

    const projectItemIDs = GetItemIDsForProject(project.id);

    const items = [];
    for (let itemID in projectItemIDs) {
      const item = GetItem(project.id, itemID);
      items.push(item);
    }
    project.items = items;
    return project;
  };

  return {
    StoreProjectIDs,
    GetNextProjectID,
    GetProjectIDs,
    StoreItemIDsForProject,
    GetItemIDsForProject,
    StoreItem,
    DeleteItem,
    StoreProject,
    GetProject,
  };
})();

export { LocalStorageInterface };
