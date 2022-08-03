import React from 'react'
import { NavItem, CartWidget } from '..'
import logo from '../../../cheers.png'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-uppercase fs-4 " href="/#">
          <img src={logo} alt="" width="30" className="d-inline-block align-text-top me-2" />
          Tienda de Bebidas
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem titulo='Cerveza' url='#' />
            <NavItem titulo='Vino' url='#' />
            <NavItem titulo='Espirituosas' url='#' />
            <NavItem titulo='Whisky' url='#' />
          </ul>
          <div className="d-flex align-items-center">
            <CartWidget cantidad='5' />
          </div>
        </div>
      </div>
    </nav>
  )
}