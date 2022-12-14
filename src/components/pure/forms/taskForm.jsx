import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";

const TaskForm = ({ add }) => {
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
          id="inputDescriptio"
          placeholder="Task description"
          className="form-control form-control-lg"
          required
        />
        <label htmlFor="selectLevel" className="sr-only">
          Priority
        </label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      </div>
      <button className="btn btn-success btn-lg ms-2" type="submit">
        Add
      </button>
    </form>
  );
};

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
