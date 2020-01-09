import React from "react";
import { TextField, Button } from "@material-ui/core";

const CreateClassForm = props => {
  console.log(props);

  const instructorID = localStorage.getItem("instructorID");
  const [classText, setClassText] = React.useState({
    name: "",
    schedule: "",
    location: "",
    instructor_id: instructorID
  });

  const handleChange = e => {
    setClassText({
      ...classText,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addClass(classText);
  };

  return (
    <>
      Welcome
      <form onSubmit={handleSubmit} className="">
        <label />
        <TextField
          required
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={classText.name}
        />
        <label />
        <TextField
          required
          placeholder="schedule"
          name="schedule"
          type="text"
          onChange={handleChange}
          value={classText.schedule}
        />
        <label />
        <TextField
          required
          type="text"
          name="location"
          placeholder="location"
          onChange={handleChange}
          value={classText.location}
        />

        <Button type="submit">ADD CLASS</Button>
      </form>
    </>
  );
};

export default CreateClassForm;
