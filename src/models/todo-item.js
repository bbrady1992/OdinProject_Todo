const TodoItem = (title, description, dueDate, priority) => {
  let completed = false;
  const setCompleted = (isComplete) => {
    completed = isComplete;
  };
  return {
    title,
    description,
    dueDate,
    priority,
    completed,
  };
};

export { TodoItem };
