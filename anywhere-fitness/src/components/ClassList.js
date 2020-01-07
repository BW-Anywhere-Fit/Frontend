import React from "react";
import ClassCard from "./ClassCard";
import { NavLink } from "react-router-dom";

const ClassList = props => {
  console.log(props.Data)
  return (
    <div>
      {props.Data.map(classItem => (
        <MovieLink  key={classItem.id}  classItem={classItem} />
      ))}
    </div>
    
  );
  
};

const MovieLink = ({classItem}, props) => {
  console.log("movielink",classItem.id)
  const {name, type, location} = classItem;
  return(
    <NavLink to ={`/classes/${classItem.id}`}>
      <ClassCard name={name}  type={type} location={location}/>
    </NavLink>
  );
}

export default ClassList;
