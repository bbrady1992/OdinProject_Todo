import { TodoItem } from "./todo-item";
import { LocalStorageInterface } from "../storage/localStorageInterface";

const TodoList = (title) => {
  let id = LocalStorageInterface.GetNextProjectID();
  let items = [];
  let _nextItemIndex = 1;
  const addItem = (todoItem) => {
    console.log("Adding item");
    console.log({ todoItem });
    todoItem.id = _nextItemIndex;
    ++_nextItemIndex;
    items.push(todoItem);
    LocalStorageInterface.StoreItem(id, todoItem);
  };

  const deleteItem = (todoItemID) => {
    console.log(`Deleting item with ID ${todoItemID}`);
    for (let i = 0; i < items.length; ++i) {
      if (items[i].id == todoItemID) {
        items.splice(i, 1);
        break;
      }
    }
    console.log(`List ${title} now has items:`);
    console.log({ items });
  };

  console.log(`Created project ${title} with ID ${id}`);
  return {
    id,
    title,
    items,
    _nextItemIndex,
    addItem,
    deleteItem,
  };
};

const TodoListFromJSON = (jsonObject) => {
  let todoList = TodoList(jsonObject.title);
  todoList.id = jsonObject.id;
  todoList._nextItemIndex = jsonObject._nextItemIndex;
};

export { TodoList, TodoListFromJSON };
