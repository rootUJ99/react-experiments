import React from "react";
const RenderShit = () => {
  return <h1> holla </h1>;
};
const SomeOtherComponent = props => {
  console.log(props.render);
  const someConst = "hello babua";
  props.render.RenderShit(someConst);
  return <h1>olla</h1>;
};
const RenderProps = () => {
  return <SomeOtherComponent render={someConst => <RenderShit />} />;
};

export default RenderProps;
