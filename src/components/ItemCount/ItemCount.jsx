import React, { useState } from 'react'

export const ItemCount = (props) => {
    const {stock, initial, onAdd} = props;
    const [counter,setCounter] = useState(initial);

    const addConter = (num) => setCounter(counter + num);

  return (
    <>
        <div class="input-group mb-3">
            <button class="input-group-text btn btn-warning" onClick={() => addConter(-1)} disabled={counter === 0}>-</button>
            <span class="form-control text-center">{counter}</span>
            <button class="input-group-text btn btn-warning" onClick={() => addConter(1)} disabled={counter === stock} >+</button>
        </div>
        <div class="d-grid gap-2 col-12 mx-auto">
            <button className="btn btn-warning" onClick={() => onAdd(counter)} disabled={stock === 0 ? true : null}> Agregar </button>
        </div>
    </>
  )
}