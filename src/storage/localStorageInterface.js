import { TodoItem } from "../models/todo-item";
const LocalStorageInterface = (() => {
  // Arg: projectIDs - Array<int>
  const StoreProjectIDs = (projectIDs) => {
    localStorage.setItem("projectIDs", JSON.stringify(projectIDs));
  };

  const GetProjectIDs = () => {
    return JSON.parse(localStorage.getItem("projectIDs"));
  };

  // Arg: projectID (int) - ID for project
  // Arg: itemIDs (Array<int>) - Array of item IDs for project
  const StoreItemIDsForProject = (projectID, itemIDs) => {
    localStorage.setItem(`project${projectID}ItemIDs`, JSON.stringify(itemIDs));
  };

  const GetItemIDsForProject = (projectID) => {
    return JSON.parse(localStorage.getItem(`project${projectID}ItemIDs`));
  };

  // Arg: projectID (int) - project ID
  // Arg: todoItem (TodoItem) - TodoItem object
  const StoreItem = (projectID, todoItem) => {
    localStorage.setItem(
      `project${projectID}Item${todoItem.id}`,
      JSON.stringify(todoItem)
    );
  };

  // TODO - add function to retrieve todo item

  const DeleteItem = (projectID, itemID) => {
    localStorage.removeItem(`project${projectID}Item${itemID}`);
  };

  return {
    StoreProjectIDs,
    GetProjectIDs,
    StoreItemIDsForProject,
    GetItemIDsForProject,
    StoreItem,
    DeleteItem,
  };
})();

export { LocalStorageInterface };
