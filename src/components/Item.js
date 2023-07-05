import React from "react";
import "./Item.css";

function Item(props) {
  return (
    <div className="card">
      <img
        src={props.product.image}
        className="card-img-top product_img"
        alt="item"
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">Price: {props.product.price}</p>
        <p className="card-text">Category: {props.product.Category} </p>
        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
        <button
          class="button-1"
          onClick={() => {
            props.addToCart(props.product);
          }}
          role="button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Item;
