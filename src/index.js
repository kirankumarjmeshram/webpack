//const mult = require("./calc")
import {add,mult} from "./calc"
import("./index.css");

import React from "react";
import ReactDOM from "react-dom";

console.log(mult(7,10))

// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello Webpack";
// h1.classList.add("redtext");
// document.getElementById("root").appendChild(h1);

ReactDOM.render(
    React.cloneElement("h1",{className:"greencolor"},"Hello React") //(element,object(or key-value pair),another object or plane text)
)