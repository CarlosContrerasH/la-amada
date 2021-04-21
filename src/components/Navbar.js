import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/LOGO-LA-AMADA.svg'

import pin from "../img/location-pin.svg"
import Logo from "./logo"
const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      eng:this.props.eng,
      toggle:true,
     
    }
  }

componentDidMount(){
 
  if(window.location.pathname=='/blog'){
this.setState({toggle:false})
  }
  else{
    this.setState({toggle:true})
  }
}

  render() {
    return (
      <nav

      >

        <div className="first">
          <span>More than a place to live!</span>
          <div>
          <Link to="/ubicacion"> <svg x="0px" y="0px" viewBox="0 0 27.6 40.1" >


              <g>
                <path   d="M13.8,40.1c-0.9,0-1.7-0.5-2.1-1.2c0,0,0,0,0,0L1.7,20.7c-2.4-4.3-2.3-9.5,0.2-13.8C4.3,2.7,8.7,0.1,13.5,0
		c0.2,0,0.4,0,0.6,0c4.8,0.1,9.1,2.7,11.6,6.9c2.5,4.3,2.6,9.5,0.2,13.8l-9.9,18.2c0,0,0,0,0,0C15.5,39.7,14.7,40.1,13.8,40.1
		L13.8,40.1z M13.8,2.5c-0.1,0-0.2,0-0.3,0C9.6,2.6,6.1,4.7,4.1,8.1C2,11.7,2,15.9,3.9,19.5l9.9,18l9.9-18c2-3.6,1.9-7.8-0.2-11.3
		c-2-3.4-5.5-5.5-9.4-5.6C14,2.5,13.9,2.5,13.8,2.5L13.8,2.5z"/>
                <path   d="M13.8,18.2c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S16.9,18.2,13.8,18.2z M13.8,9.4
		c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S15.5,9.4,13.8,9.4z"/>
              </g>
            </svg></Link> 
            <a href="#form">  <button className="outlined-button ">  {this.props.eng ?"Make an Appointment":"Hacer Cita"}</button></a></div>
        </div>
        <div className="nav">
          <button className='for-mobile' onClick={(event)=>{event.target.parentNode.classList.toggle('open')}}>≡</button>
          <div >
            <Link to="/" className="navbar-item" title="Logo">
           
           
     
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
	 viewBox="0 0 330.6 76.4" enableBackground="new 0 0 330.6 76.4" >
<g>
	<polygon fill="#DDD3CA" points="20.8,19 17.3,19 17.3,56.2 43.9,56.2 43.9,52.6 20.8,52.6 	"/>
	<polygon fill="#DDD3CA" points="59.5,56.2 67.2,56.2 63.4,47.4 	"/>
	<polygon fill="#DDD3CA" points="63.4,19 63.4,18.9 63.3,19 61.5,19 45.4,56.2 49.3,56.2 63.4,23.9 77.4,56.2 81.3,56.2 65.2,19 	
		"/>
	<polygon fill="#DDD3CA" points="119.5,56.2 127.1,56.2 123.3,47.4 	"/>
	<polygon fill="#DDD3CA" points="123.3,19 123.3,18.9 123.2,19 121.4,19 105.3,56.2 109.2,56.2 123.3,23.9 137.3,56.2 141.2,56.2 
		125.1,19 	"/>
	<path fill="#DDD3CA" d="M165.4,39.4L150,19h-3.2v37.2h3.6V25.5l12.7,16.9l-4,5.4v3.1h12.5v-3.1l-4-5.4l12.7-16.9v30.7h3.6V19h-3.2
		L165.4,39.4z M164,47.2l1.4-1.8l1.4,1.8H164z"/>
	<polygon fill="#DDD3CA" points="203.6,56.2 211.3,56.2 207.5,47.4 	"/>
	<polygon fill="#DDD3CA" points="207.5,19 207.5,18.9 207.4,19 205.6,19 189.5,56.2 193.4,56.2 207.5,23.9 221.5,56.2 225.4,56.2 
		209.3,19 	"/>
	<path fill="#DDD3CA" d="M244.6,19h-13.6v37.2h13.6c10.3,0,18.6-8.3,18.6-18.6S254.9,19,244.6,19z M234.6,22.6h10
		c8.3,0,15,6.7,15,15c0,8.3-6.7,15-15,15h-10V22.6z"/>
	<polygon fill="#DDD3CA" points="279.3,56.2 286.9,56.2 283.1,47.4 	"/>
	<polygon fill="#DDD3CA" points="284.9,19 283.1,19 283.1,18.9 283,19 281.2,19 265.1,56.2 269,56.2 283.1,23.9 297.1,56.2 
		301,56.2 	"/>
</g>
</svg>



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
           <li>   <Link to="/amenidades">{this.props.eng ?"Amenities":"AMENIDADES"} </Link></li>
             <li> <Link to="/residencias">{this.props.eng ?"Residences ":"RESIDENCIAS"} </Link></li>
             <li> <Link to="/ubicacion">{this.props.eng ?"Location":"UBICACIÓN"} </Link></li>
             <li> <Link to="/galeria">{this.props.eng ?"GALLERY":"GALERIA"} </Link></li>
             <li> <Link to="/conocenos">{this.props.eng ?"Our Team":"Conócenos"} </Link></li>
             <li> <Link to="/invierte"> {this.props.eng ?"Investment":"inversión"} </Link></li>
             <li> <Link to="/blog"> EDITORIAL </Link></li>

              <li>

              <label>
          
       {this.state.toggle&&   <select value={this.props.eng ?"Eng":"Esp"} onChange={(event)=>{
           if( event.target.value!==this.props.eng){this.props.langToggle()}
            }}>
            <option value="Eng">Eng</option>
            <option value="Esp">Esp</option>
            
          </select>}
        </label>
              </li>

            </ul>

          </div>
          <div className="for-mobile">
          <Link to="/ubicacion">    <svg x="0px" y="0px" viewBox="0 0 27.6 40.1" >


              <g>
                <path   d="M13.8,40.1c-0.9,0-1.7-0.5-2.1-1.2c0,0,0,0,0,0L1.7,20.7c-2.4-4.3-2.3-9.5,0.2-13.8C4.3,2.7,8.7,0.1,13.5,0
		c0.2,0,0.4,0,0.6,0c4.8,0.1,9.1,2.7,11.6,6.9c2.5,4.3,2.6,9.5,0.2,13.8l-9.9,18.2c0,0,0,0,0,0C15.5,39.7,14.7,40.1,13.8,40.1
		L13.8,40.1z M13.8,2.5c-0.1,0-0.2,0-0.3,0C9.6,2.6,6.1,4.7,4.1,8.1C2,11.7,2,15.9,3.9,19.5l9.9,18l9.9-18c2-3.6,1.9-7.8-0.2-11.3
		c-2-3.4-5.5-5.5-9.4-5.6C14,2.5,13.9,2.5,13.8,2.5L13.8,2.5z"/>
                <path   d="M13.8,18.2c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S16.9,18.2,13.8,18.2z M13.8,9.4
		c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S15.5,9.4,13.8,9.4z"/>
              </g>
            </svg></Link>
           <a href="#form"> <button className="outlined-button light"> {this.props.eng ?"Make an Appointment":"Hacer Cita"}</button></a></div>
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