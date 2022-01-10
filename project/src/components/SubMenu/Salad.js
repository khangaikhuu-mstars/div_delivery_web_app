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
      {menu.map((data) => (
        <div className="col-6 col-md-3">
          <Card
            name={data.name}
            price={data.price}
            image={data.thumb_img}
            discount={data.sales}
            percentage={data.discount_percentage}
            finalPrice={data.final_price}
          />
        </div>
      ))}
    </div>
  );
};

export default Salad;
