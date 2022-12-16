import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Task } from "../../../models/task.class";
import { LEVELS } from "../../../models/levels.enum";

const initialValues = {
  name: "",
  description: "",
  completed: false,
  level: LEVELS.NORMAL,
};

const taskSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name Task too short ")
    .max(12, "Name Task too long")
    .required("Name Task is required"),
  description: Yup.string().required("Description task is required"),
  level: Yup.string()
    .oneOf(
      [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
      "You mast select a level task: Normal / Urgent / Blocking"
    )
    .required("Level task is required"),
});

const TaskFormik = ({ add, length }) => {
  function addTask(task) {
    const newTask = new Task(task.name, task.description, false, task.level);

    add(newTask);
  }

  return (
    <div>
      <Formik
        className="task-form mb-4"
        initialValues={initialValues}
        // **** Yup Validation Schema
        validationSchema={taskSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          addTask(values);
          console.log(values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form className="form-outline flex-fill">
            <Field
              id="name"
              name="name"
              placeholder="Task name"
              className="form-control form-control-lg"
              type="text"
            />
            {errors.name && touched.name && (
              <ErrorMessage component="div" name="name" />
            )}
            <Field
              id="description"
              name="description"
              placeholder="Task description"
              className="form-control form-control-lg"
              type="text"
            />
            {errors.description && touched.description && (
              <ErrorMessage component="div" name="description" />
            )}
            <Field
              component="select"
              id="level"
              name="level"
              className="form-control form-control-lg"
            >
              <option className="text-primary" value={LEVELS.NORMAL}>
                Normal
              </option>
              <option className="text-warning" value={LEVELS.URGENT}>
                Urgent
              </option>
              <option className="text-danger" value={LEVELS.BLOCKING}>
                Blocking
              </option>
            </Field>
            {errors.level && touched.level && (
              <ErrorMessage component="div" name="level" />
            )}

            <button type="submit">
              {length ? "Add New Task" : "Create Your First Task"}
            </button>
            {isSubmitting ? <p>Saving task</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

TaskFormik.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default TaskFormik;
