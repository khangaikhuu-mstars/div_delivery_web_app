import React from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import queryString from "query-string";

const FoodSearch = () => {
  const { search } = useLocation();
  const foodSearch = queryString.parse(search);
  console.log(foodSearch.q);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("../data/foods.json")
      .then((response) => response.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  let foundFood = foods.filter((j) =>
    j.name.toLowerCase().includes(foodSearch.q)
  );
  let foodFound = false;
  if (foundFood.length > 0) {
    foodFound = true;
  }
  let searchContent = foodFound ? <div className="row">
    {foundFood.map((data, index) => {
      return (
        <div className="col-6 col-md-3">
          <Card
            key={index}
            name={data.name}
            price={data.price}
            image={data.thumb_img}
            discount={data.sales}
            percentage={data.discount_percentage}
          />
        </div>
      );
    })}
  </div> : <div className="d-flex align-items-center justify-content-center flex-column text-center" id="not-found">
    <img className="img-fluid"  src="/food/gif.png" alt="" />
    <p >Уучлаарай, илэрц олдсонгүй...</p>
  </div>


  return <div className="container mb-5">{searchContent}</div>;
};

export default FoodSearch;
