import React, { useEffect, useState } from "react";
import Cards from "./Card";
function MainDishMenu() {
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setMainMenu(data));
  }, []);
  let menu = mainMenu.filter((m) => m.category === "Үндсэн хоол").slice(0, 4);
  return (
    <div className="row">
      {menu.map((data) => (
        <div className="col-6 col-md-3" id="category-card">
          <Cards
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
export default MainDishMenu;
