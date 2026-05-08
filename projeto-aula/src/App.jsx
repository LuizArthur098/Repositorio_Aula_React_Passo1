import { useState } from "react";
import ItemCardapio from "./ItemCardapio";
import "./App.css";

export default function App() {
  const [total, setTotal] = useState(0);

  function adicionarItem() {
    setTotal(total + 1);
  }

  return (
    <div className="container">
      <h1>🍔 Cardápio da Lanchonete</h1>

      <h2>Total de itens no pedido: {total}</h2>

      <ItemCardapio nome="X-Burguer" preco="12,00" onAdd={adicionarItem} />
      <ItemCardapio nome="X-Salada" preco="14,00" onAdd={adicionarItem} />
      <ItemCardapio nome="Hot Dog" preco="8,00" onAdd={adicionarItem} />
      <ItemCardapio nome="Batata Frita" preco="10,00" onAdd={adicionarItem} />
      <ItemCardapio nome="Refrigerante" preco="5,00" onAdd={adicionarItem} />
    </div>
  );
}