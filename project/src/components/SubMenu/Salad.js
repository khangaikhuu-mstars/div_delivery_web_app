import React from "react";
import { useEffect, useState } from "react";
import Card from "../Card";

const Salad = () => {
  const [mainMenu, setMainMenu] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setMainMenu(data));
  }, []);
  let menu = mainMenu.filter((m) => m.category === "Салад ба зууш");
  return (
    <div className="row">
      {menu.map((data, index) => (
        <div className="col-6 col-md-3">
          <Card
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
};

export default Salad;
