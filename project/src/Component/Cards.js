import Card from "./Card";
import { useEffect, useState } from "react";

function Cards() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setFoods(data));
  }, [Cards]);

  return (
    <div className="container">
      <div className="row">
        {foods.map((data) => (
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
    </div>
  );
}

export default Cards;
