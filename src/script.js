import "./style.css";
import createInitalPage from "./inital.js";
import createHomeNav from "./home.js"
import createMenuNav from "./menu.js"
import createAboutNav from "./about.js"


createInitalPage()


let clearContentDiv = () => {
    let contentDiv = document.querySelector("#content")
    while(contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild)
    }
}

let homeBtn = document.querySelector("#home-btn")
let menuBtn = document.querySelector("#menu-btn")
let aboutBtn = document.querySelector("#about-btn")

homeBtn.addEventListener("click",() => {clearContentDiv(),createHomeNav()})
menuBtn.addEventListener("click",() => {clearContentDiv(),createMenuNav()})
aboutBtn.addEventListener("click",() => {clearContentDiv(),createAboutNav()})

