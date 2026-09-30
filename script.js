// setting theme from last session
document.body.classList.add(localStorage.getItem("theme"))

// system os theme change
function DarkMode(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
    else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}

const prop =window.matchMedia("(prefers-color-scheme: dark)");
prop.addEventListener("change",function(){
    DarkMode();
})

// toggle theme change 
const button=document.querySelector("button");
button.addEventListener("click",function(){
    if(document.body.classList.contains("dark")){

        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme","light");
    }
    else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme","dark");
    }
})



// Optimised code 
// const body = document.body;
// const button = document.querySelector("button");
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

// function setTheme(theme) {
//     body.classList.toggle("dark", theme === "dark");
//     body.classList.toggle("light", theme === "light");
// }

// function getSystemTheme() {
//     return systemTheme.matches ? "dark" : "light";
// }

// // Initial theme
// const savedTheme = localStorage.getItem("theme");

// setTheme(savedTheme || getSystemTheme());

// // System OS theme change
// systemTheme.addEventListener("change", () => {
//     if (!localStorage.getItem("theme")) {
//         setTheme(getSystemTheme());
//     }
// });

// // Toggle theme
// button.addEventListener("click", () => {
//     const currentTheme = body.classList.contains("dark")
//         ? "dark"
//         : "light";

//     const newTheme = currentTheme === "dark" ? "light" : "dark";

//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
// });