import React from 'react'
import { Link } from "react-router-dom";
import './CartWidget.css'

export const CartWidget = ({cantidad}) => {
  return (
    <>
      { cantidad > 0 && (
        <Link className="cart-widget position-relative text-light" to={'/cart'}>
          <i className='bi bi-cart3'/>
          <span className="qty-display badge rounded-pill bg-danger">
            {cantidad}
          </span>
      
        </Link>
      )}
    </>
  )
}
