import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



function AppNavbar() {
  const products = useSelector(state=>state.cart);


  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light  border border-5">
        <div class="container-fluid">
          
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              
              <NavLink className="nav-link fs-3 active" to="/">Home</NavLink>
              <NavLink className="nav-link fs-3 active" to="/cart">Cart</NavLink>
              

            </div>
          </div>
          <span >Cart Total: { products.length }</span>
        </div>
        
      </nav>
  )
}

export default AppNavbar
