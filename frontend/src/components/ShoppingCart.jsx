import React, { useState } from "react";
import "../styles/ShoppingCart.css";

const ShoppingCart = ({ cart = [], addToCart, removeFromCart, clearCart }) => {
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="shopping-cart-container">
      <h2>Resumo da Compra</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.name} className="cart-item">
              <div className="item-details">
                <img src={item.image} alt="imagem" />
                <strong>{item.name}</strong>

                <p>
                  R$ {parseFloat(item.price).toFixed(2)} x {item.quantity}
                </p>
              </div>

              <div className="item-actions">
                <button onClick={() => addToCart(item)}>+</button>

                <button onClick={() => removeFromCart(item.name)}>-</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <p>
          <span>Sub-total</span>
          <span>R$ {calculateTotal()}</span>
        </p>

        <div className="cart-total">
          <span>Total</span>: R$ {calculateTotal()}
        </div>
      </div>
      <div className="cart-actions">
        <button className="clear-cart-btn" onClick={clearCart}>
          Limpar Carrinho
        </button>
        <button className="finalize-btn">FINALIZAR COMPRA</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
