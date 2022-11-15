const display = document.querySelector("#display");
const button = document.querySelectorAll("button");

button.forEach((item =>{
    item.onclick = () =>{
        if (item.id == "clear") {
            display.innerText = "";

        } else if (item.id == "backspace") {
            let string =  display.innerText.toString();
            display.innerText = string.substr(0, string.length-1); 

        } else if (display.innerText !== "" && item.id == "equal"){
            display.innerText = eval(display.innerText);

        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Null";
            setTimeout(()=> {
                display.innerText = "";
            }, 2000);

        } else {
            display.innerText += item.id;
        }
    }
}))

const togglerCalculator = document.querySelector(".theme_toggler");
const calculator = document.querySelector(".calculator");

let colorDark = true;

togglerCalculator.onclick = ()=>{

    calculator.classList.toggle("dark");
    togglerCalculator.classList.toggle("active");
    colorDark != colorDark;
};