import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <NavLink to='/'>
        <img src='./logopet.jpg'  width='70' height='70'/>
      </NavLink>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to='/'>HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/productos'>PRODUCTOS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/galeria'>GALERIA</NavLink>
          </li>
         
          <li className="nav-item">
            <a className="nav-link disabled">PET SHOP STORE </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    
  )
}

export default navbar