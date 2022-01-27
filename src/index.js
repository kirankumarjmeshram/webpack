//const mult = require("./calc")
import {add,mult} from "./calc"

import("./index.css")
console.log(mult(7,10))

const h1 = document.createElement("h1");
h1.innerHTML = "Hello Webpack";
h1.classList.add("redtext");

document.getElementById("root").appendChild(h1);