import React from "react";
// import ClassCard from './ClassCard';
const ClassDetails = props => {
  console.log("classdetails props.data", props);
  const details = props.Data.find(
    findClassDetails =>
      findClassDetails.id === Number(props.computedMatch.params.id)
  );
  console.log("details");
  return (
    <div>
      <h2>"ClassDetails"</h2>
      <h1>{details.name}</h1>
      <ul>
        <li>{details.type}</li>
        <li>{details.startTime}</li>
        <li>{details.duration}</li>
        <li>{details.level}</li>
        <li>{details.location}</li>
      </ul>
    </div>
  );
};

export default ClassDetails;
