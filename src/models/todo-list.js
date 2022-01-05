import { TodoItem } from "./todo-item";

const TodoList = (title) => {
  let items = [];
  let _nextItemIndex = 1;
  const addItem = (todoItem) => {
    items.push(todoItem);
  };

  return {
    title,
    items,
    addItem,
  };
};

export { TodoList };
