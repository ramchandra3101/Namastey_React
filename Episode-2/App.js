import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child1" }, [
    React.createElement(
      "h1",
      { className: "heading" },
      "Hello World from child1"
    ),
    React.createElement(
      "p",
      { className: "content" },
      "This is a first paragraph of a story"
    ),
  ]),
  React.createElement("div", { className: "child2" }, [
    React.createElement(
      "h1",
      { className: "heading" },
      "Hello World from child2"
    ),
    React.createElement(
      "p",
      { className: "content" },
      "This is  second paragraph"
    ),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
