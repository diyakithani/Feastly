import React from "react";
import ReactDOM from "react-dom/client";

const h = React.createElement("h1", { className: "title" }, "heading");
const root = React.createElement("div", { className: "root" }, <h></h>);
root.render();
