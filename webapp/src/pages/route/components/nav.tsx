import React from "react"
import { Link } from "react-router-dom"

const Nav = () => (
  <>
    <div className="demo">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contract</Link>
          </li>
          <li>
            <Link to="/contact?email=vy.doan@mango.dqtri.com&age=0">Contract Mango</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/product/1">Product1</Link>
          </li>
          <li>
            <Link to="/product/2">Product2</Link>
          </li>
          <li>
            <Link to="/next">Next</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

const _Nav = () => (
  <>
    <div className="demo">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contract</a>
          </li>
          <li>
            <a href="/contact?email=vy.doan@mango.dqtri.com&age=0">Contract Mango</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default Nav
