import Card from "./Card"
import {useEffect, useState} from "react" 

function Cards (){
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch("../data/foods.json").then(response => response.json()).then(data => setFoods(data))
      }, [Cards])
    return (
        foods.map(data =>{
            return(
                <Card name={data.name} price={data.price} thumbnail={data.thumb_img} discount={data.sales} percentage={data.discount_percentage} finalPrice={data.final_price}/> 
            )
        })
    
    )
}

export default Cards