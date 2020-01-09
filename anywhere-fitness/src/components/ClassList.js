import React from "react";
import ClassCard from "./ClassCard";
import { NavLink } from "react-router-dom";

const ClassList = props => {
  console.log(props);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default ClassList;

// const ClassLink = ({ classItem }, props) => {
//   console.log("ClassLink", classItem.id);
//   const { name, type, location } = classItem;
//   return (
//     <NavLink to={`/classes/${classItem.id}`}>
//       <ClassCard name={name} type={type} location={location} />
//     </NavLink>
//   );
// };
