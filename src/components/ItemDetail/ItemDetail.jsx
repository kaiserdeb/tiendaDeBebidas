import React, { useState, useContext } from 'react'
import {ItemCount} from '../'
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartProvider';

export const ItemDetail = ({ item }) => {
    const { id, title, price, stock, pictureUrl } = item;
    const [counter,setCounter] = useState(0);
    const { addItem, isInCart } = useContext(CartContext);
    const onAdd = (qty) => {
      setCounter(qty);
      addItem(item,qty)
    };
  

  return (
    <>
    <div className="container-fluid animate__animated animate__fadeIn">
      <div className="row mt-4 ">
        <div className="col col-12 col-xl-6">
          <img src={pictureUrl} alt={title} className="figure-img img-fluid rounded" />
        </div>
        <div className="col col-12 col-xl-6">
          <h2 className="my-4">{title}</h2>
          <p style={{fontSize: '10pt'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis at ducimus repudiandae exercitationem mollitia eius facilis distinctio atque. Aut rem nesciunt nisi mollitia ducimus saepe quasi recusandae natus repudiandae praesentium!</p>
          <div className='row row-cols-2'>
            <div className="text-dark col text-start">Precio:</div>
            <div className="text-muted col text-end mb-3">${price}</div>
            <div className="text-dark col text-start">Stock:</div>
            <div className="text-muted col text-end">{stock}</div>
            { counter > 0 || isInCart(id)? 
              (
              <>
                <Link className="btn btn-warning w-100 my-3" to="/cart">Ir al carrito</Link>
                <Link className="btn btn-warning w-100 my-3" to="/">Seguir Comprando</Link>
              </>
              ) : 
              <ItemCount stock={stock} initial={0} onAdd={onAdd}/> 
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}