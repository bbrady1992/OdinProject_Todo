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

export { TodoItem };
