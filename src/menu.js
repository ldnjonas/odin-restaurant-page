let createMenuNav = () => {
    let contentDiv = document.querySelector("#content")
    
    let p = document.createElement("p")
    p.textContent = "Menu:"

    let drinks = document.createElement("ul")
    let food = document.createElement("ul")

    let salad = document.createElement("li")
    let taco = document.createElement("li")

    let cola = document.createElement("li")
    let sprite = document.createElement("li")
    

    salad.textContent = "Salad"
    taco.textContent = "Taco"

    cola.textContent = "Cola"
    sprite.textContent = "Sprite"
   


    contentDiv.appendChild(p)
    contentDiv.appendChild(food)
    contentDiv.appendChild(drinks)
    
    food.appendChild(salad)
    food.appendChild(taco)

    drinks.appendChild(cola)
    drinks.appendChild(sprite)

}

export default createMenuNav 