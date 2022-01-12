import Card from "../Card";
import { useEffect, useState } from "react";

const Sales = () => {
  const [sale, setSale] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setSale(data));
  }, [Sales]);
  let mainSales = sale.filter((s) => s.sales === true);
  return (
    <div className="row">
      {mainSales.map((data, index) => (
        <div className="col-6 col-md-3">
          <Card
              key={index}
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

export default Sales;
