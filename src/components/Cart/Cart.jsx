import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartProvider';
import { CartItem } from '../index';

export const Cart = () => {
  const { carrito, removeItem, clear, addItem } = useContext(CartContext);
  return (
    <>
      <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            {carrito.length > 0 && (
              <div className="col-10 animate__animated animate__fadeIn">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">Carrito</h3>
                  <button className="pointer btn btn-danger my-5 fs-5 text-center" onClick={clear}> Limpiar</button>
                </div>

                {carrito.map((item,index) => (
                  <CartItem key={index} item={item} onRemove={removeItem} onAdd={addItem} />
                ))}

                <div className="card">
                  <div className="card-body">
                    <button type="button" className="btn btn-warning btn-block w-100 text-uppercase">Finalizar Compra</button>
                  </div>
                </div>

              </div>
            )}
            {carrito.length < 1 && (
              <div className="container full-height d-flex align-items-center justify-content-center animate__animated animate__fadeIn">
                <div className="w-50">
                  <h3 className="text-center text-uppercase">
                    el carrito esta vacio
                  </h3>

                  <div className="my-5 d-flex">
                    <Link to="/" className="btn btn-warning w-100 text-uppercase">
                      volver a comprar
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

    </>
  )
}