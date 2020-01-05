import React, { useState } from "react";

const useForm = (initialValue, customSubmit) => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    setValue({ [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    customSubmit(value, e);
    console.log(value);
  };

  return [value, onChange, onSubmit];
};

export default useForm;
