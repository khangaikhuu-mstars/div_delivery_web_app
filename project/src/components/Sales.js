import Card from "./Card";
import { useEffect, useState } from "react";
import "../css/card.css";

function Sales() {
  const [sale, setSale] = useState([]);
  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => setSale(data));
  }, [Sales]);
  let mainSales = sale.filter((s) => s.sales === true).slice(0, 4);
  return (
    <div className="row">
      {mainSales.map((data, index) => (
        <div className="col-6 col-md-3" id="category-card">
          <Card
            key={index}
            name={data.name}
            price={data.price}
            portion={data.portion}
            stock={data.stock}
            image={data.thumb_img}
            discount={data.sales}
            percentage={data.discount_percentage}
            finalPrice={data.final_price}
            recipe={data.recipe}
          />
        </div>
      ))}
    </div>
  );
}

export default Sales;
