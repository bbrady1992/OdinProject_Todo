import { ProjectView } from "./views/projectView";
import { ProjectList } from "./views/projectList";
import TodoApp from "./models/todo-app";
import { TodoItem } from "./models/todo-item";
import { SetTextForElement } from "./views/utils";

let app = TodoApp();

ProjectList(app);

ProjectView.renderProject(app.getProjectByID(0));
