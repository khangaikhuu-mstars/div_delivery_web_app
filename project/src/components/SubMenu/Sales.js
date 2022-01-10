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
      {mainSales.map((data) => (
        <div className="col-6 col-md-3" id="category-card">
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
}

export default Sales;
