import React from "react"

fetch('Location.json')
    .then(response => response.json())
    .then(data => data.map((Hayag) => {
        document.getElementById("fetch").innerHTML += `<div>${Hayag.khoroo}</div>`
       

    }))

export default fetch