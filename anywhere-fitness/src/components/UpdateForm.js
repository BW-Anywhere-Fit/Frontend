import React, { useState } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'




const instructorID = localStorage.getItem("instructorID");
const UpdateForm = props => {
  const detail = props.classData.find(
    findClassDetails => findClassDetails.id === Number(props.match.params.id))
  const [editClass, setEditClass] = useState({
    name: "",
    schedule: "",
    location: "",
    instructor_id: instructorID
    // instructor_id: detail.instructor_id
  });




    console.log("instructor id", detail.instructor_id)

  console.log("editClass",editClass);
  const changeHandler = e => {
    setEditClass({
      ...editClass,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .put(
        `/classes/${detail.id}/update`,
        editClass
      )
      .then(res => {
        console.log(res);
        props.setDepend(!props.depend)
        props.history.push(`/classes`);
      })
      .catch(err => console.log(err));
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
