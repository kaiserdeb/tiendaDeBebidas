import React, { useState } from 'react'

export const ItemCount = (props) => {
    const {stock, initial, onAdd} = props;
    const [counter,setCounter] = useState(initial);

    const addConter = (num) => setCounter(counter + num);

  return (
    <>
        <div className="input-group mb-3">
            <button className="input-group-text btn btn-warning" onClick={() => addConter(-1)} disabled={counter === 0}>-</button>
            <span className="form-control text-center">{counter}</span>
            <button className="input-group-text btn btn-warning" onClick={() => addConter(1)} disabled={counter === stock} >+</button>
        </div>
        <div className="d-grid gap-2 col-12 mx-auto">
            <button className="btn btn-warning" onClick={() => onAdd(counter)} disabled={stock === 0 || counter === 0}> Agregar </button>
        </div>
    </>
  )
}