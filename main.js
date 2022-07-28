const value = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

const btn_desc = document.querySelector(".btn-one")
btn_desc.addEventListener("click", () => {
    let current_value = value.textContent;
    value.textContent = --current_value;
    setColor();
})
const btn_reset = document.querySelector(".btn-two")
btn_reset.addEventListener("click", () => {
    value.textContent = 0;
    setColor();
})
const btn_inc = document.querySelector(".btn-three")
btn_inc.addEventListener("click", () => {
    let current_value = value.textContent;
    value.textContent = ++current_value;
    setColor();
})

const setColor = () => {
    if(value.textContent>0){
        value.style.color= "green"
    }else if(value.textContent<0){
        value.style.color= "red";
    }else{
        value.style.color = "black";
    }
}