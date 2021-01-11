const button = document.querySelector(".toggle")
const showcase = document.querySelector(".showcase")

button.addEventListener("click", ()=>{
    button.classList.toggle("active")
    showcase.classList.toggle("active")
})