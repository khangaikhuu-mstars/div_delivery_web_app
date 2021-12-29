import React from "react"

fetch('Location.json')
.then(response => {console.log(response) 
    response.json()})

.then(data => data.map((Hayag) => {
    console.log(data)

}))

export default fetch