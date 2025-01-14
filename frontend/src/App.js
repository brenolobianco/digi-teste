import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import reportWebVitals from './reportWebVitals';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minha Loja</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
