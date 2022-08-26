import React from 'react'
import { Link } from 'react-router-dom'

export const NavItem = (props) => {
  const {titulo, url} = props
  return (
    <li className="nav-item d-flex">
      <Link className="nav-link" to={url}>{titulo}</Link>
    </li>
  )
}