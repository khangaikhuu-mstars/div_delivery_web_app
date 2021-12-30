import Card from "./Card"
import {useEffect, useState} from "react" 

function Cards (){
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch("../public").then(response => console.log(response.json()))
      }, [Cards])
    return (
    <Card name={foods.name} price={foods.price} /> 
    )
}

export default Cards