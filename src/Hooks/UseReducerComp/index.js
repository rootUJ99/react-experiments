import React, { useReducer } from "react";
const initState = { soap: 0, detergent: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "soap":
      return {
        ...state,
        soap: action.data
      };
    case "detergent":
      return {
        ...state,
        detergent: action.data
      };
    default:
      return new Error();
  }
};
const UseReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "soap", data: state.soap + 1 })}>
        increment soap
      </button>
      {state.soap}
      <button
        onClick={() =>
          dispatch({ type: "detergent", data: state.detergent + 1 })
        }
      >
        increment detergent
      </button>
      {state.detergent}
    </div>
  );
};

export default UseReducerComp;
