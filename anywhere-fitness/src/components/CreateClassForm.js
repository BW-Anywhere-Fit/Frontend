import React from "react";
import { TextField, Button } from "@material-ui/core";

const CreateClassForm = props => {
  console.log(props);
  const [classText, setClassText] = React.useState({
    name: "",
    schedule: "",
    location: "",
    id: ""
  });

  const handleChange = e => {
    setClassText({
      ...classText,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      Welcome
      <form onSubmit={handleSubmit} className="">
        <label />
        <TextField
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={classText.name}
        />
        <label />
        <TextField
          placeholder="location"
          type="text"
          onChange={handleChange}
          value={classText.location}
        />
        <label />
        <TextField
          placeholder="schedule"
          onChange={handleChange}
          value={classText.schedule}
        />
        <label />
        <TextField
          placeholder="i"
          onChange={handleChange}
          value={classText.id}
        />
        <Button type="submit"> add Class</Button>
      </form>
    </>
  );
};

export default CreateClassForm;
