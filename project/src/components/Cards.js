import Card from "./Card";
import { useEffect, useState } from "react";
import "../css/card.css";
function Cards() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {foods.map((data) => (
          <div className="col-6 col-md-3">
            <Card
              name={data.name}
              price={data.price}
              image={data.thumb_img}
              discount={data.sales}
              percentage={data.discount_percentage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cards;
