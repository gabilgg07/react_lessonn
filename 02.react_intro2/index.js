// ReactDOM.render(
//   React.createElement(
//     "h1",
//     { title: "header lesson" },
//     React.createElement("span", null, "React Lesson")
//   ),
//   document.querySelector("#test")
// );

// yuxaridaki kimi cetin oldugu ucun,
// JSX-den istifade edirik:

const Element = () => (
  <h1 title="header lesson">
    <p>
      <span>React Lesson</span>
    </p>
  </h1>
);

ReactDOM.render(<Element />, document.querySelector("#test"));
