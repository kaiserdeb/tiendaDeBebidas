import React from 'react'
import './CartWidget.css'

export const CartWidget = (props) => {
  const {cantidad} = props;
  return (
    <div className="cart-widget position-relative text-light">
      <i className='bi bi-cart3'/>
      <span className="qty-display badge rounded-pill bg-danger">
        {cantidad}
      </span>

    </div>
  )
}
