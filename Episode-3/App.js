import React from "react";
import ReactDOM from "react-dom";

const ReactElement = <h1>This is react Element</h1>;

const ReactComponent1 = () => {
  return (
    <div className="react_component1">
      <h1 id="heading1">This is return type of react component</h1>
    </div>
  );
};
const ReactComponent2 = () => (
  <div className="react_component2">
    {ReactElement}
    <ReactComponent1 />
    <h1 id="heading2">This is not a return type of react component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent2 />);
