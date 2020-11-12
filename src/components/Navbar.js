import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import pin from "../img/location-pin.svg"
import Logo from "./logo"
const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      language:this.props.eng?"Eng":"Esp"
    }
  }



  render() {
    return (
      <nav

      >

        <div className="first">
          <span>More than a place to live!</span>
          <div>
            <svg x="0px" y="0px" viewBox="0 0 27.6 40.1" >


              <g>
                <path class="st0" d="M13.8,40.1c-0.9,0-1.7-0.5-2.1-1.2c0,0,0,0,0,0L1.7,20.7c-2.4-4.3-2.3-9.5,0.2-13.8C4.3,2.7,8.7,0.1,13.5,0
		c0.2,0,0.4,0,0.6,0c4.8,0.1,9.1,2.7,11.6,6.9c2.5,4.3,2.6,9.5,0.2,13.8l-9.9,18.2c0,0,0,0,0,0C15.5,39.7,14.7,40.1,13.8,40.1
		L13.8,40.1z M13.8,2.5c-0.1,0-0.2,0-0.3,0C9.6,2.6,6.1,4.7,4.1,8.1C2,11.7,2,15.9,3.9,19.5l9.9,18l9.9-18c2-3.6,1.9-7.8-0.2-11.3
		c-2-3.4-5.5-5.5-9.4-5.6C14,2.5,13.9,2.5,13.8,2.5L13.8,2.5z"/>
                <path class="st0" d="M13.8,18.2c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S16.9,18.2,13.8,18.2z M13.8,9.4
		c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S15.5,9.4,13.8,9.4z"/>
              </g>
            </svg>
            <button className="outlined-button ">  Hacer Cita</button></div>
        </div>
        <div className="nav">
          <button className='for-mobile' onClick={(event)=>{event.target.parentNode.classList.toggle('open')}}>≡</button>
          <div >
            <Link to="/" className="navbar-item" title="Logo">
              <Logo />
            </Link>

          </div>
          <div >
            <ul>
             { /*<li>
                <Link className="navbar-item" to="/about">
                  About
              </Link> </li>
              <li>
                <Link className="navbar-item" to="/products">
                  Products
              </Link></li>
              <li>  <Link className="navbar-item" to="/blog">
                Blog
              </Link></li>
              <li> <Link className="navbar-item" to="/contact">
                Contact
              </Link></li>
              <li> <Link className="navbar-item" to="/contact/examples">
                Form Examples
             </Link></li>*/}
             <li>AMENIDADES</li>
             <li>RESIDENCIAS</li>
             <li>UBICAION</li>
             <li>GALERIA</li>
             <li>CONOCENOS</li>
             <li>INVIERTE</li>
             <li>BLOG</li>

              <li>

              <label>
          
          <select value={this.props.eng?"Eng":"Esp"} onChange={()=>this.props.langToggle()}>
            <option value="Eng">Eng</option>
            <option value="Esp">Esp</option>
            
          </select>
        </label>
              </li>

            </ul>

          </div>
          <div className="for-mobile">
            <svg x="0px" y="0px" viewBox="0 0 27.6 40.1" >


              <g>
                <path class="st0" d="M13.8,40.1c-0.9,0-1.7-0.5-2.1-1.2c0,0,0,0,0,0L1.7,20.7c-2.4-4.3-2.3-9.5,0.2-13.8C4.3,2.7,8.7,0.1,13.5,0
		c0.2,0,0.4,0,0.6,0c4.8,0.1,9.1,2.7,11.6,6.9c2.5,4.3,2.6,9.5,0.2,13.8l-9.9,18.2c0,0,0,0,0,0C15.5,39.7,14.7,40.1,13.8,40.1
		L13.8,40.1z M13.8,2.5c-0.1,0-0.2,0-0.3,0C9.6,2.6,6.1,4.7,4.1,8.1C2,11.7,2,15.9,3.9,19.5l9.9,18l9.9-18c2-3.6,1.9-7.8-0.2-11.3
		c-2-3.4-5.5-5.5-9.4-5.6C14,2.5,13.9,2.5,13.8,2.5L13.8,2.5z"/>
                <path class="st0" d="M13.8,18.2c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S16.9,18.2,13.8,18.2z M13.8,9.4
		c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S15.5,9.4,13.8,9.4z"/>
              </g>
            </svg>
            <button className="outlined-button light">  Hacer Cita</button></div>
        </div>
      </nav>
    )
  }
}

export default Navbar


/*
 <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/