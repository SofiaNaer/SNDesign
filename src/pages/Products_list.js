import React from "react";
import Item from "../components/Item";
import "../App.css";


function Products_list(props) {

  return (
    <div className="list-container">
      <div className="list">
        {props.prod.map((product) => (
          <Item product={product} addToCart = {props.addToCart}  />
        ))}
      </div>
    </div>
  );
}
export default Products_list;
