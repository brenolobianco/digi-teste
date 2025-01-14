import React, { useEffect, useState } from "react";
import "../styles/ProductList.css"
import { fetchProducts } from "../utils/api";

const ProductList = () => {
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

  return (
    <div className="product-list-container">
      <h1>Lista de Produtos</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <strong>{product.name}</strong>
            <p className="detail">{product.detail}</p>
            <p className="info">{product.info}</p>
            <p className="price">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
