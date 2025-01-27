let createHomeNav = () => {
    let contentDiv = document.querySelector("#content")
    
    let p = document.createElement("p")
    p.textContent = "Opening Hours:"

    let ul = document.createElement("ul")

    let mondayLi = document.createElement("li")
    let tuesdayLi = document.createElement("li")
    let wednesdayLi = document.createElement("li")
    let thursdayLi = document.createElement("li")
    let fridayLi = document.createElement("li")
    let saturdayLi = document.createElement("li")
    let sundayLi = document.createElement("li")

    mondayLi.textContent = "Monday: 5AM - 5PM"
    tuesdayLi.textContent = "Tuesday: 6AM - 5PM"
    wednesdayLi.textContent = "Wednesday: 5AM - 5PM"
    thursdayLi.textContent = "Thursday: 8AM - 5PM"
    fridayLi.textContent = "Friday: 5AM - 5PM"
    saturdayLi.textContent = "Saturday: 5AM - 5PM"
    sundayLi.textContent = "Sunday: 11AM - 5PM"


    contentDiv.appendChild(p)
    contentDiv.appendChild(ul)
    ul.appendChild(mondayLi)
    ul.appendChild(tuesdayLi)
    ul.appendChild(wednesdayLi)
    ul.appendChild(thursdayLi)
    ul.appendChild(fridayLi)
    ul.appendChild(saturdayLi)
    ul.appendChild(sundayLi)


}

export default createHomeNav