import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () => (
  <>
    <div className="demo-routes">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact?email=vy.doan@mango.dqtri.com&age=0">Contract + Params</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/product/1">Product + Path variable 1</NavLink>
          </li>
          <li>
            <NavLink to="/product/2">Product + Path variable 2</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

const _ANav = () => (
  <>
    <div className="demo-a-routes">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact?email=vy.doan@mango.dqtri.com&age=0">Contract + Params</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/product/1">Product details + Path variable 1</a>
          </li>
          <li>
            <a href="/product/2">Product details + Path variable 2</a>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default Nav
