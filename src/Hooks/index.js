import React from "react";
import UseStateComp from "./UseStateComp";
import UseEffectComp from "./UseEffectComp";
import UseReducerComp from "./UseReducerComp";
import UseContextComp from "./UseContextComp";
import UseRefComp from "./UseRefComp";
import ContextReducer from "./ContextReducer";
import UseMemoComp from "./UseMemoComp";
import UseCallbackComp from "./UseCallbackComp";
import Compare from "./Compare";
import UseFetchComp from "./CustomHook/UseFetchComp";
import UseFormComp from "./CustomHook/UseFormComp";
const Display = () => {
  return (
    <>
      <UseStateComp />
      <UseReducerComp />
      <UseContextComp />
      <UseRefComp />
      <ContextReducer />
      <UseMemoComp />
      <UseCallbackComp />
      <Compare />
      <UseEffectComp />
      <UseFetchComp />
      <UseFormComp />
    </>
  );
};

export default Display;
