import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Axios from "axios";
import { Link } from "react-router-dom";
// import ClassCard from './ClassCard';
const ClassDetails = props => {
  console.log(props);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const detail = props.classData.find(
      findClassDetails => findClassDetails.id === Number(props.match.params.id)
    );
    if (detail) {
      setDetails(detail);
    } else {
      return props.history.push(`/classes/`);
    }
  }, [details]);

  const deleteClass = () => {
    axiosWithAuth()
      .delete(`/classes/${props.match.params.id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));

    props.setDepend(!props.depend);
    props.history.push("/classes");
  };

  return (
    <div>
      <h2>"ClassDetails"</h2>
      <h1>{details.name}</h1>
      <ul>
        <li>{details.schedule}</li>
        <li>{details.location}</li>
      </ul>
      <Link to={`/update-form/${details.id}`}> EDIT </Link>
      <Button type="submit" onClick={deleteClass}>
        Delete
      </Button>
    </div>
  );
};

export default ClassDetails;
