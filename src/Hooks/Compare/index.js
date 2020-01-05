import React, { useLayoutEffect, useEffect } from "react";
const Compare = () => {
  useEffect(() => {
    console.log("in useeffect");
  }, []);
  useLayoutEffect(() => {
    console.log("in uselayeffect");
  }, []);
  return <h1>holla</h1>;
};
export default Compare;
