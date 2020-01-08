import React from "react";
import ClassCard from "./ClassCard";
import { NavLink } from "react-router-dom";

const ClassList = props => {
  console.log(props.Data)
  return (
    <div>
      {props.Data.map(classItem => (
        <ClassLink  key={classItem.id}  classItem={classItem} />
      ))}

      <p>classList</p>
    </div>
    
  );
  
};

const ClassLink = ({classItem}, props) => {
  console.log("ClassLink",classItem.id)
  const {name, type, location} = classItem;
  return(
    <NavLink to ={`/classes/${classItem.id}`}>
      <ClassCard name={name}  type={type} location={location}/>
    </NavLink>
  );
}

export default ClassList;
