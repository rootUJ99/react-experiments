import React, { useContext, createContext, useReducer } from "react";

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
const DataContext = createContext("");

const GrandParent = () => {
  const reducerArr = useReducer(reducer, initState);
  return (
    <DataContext.Provider value={reducerArr}>
      <Parent />
    </DataContext.Provider>
  );
};
const Parent = props => {
  return <Child />;
};
const Child = props => {
  return <GrandChild />;
};
const GrandChild = props => {
  const [state, dispatch] = useContext(DataContext);

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: "detergent", data: state.detergent + 1 })
        }
      >
        ghj
      </button>
      <button onClick={() => dispatch({ type: "soap", data: state.soap + 1 })}>
        ghj2
      </button>
      {JSON.stringify(state)}
    </>
  );
};

export default GrandParent;
