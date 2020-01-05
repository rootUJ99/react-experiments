import React from "react";
import ReactDOM from "react-dom";
// import RenderProps from "./RenderProps"
import ClassComponents from "./ClassComponents";
import styled from "styled-components";
import DisplayComp from "./Hooks";
import "./styles.css";

const StyledWrapper = styled.div`
  height: 3rem;
  width: 100%;
  border: 3px solid black;
`;

function App() {
  //   let options = {
  //   root: document.querySelector('#scrollArea'),
  //   rootMargin: '0px',
  //   threshold: 1.0
  // }
  //   const observer = new IntersectionObserver(()=>{
  //   (entries, observer) => {
  //   entries.forEach(entry => {
  //   });
  // };
  // }, options);
  //   let target = document.querySelector('#listItem');
  //     console.log(observer.observe(target));

  return (
    <div id="App">
      {/* <RenderProps/> */}
      {/* <ClassComponents /> */}
      <DisplayComp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
