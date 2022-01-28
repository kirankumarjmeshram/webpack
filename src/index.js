
import image from "./img/notepad-plus-plus.png";
import("./index.css");

let root = document.getElementById("root");
let navbar = document.createElement("div");
navbar.id = "navbar";

let logo_pic = document.createElement("img");
logo_pic.src = image;

let app_name = document.createElement("h3");
app_name.innerText = "note book";

navbar.append(logo_pic,app_name);

let div = document.createElement("div");
let div1 = document.createElement("div");
let notes = document.createElement("p");
notes.id="notes";

div1.append(notes);
div.append(div1);

let div2 = document.createElement("div");
let textArea = document.createElement("textarea");
textArea.id ="inputText";

div2.append(textArea);
div.append(div2);

root.append(navbar,div);

let outputText = document.getElementById("notes");
outputText.innerText="Enter notes";

let inputText = document.getElementById("inputText");

textArea.addEventListener("input",copyNotes);

function copyNotes(){
        outputText.innerText=inputText.value;
    
}











