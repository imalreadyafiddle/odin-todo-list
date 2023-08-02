import _ from "lodash";
import "./style.css";
import { createHeader } from "./createHeader";
import { printTasks } from "./printTasks";
import { printProjects } from "./printProjects";

createHeader();
printTasks(1);
printProjects();
