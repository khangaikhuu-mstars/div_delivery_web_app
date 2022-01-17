import React from "react";
import { useEffect, useState } from "react";
import Cards from "./Card";
function SaladMenu() {
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setMainMenu(data));
  }, []);
  let menu = mainMenu.filter((m) => m.category === "Салад ба зууш").slice(0, 4);
  return (
    <div className="row">
      {menu.map((data, index) => (
        <div className="col-6 col-md-3" id="category-card">
          <Cards
            key={index}
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
  );
}
export default SaladMenu;
