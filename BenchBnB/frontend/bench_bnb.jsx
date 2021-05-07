import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const test = <h1>This is the DOM</h1>;
    ReactDOM.render(test, root);
});