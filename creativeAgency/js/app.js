const navContainer = document.querySelector(".navigation")
const toggleContainer = document.querySelector(".toggle")

const toggle = () => {
    if(toggleContainer.classList.contains("active")){
        toggleContainer.classList.remove("active")
        navContainer.classList.remove("active")
    } else {
        toggleContainer.classList.add("active")
        navContainer.classList.add("active")
    }
}
toggleContainer.addEventListener("click", toggle)