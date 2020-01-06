import React from "react";
import ClassCard from "./ClassCard";

const ClassList = props => {
  return (
    <div>
      {props.classes.map(classItem => (
        <ClassCard name={classItem.name} />
      ))}
    </div>
  );
};
export default ClassList;
