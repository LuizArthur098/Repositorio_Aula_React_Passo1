function App() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#d62828",
            marginBottom: "25px",
          }}
        >
          🍔 Cardápio da Lanchonete
        </h1>

        <div style={{ marginBottom: "15px" }}>
          <h2>🍔 X-Burguer</h2>
          <p>Preço: R$ 18,00</p>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h2>🥗 X-Salada</h2>
          <p>Preço: R$ 20,00</p>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h2>🍟 Batata Frita</h2>
          <p>Preço: R$ 12,00</p>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h2>🥤 Refrigerante</h2>
          <p>Preço: R$ 7,00</p>
        </div>

        <div>
          <h2>🍨 Milk Shake</h2>
          <p>Preço: R$ 15,00</p>
        </div>
      </div>
    </div>
  )
}

export default App