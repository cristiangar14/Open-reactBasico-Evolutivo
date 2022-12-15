import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";

const TaskForm = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();

    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );

    add(newTask);
  }


  return (
    <form onSubmit={addTask} className="task-form mb-4">
      <div className="form-outline flex-fill">
        <input
          type="text"
          ref={nameRef}
          id="inputName"
          className="form-control form-control-lg"
          placeholder="Task name"
          required
          autoFocus
        />
        <input
          type="text"
          ref={descriptionRef}
          id="inputDescription"
          placeholder="Task description"
          className="form-control form-control-lg"
          required
        />
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} className="form-control form-control-lg" id="selectLevel">
          <option className="text-primary" value={LEVELS.NORMAL}>Normal</option>
          <option className="text-warning" value={LEVELS.URGENT}>Urgent</option>
          <option className="text-danger" value={LEVELS.BLOCKING}>Blocking</option>
        </select>
        <button className="btn btn-success btn-lg ms-2" type="submit">
          {length ? 'Add New Task' : 'Create Your First Task'}
        </button>
      </div>
    </form>
  );
};

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
};

export default TaskForm;
