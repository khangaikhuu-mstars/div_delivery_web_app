import React from "react";
import Cards from "../Card";
import { useEffect, useState } from "react";

function Main() {
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setMainMenu(data));
  }, []);
  let menu = mainMenu.filter((m) => m.category === "Үндсэн хоол");
  return (
    <div className="row">
      {menu.map((data, index) => (
        <div className="col-6 col-md-3">
          <Cards
               key={data.index}
               name={data.name}
               price={data.price}
               portion={data.portion}
               stock={data.stock}
               image={data.thumb_img}
               discount={data.sales}
               percentage={data.discount_percentage}
               recipe={data.recipe}
          />
        </div>
      ))}
    </div>
  );
}

export default Main;
