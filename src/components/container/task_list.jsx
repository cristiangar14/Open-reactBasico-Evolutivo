import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );


  const changeState = (id) => {
    console.log('TODO: cambiar estado de una tarea');
  }

  return (
    <div>
        <div>
            <h2>Your tasks:</h2>
        </div>
        {/*TODO realizar el loop con la lista de tareas */}
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
