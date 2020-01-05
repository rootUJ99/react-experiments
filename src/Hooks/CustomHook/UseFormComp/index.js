import React from "react";
import useForm from "./useForm";
const initialValue = {
  email: "uj99arak@gmail.com",
  password: "some"
};
const UseFormComp = props => {
  const customSubmit = (value, e) => {
    console.log(value, e.target);
  };
  const [value, onChange, onSubmit] = useForm(initialValue, customSubmit);
  return (
    <>
      <h1> Form </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          value={value.email}
          onChange={onChange}
        />
        <input
          type="text"
          name="password"
          value={value.password}
          onChange={onChange}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default UseFormComp;
