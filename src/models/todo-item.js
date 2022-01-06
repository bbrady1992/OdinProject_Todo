const TodoItem = (title, description, dueDate, priority) => {
  let completed = false;
  let id = null;

  return {
    id,
    title,
    description,
    dueDate,
    priority,
    completed,
  };
};

const TodoItemFromJSON = (jsonObject) => {
  let item = TodoItem(
    jsonObject.title,
    jsonObject.description,
    jsonObject.dueDate,
    jsonObject.priority
  );
  item.completed = jsonObject.completed;
  item.id = jsonObject.id;
  return item;
};

export { TodoItem, TodoItemFromJSON };
