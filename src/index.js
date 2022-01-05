import { ProjectView } from "./views/projectView";
import { ProjectList } from "./views/projectList";
import TodoApp from "./models/todo-app";
import { TodoItem } from "./models/todo-item";

let app = TodoApp();
app.createProject("House");
const item1 = TodoItem("Title1", "Desc1", new Date(2021, 1, 4), 100);
const item2 = TodoItem("Title2", "Desc2", new Date(2021, 2, 1), 80);
app.currentProject().addItem(item1);
app.currentProject().addItem(item2);

ProjectView(app);
ProjectList(app);
