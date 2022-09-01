import React, { useState } from 'react'
import {ItemCount} from '../'
import { Link } from "react-router-dom";

export const ItemDetail = (props) => {
    const { title, price, stock, pictureUrl } = props;
    const [counter,setCounter] = useState(0);

    const onAdd = (qty) => {
      setCounter(qty);
    };
  

  return (
    <>
    <div className="container-fluid">
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
            { counter > 0 ? 
              <Link className="btn btn-warning w-100 my-3" to="/cart">Ir al carrito</Link> : 
              <ItemCount stock={stock} initial={0} onAdd={onAdd}/> 
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}