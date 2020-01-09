import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import { NavLink } from "react-router-dom";
import useUser from "../context/useUser";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import CreateClassForm from "./CreateClassForm";

const ClassList = props => {
  console.log(props);
  const instructor = localStorage.getItem("instructor");

  const addClass = classText => {
    axiosWithAuth()
      .post("/classes", classText)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      {instructor ? (
        <CreateClassForm props={props} addClass={addClass} />
      ) : (
        "Welcome"
      )}
      <div>
        {props.classData.map(data => {
          return <ClassLink key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

const ClassLink = ({ data }) => {
  const { name, type, location } = data;
  return (
    <NavLink to={`/classes/${data.id}`}>
      <ClassCard name={name} type={type} location={location} />
    </NavLink>
  );
};

export default ClassList;
