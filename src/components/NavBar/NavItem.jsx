import React from 'react'

const NavItem = (props) => {
  const {titulo, url} = props
  return (
    <li className="nav-item d-flex">
      <a className="nav-link" href={url}>{titulo}</a>
    </li>
  )
}

export default NavItem