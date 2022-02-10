import React, { useState } from "react";
import "./App.css";

function App() {
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState();

  const modificar = (e) => {
    setNumero1(e.target.value);
  };
  const modificar2 = (e) => {
    setNumero2(e.target.value);
  };

  return (
    <div className="caja">
      <input type="number" value={numero1} onChange={modificar}/>+
      <input type="number" value={numero2} onChange={modificar2}/>=
      <input type="number" value={resultado} readOnly />
      <button onClick={() => setResultado(Number(numero1)+Number(numero2))}>Sumar</button>
    </div>
  );
}

export default App;
