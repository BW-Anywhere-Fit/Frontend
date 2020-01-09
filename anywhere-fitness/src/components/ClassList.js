import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import { NavLink } from "react-router-dom";
import useUser from "../context/useUser";
import {axiosWithAuth} from '../utils/axiosWithAuth'

const ClassList = props => {
console.log(props)

  return (
    <div>
      {props.classData.map(data => {
        return(
           <ClassLink key={data.id} data={data}/>
        )
       
      })}
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


