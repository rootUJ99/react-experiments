import React, { useContext, createContext } from "react";

// const GrandParent = () => {
//   return <Parent data="the secret of family" />;
// };
// const Parent = props => {
//   return <Child data={props.data} />;
// };
// const Child = props => {
//   return <GrandChild dtaa={props.data} />;
// };
// const GrandChild = props => {
//   return <h1>spoils {props.data}</h1>;
// };

// -------------------------------------
const DataContext = createContext("");
const GrandParent = () => {
  return (
    <DataContext.Provider value="the secret of family">
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
  const data = useContext(DataContext);
  return <h1>{data}</h1>;
};

export default GrandParent;
