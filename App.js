import React from "react";
import ReactDOM from "react-dom";

// Create a React element
const h = React.createElement("h1", { className: "title" }, "heading");

// Get the root DOM node
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(h);
