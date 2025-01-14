const API_URL = "http://localhost:3001/api";

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  return await response.json();
};
