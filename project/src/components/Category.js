import SeeAllButton from "./SeeAllButton";
import Desserts from "./Desserts";
import MainDishMenu from "./MainDishMenu";
import Sales from "./Sales";
import SaladMenu from "./SaladMenuComponent";
import {NavLink } from "react-router-dom";
import React from "react";


function Category() {
  return (
    <div className="container my-5">
      <div className="row align-items-center my-5 ps-4 ps-md-0">
        <div className="col-6 fw-700 py-2" id="category-name">
          Хямдралтай
        </div>
        <div className="col-6 text-end d-lg-none">
           <NavLink to="menu/sales">
          <svg aria-hidden="true" focusable="false" width={10} height={20} data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="#F17228" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
          </NavLink>
          </div>
        <div className="col-6 d-none d-lg-flex justify-content-end" id="category-button"><SeeAllButton value="menu/sales"/></div>
        <Sales />
      </div>
      <div className="row align-items-center my-5 ps-4 ps-md-0">
        <div className="col-6 fw-700 py-2" id="category-name">
          Үндсэн хоол
        </div>
        <div className="col-6 text-end d-lg-none">
           <NavLink to="menu/main">
          <svg aria-hidden="true" focusable="false" width={10} height={20} data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="#F17228" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
          </NavLink>
          </div>
        <div className="col-6 d-none d-lg-flex justify-content-end" id="category-button"><SeeAllButton value="menu/main"/></div>
        <MainDishMenu />
      </div>
      <div className="row align-items-center my-5 ps-4 ps-md-0">
        <div className="col-6 fw-700 py-2" id="category-name">
          Салад ба зууш
        </div>
        <div className="col-6 text-end d-lg-none">
           <NavLink to="menu/salad">
          <svg aria-hidden="true" focusable="false" width={10} height={20} data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="#F17228" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
          </NavLink>
          </div>
        <div className="col-6 d-none d-lg-flex justify-content-end" id="category-button"><SeeAllButton value="menu/salad"/></div>
        <SaladMenu />
      </div>
      <div className="row align-items-center my-5 ps-4 ps-md-0">
        <div className="col-6 fw-700 py-2" id="category-name">
          Амттан
        </div>
        <div className="col-6 text-end d-lg-none">
           <NavLink to="menu/dessert">
          <svg aria-hidden="true" focusable="false" width={10} height={20} data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="#F17228" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
          </NavLink>
          </div>
        <div className="col-6 d-none d-lg-flex justify-content-end" id="category-button"><SeeAllButton value="menu/dessert"/></div>
        <Desserts/>
        
      </div>
    </div>
  );
}

export default Category;
