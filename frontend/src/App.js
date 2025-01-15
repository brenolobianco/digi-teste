import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import "./styles/ProductList.css";
import "./styles/ShoppingCart.css";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.name === product.name);

      if (isProductInCart) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const clearCart = () => {
    setCart([]);
  };

  return (<>
    <Header />
    <div className="app-container">

      <div className="product-list-section">
        <ProductList addToCart={addToCart} />
      </div>
      <div className="shopping-cart-section">
        <ShoppingCart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
      </div>
    </div>
  </>
  );
};

export default App;
