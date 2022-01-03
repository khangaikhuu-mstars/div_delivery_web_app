import React from "react";
import Cards  from "./Cards"
import { useEffect, useState } from "react";


function SaladMenu() {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
      fetch("../data/foods.json")
        .then((response) => response.json())
        .then((data) => setFoods(data));
    }, [SaladMenu]);
  
    return (
      <div className="container my-5">
        <div className="row">
            <div className="col-6 col-md-3">
              <Cards/>
            </div>
        </div>
      </div>
    );
  }
    

export default SaladMenu;