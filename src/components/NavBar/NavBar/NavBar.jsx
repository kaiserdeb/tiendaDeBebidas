import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavItem, CartWidget } from '..'
import logo from '../../../cheers.png'
import { CartContext } from '../../../contexts/CartProvider';

export const NavBar = () => {
  const { carrito } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-uppercase fs-4 " to="/">
          <img src={logo} alt="" width="30" className="d-inline-block align-text-top me-2" />
          Tienda de Bebidas
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem titulo='Cerveza' url='/category/Cerveza' />
            <NavItem titulo='Vino' url='/category/Vino' />
            <NavItem titulo='Espirituosas' url='/category/Espirituosa' />
            <NavItem titulo='Whisky' url='/category/Whisky' />
          </ul>
          <div className="d-flex align-items-center">
            <CartWidget cantidad={carrito.reduce((c,e)=> c += e.qty, 0 )} />
          </div>
        </div>
      </div>
    </nav>
  )
}