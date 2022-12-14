import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example1",
    "Default description1",
    true,
    LEVELS.BLOCKING
  );

  const defaultTask2 = new Task(
    "Example2",
    "Default description2",
    false,
    LEVELS.NORMAL
  );

  const defaultTask3 = new Task(
    "Example3",
    "Default description3",
    false,
    LEVELS.URGENT
  );

  // Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);
  // control del ciclo de vida

  useEffect(() => {
    console.log("Tasks state has been modified");
    setLoading(false);
    return () => {
      console.log("Tasklist component is going to unmount...");
    };
  }, [tasks]);

  function completedTask(task) {
    console.log("complete task", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    /**
     * We update the state of the component with the new list of tasks and it will update the
     * iteration of thas tasks in order to show the task updated
     */

    setTasks(tempTasks);
  }

  function deleteTask(task) {
    console.log("delete task", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task) {
    console.log("add task", task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Task List</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ pisition: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent
                      key={index}
                      task={task}
                      complete={completedTask}
                      remove={deleteTask}
                    ></TaskComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TaskForm add={addTask}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
