import React, { useRef } from "react";

const UseRefComp = () => {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        focus input
      </button>
    </>
  );
};
export default UseRefComp;
