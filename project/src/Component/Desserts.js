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
      {desserts.map((data) => {
        return (
          <div className="col-6 col-md-3" id="category-card">
            <Card
              name={data.name}
              price={data.price}
              image={data.thumb_img}
              discount={data.sales}
              percentage={data.discount_percentage}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Desserts;
