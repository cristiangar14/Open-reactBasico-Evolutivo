import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

import '../../styles/task.scss'

const TaskListComponent = () => {
  
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
    );
    
  // Estado del componente
  const [tasks, setTasks] = useState(defaultTask);
  const [loading, setLoading] = useState(true);
  // control del ciclo de vida

  useEffect(() => {
    console.log('Tasks state has been modified');
    setLoading(false);
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
            <h1>Your tasks:</h1>
        </div>
        {/*TODO realizar el loop con la lista de tareas */}
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
