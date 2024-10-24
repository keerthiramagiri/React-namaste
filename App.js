import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement-JS Object =>HTMLElement(render)

const heading = React.createElement("h1", { id: "heading"}, "namaste React");

console.log(heading);

//JSX - HTML- Like or XML- Like syntax - PARCEL- Babel

//JSX => React.createElement =>ReactElement-JS Object =>HTMLElement(render)

const jsxHeading = <h1 id="heading">Namaste React Using JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);