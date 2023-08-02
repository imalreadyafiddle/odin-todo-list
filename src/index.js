import _ from "lodash";
import "./style.css";
import { createHeader } from "./createHeader";
import { printTasks } from "./printTasks";
import { printProjects } from "./printProjects";
import { taskCloseButton } from "./taskCloseButton";

createHeader();
printTasks(1);
printProjects();
taskCloseButton();
