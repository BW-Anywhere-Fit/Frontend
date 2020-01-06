import React, { useState } from "react";

const InstructorForm = () => {
  const [newClass, setNewClass] = useState({
    name: "",
    type: "",
    startTime: "",
    duration: "",
    level: "",
    location: "",
    registeredAttendees: 0,
    maxClassSize: ""
  });

  const handleChange = e => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="text"
        name="type"
        onChange={handleChange}
        placeholder="type"
      />
      <input
        type="text"
        name="startTime"
        onChange={handleChange}
        placeholder="start time"
      />
      <input
        type="text"
        name="duration"
        onChange={handleChange}
        placeholder="duration"
      />
      <input
        type="text"
        name="level"
        onChange={handleChange}
        placeholder="level"
      />
      <input
        type="text"
        name="location"
        onChange={handleChange}
        placeholder="location"
      />
      <input
        type="text"
        name="maxClassSize"
        onChange={handleChange}
        placeholder="max class size"
      />
      <button type="submit">ADD CLASS</button>
    </form>
  );
};

export default InstructorForm;
