import { TodoItem } from "./todo-item";

const ProjectID = (function () {
  let id = 0;
  return function () {
    return id++;
  };
})();

const TodoList = (title) => {
  let id = ProjectID();
  let items = [];
  let _nextItemIndex = 1;
  const addItem = (todoItem) => {
    todoItem.id = _nextItemIndex;
    ++_nextItemIndex;
    items.push(todoItem);
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
    addItem,
    deleteItem,
  };
};

export { TodoList };
