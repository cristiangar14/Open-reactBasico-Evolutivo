import React, { useState, useEffect } from "react";
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
    
  // Estado del componente
  const [tasks, setTasks] = useState(defaultTask);

  // control del ciclo de vida

  useEffect(() => {
    console.log('Tasks state has been modified');
    return () => {
      console.log('Tasklist component is going to unmount...');
    };
  }, [tasks]);

  const changeCompleted = (id) => {
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
