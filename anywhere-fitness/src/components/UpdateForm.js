import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialItem = {
  name: "",
  schedule: "",
  location: "",
  instructor_id: 17
};

const UpdateForm = props => {
  const [editClass, setEditClass] = useState(initialItem);

  const detail = props.classData.find(
    findClassDetails => findClassDetails.id === Number(props.match.params.id)
  );

  console.log("editClass", editClass);
  const changeHandler = e => {
    setEditClass({
      ...editClass,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .put(`/classes/${detail.id}/update`, editClass)
      .then(res => {
        console.log(res);
        props.history.push(`/classes`);
      })
      .catch(err => console.log(err));
    props.setDepend(!props.depends);
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="name"
          value={editClass.name}
        />
        <div />

        <input
          type="text"
          name="schedule"
          onChange={changeHandler}
          placeholder="schedule"
          value={editClass.schedule}
        />
        <div />

        <input
          type="text"
          name="location"
          onChange={changeHandler}
          placeholder="location"
          value={editClass.location}
        />
        <div />

        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
