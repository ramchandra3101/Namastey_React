//  <div>
//   <div id="heading_1">
//     <h1>Hello from react</h1>
//     <h2>This is react Sample heading1</h2>
//   </div>
//   <div id="heading_2">
//     <h1>Hello from react</h1>
//     <h2>This is react Sample heading2</h2>
//   </div>
// </div>
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello from react"),
    React.createElement("h2", {}, "This is react Sample heading1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from react"),
    React.createElement("h2", {}, "This is react Sample heading2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
