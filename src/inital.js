import pizzaImage from "../pizza.jpg";


let createInitalPage = () => {
    let content = document.querySelector("#content")
    let h1 = document.createElement("h1")
    h1.textContent = "Restaurant Homepage"
    console.log(h1)

    let img = document.createElement("img")
    img.src = pizzaImage
    img.style.height = "300px"
    img.style.width = "auto"

    let p = document.createElement("p")
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste dignissimos ab consequatur, deserunt vitae laudantium, maxime eius corporis, quam similique."

    content.appendChild(h1)
    content.appendChild(img)
    content.appendChild(p)
}
export default createInitalPage