export default function ItemCardapio({ nome, preco, onAdd }) {
  return (
    <div className="card">
      <div>
        <h3>{nome}</h3>
        <p>R$ {preco}</p>
      </div>

      <button onClick={onAdd}>
        Adicionar ao pedido
      </button>
    </div>
  );
}