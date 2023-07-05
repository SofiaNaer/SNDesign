import React, { useState, useEffect } from "react";
import "./Cart.css";

function Cart(props) {
  // const handlePrice = () =>{
  //   let ans = 0;
  //   props.list.map((item)  => (ans += item.amount *item.price));
  //   setPrice(ans);
  // }
  // useEffect(()=>{
  //   handlePrice();
  // })

  return (
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Cart</h5>

        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        {props.list.length === 0 ? (
          <div> Cart is Empty</div>
        ) : (
          props.list.map((item) =>
            Show_Items(item, props.addToCart, props.removeItemFromCart)
          )
        )}
        {props.list.length === 0 ? (
          <div></div>
        ) : (
          <div className="total-wrapper">
            <div className="total-title">Total</div>
            <div>{props.totalPrice}$</div>
            <button className="btn btn-primary">Payment</button>
          </div>
        )}
      </div>
    </div>
  );
}
function Show_Items(item, addToCart, removeItemFromCart) {
  return (
    <div className="CartItem-container">
      <img className="CartItem-Img" src={item.image} alt={item.name} />
      <div className="CartItem-name"> {item.name}</div>
      <div className="CartItem-price"> {item.price}</div>
      <div className="amount-container">
        <button
          className="Plus-Minus-btn btn"
          onClick={() => {
            const new_item = {
              id: item.id,
              name: item.name,
              image: item.image,
              amount: 1,
              price: item.price / item.amount,
            };
            removeItemFromCart(new_item, "minus");
          }}
        >
          <i class="fa-solid fa-minus"></i>
        </button>
        {item.amount}
        <button
          className="Plus-Minus-btn btn"
          onClick={() => {
            const new_item = {
              id: item.id,
              name: item.name,
              image: item.image,
              amount: 1,
              price: item.price / item.amount,
            };
            addToCart(new_item);
          }}
        >
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <button
        className="Remove_All"
        onClick={() => {
          removeItemFromCart(item, "removeAll");
        }}
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default Cart;
