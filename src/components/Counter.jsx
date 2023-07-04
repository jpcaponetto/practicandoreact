import React, { useState } from 'react'





const Counter = () => {

const [numero, setNumero] = useState(0);

const sumar = () => {
    setNumero(numero + 1);
}

const restar = () => {
    setNumero(numero - 1);
}

  return (
    <div>
        <button onClick={restar}>Restar </button>
        <h2>{numero}</h2>
        <button onClick={sumar}>Sumar </button>
    </div>
  )
}

export default Counter
