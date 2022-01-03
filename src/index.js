import { ProjectView } from "./views/projectView";
import { ProjectList } from "./views/projectList";
import TodoApp from "./models/todo-app";

let app = TodoApp();
app.createProject("House");

ProjectView(app);
ProjectList(app);
