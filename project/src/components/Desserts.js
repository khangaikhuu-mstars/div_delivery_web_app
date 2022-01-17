import { useState, useEffect } from "react";
import Card from "./Card";

function Desserts() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  let desserts = foods.filter((p) => p.category === "Амттан").slice(0, 4);

  return (
    <div className="row">
      {desserts.map((data, index) => {
        return (
          <div className="col-6 col-md-3" id="category-card">
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
        );
      })}
    </div>
  );
}

export default Desserts;
