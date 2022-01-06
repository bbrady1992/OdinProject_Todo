import { ProjectView2 } from "./views/projectView";
import { ProjectList } from "./views/projectList";
import TodoApp from "./models/todo-app";
import { TodoItem } from "./models/todo-item";
import { SetTextForElement } from "./views/utils";

let app = TodoApp();
app.createProject("House");
const item1 = TodoItem("Title1", "Desc1", new Date(2021, 1, 4), 5);
const item2 = TodoItem("Title2", "Desc2", new Date(2021, 2, 1), 3);
app.currentProject().addItem(item1);
app.currentProject().addItem(item2);

app.setCurrentProject(1);
const item3 = TodoItem("Title3", "Desc3", new Date(2022, 1, 9), 4);
app.getProjectByID(1).addItem(item3);

ProjectList(app);

ProjectView2.renderProject(app.getProjectByID(0));
