import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card";

const Salad = () => {
    const [mainMenu, setMainMenu] = useState([])
    useEffect(() => {
        fetch("../data/foods.json")
            .then((response) => response.json())
            .then((data) => setMainMenu(data));
    }, []);
    let menu = mainMenu.filter((m) => m.category === "Салад ба зууш")
    return (
            <div className="row">
                {menu.map((data) => (
                    <div className="col-6 col-md-3" id="category-card">
                        <Card
                            name={data.name}
                            price={data.price}
                            portion={data.portion}
                            stock={data.stock}
                            recipe={data.recipe}
                            image={data.thumb_img}
                            category={data.category}
                        />  
                    </div>
                ))}
        </div>
    )
}

export default Salad;