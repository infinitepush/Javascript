// create a toggle button that changes screen to dark mode when clicked and light mode when clicked again
let modebtn = document.querySelector(".btn");
let currentMode = "light";
let body = document.querySelector("body");
modebtn.addEventListener("click", () => {
    if(currentMode === "light"){
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("white");
    }else{
        currentMode = "light";
        body.classList.add("white");
        body.classList.remove("dark");
    }
    console.log("you are trying to change mode");
    console.log(currentMode);
});