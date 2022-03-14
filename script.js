var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

console.log(css);
console.log(color1);
console.log(color2);
console.log(body);

//change background red
//body.style.background="red"

function setGradient() {

    //console.log(color1.value)
    //background: linear-gradient(to right, red , yellow);
    body.style.background = 
    "linear-gradient(to right, "
     + color1.value 
     + ", " 
     + color2.value 
     +")";

     css.textContent = body.style.background + ";" + "CSS = " + css.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);