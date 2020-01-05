import React from "react";

class ClassComponents extends React.Component {
  constructor(props) {
    super(props);
    this.renderCount = 0;
    this.mountCount = 0;
    this.updateCount = 0;
    this.state = {
      stateCount: 0
    };
  }

  static getDerivedStateFromProps() {
    console.log("inside of a static method");
  }

  componentDidMount() {
    this.mountCount++;
    console.log("this.mountCount", this.mountCount);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("inside of shouldComponentUpdate");
    console.log(
      "nextState",
      nextState.stateCount,
      "state",
      this.state.stateCount
    );
    if (nextState.stateCount === 1) {
      return false;
    }
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("prevState in snapshotLifeCycle", prevState);
    console.log("inside of snapshot component");
    return "one";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    this.updateCount++;
    console.log("this.updateCount", this.updateCount);
  }

  render() {
    this.renderCount++;
    console.log("this.renderCount", this.renderCount);
    return (
      <button
        onClick={() => {
          this.setState({ stateCount: this.state.stateCount + 1 }, () => {
            console.log("stateCount", this.state.stateCount);
          });
        }}
      >
        renderStuff {this.state.stateCount}
      </button>
    );
  }
}

export default ClassComponents;
