import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import { fetchProducts } from "../utils/api";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className="product-list-container">
   
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <strong className="product-name">{product.name}</strong>
            <p className="product-detail">{product.detail}</p>
            {product.hero && <p className="hero-highlight">{product.hero}</p>}
            {product.offer && <p className="offer-highlight">{product.offer}</p>}
            <p className="product-price">R$ {parseFloat(product.price).toFixed(2)}</p>
          </div>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  </div>
);
};

export default ProductList;
