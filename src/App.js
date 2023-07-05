import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/Footer";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products_list from "./pages/Products_list";
import Cart from "./components/Cart";
import Item from "./components/Item";
import My_products from "./MyStore.json";
//let product = [];

function App() {
  const product = My_products;
  const [products, setProducts] = useState([...product]);
  const [load, setLoading] = useState(false);
  const [cartList, setcartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // const fetchData = () => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((items) => {
  //       product = items;
  //       setProducts([...product]);
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const addToCart = (item) => {
    const itemIsFound = cartList.find((product) => item.id === product.id);
    const new_item = {
      id: item.id,
      name: item.name,
      image: item.image,
      amount: 1,
      price: item.price,
    };
    if (itemIsFound) {
      setcartList(
        cartList.map((product) =>
          item.id === product.id
            ? {
                ...itemIsFound,
                amount: itemIsFound.amount + 1,
                price: item.price + product.price,
              }
            : product
        )
      );
    } else {
      setcartList([...cartList, new_item]);
    }
    setTotalPrice(totalPrice + item.price);
    console.log(cartList);
  };

  const removeItemFromCart = (item, porpose) => {
    const itemIsFound = cartList.find((product) => item.id === product.id);
    if (itemIsFound.amount === 1 || porpose === "removeAll") {
      const items = cartList.filter((product) => item.id !== product.id);
      setcartList(items);
      setTotalPrice(totalPrice - itemIsFound.price);
    } else {
      setcartList(
        cartList.map((product) =>
          item.id === product.id
            ? {
                ...itemIsFound,
                amount: itemIsFound.amount - 1,
                price: product.price - item.price,
              }
            : product
        )
      );
      setTotalPrice(totalPrice - item.price);
    }
  };
  return (
    <>
      <Router>
        <NavBar
          cart={cartList}
          addToCart={addToCart}
          removeItemFromCart={removeItemFromCart}
          totalPrice={totalPrice}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="products"
            element={<Products_list prod={products} addToCart={addToCart} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
