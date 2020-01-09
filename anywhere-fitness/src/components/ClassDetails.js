import React from "react";
// import ClassCard from './ClassCard';
const ClassDetails = props => {
  const details = props.classData.find(
    findClassDetails =>
      findClassDetails.id === Number(props.match.params.id)
  );

  return (
    <div>
      <h2>"ClassDetails"</h2>
      <h1>{details.name}</h1>
      <ul>
        <li>{details.schedule}</li>
        <li>{details.location}</li>
      </ul>
    </div>
  );
};

export default ClassDetails;
