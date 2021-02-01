import React from 'react'
 

import Layout from '../components/Layout'
 
import { useScrollPercentage } from 'react-scroll-percentage'
import Logo from "../components/logo"
import Form from "../components/contact-form"
import ScrollWrapper from "../components/scrollwrapper"
import {HandleImages} from "../components/handleImages"
import SimpleSlider from "../components/simpleSlider"
import FancySlider from "../components/fancySlider"

import { Link } from 'gatsby'
 
 
 


  const Header = (props) => {
  
   
    return (
        <ScrollWrapper>
            
        <div className="full">

    <div >
    <span className="header-amenidades">
    {props.eng==true?<h1><span style={{fontSize:"1.5em",fontWeight:"200",letterSpacing:".1em"}}>MEET OUR</span><br/><span  style={{marginLeft:"1.5em"}}className="script">experiences </span></h1>:<h1><span style={{fontSize:"1.5em",fontWeight:"200",letterSpacing:".1em"}}>NUESTRAS</span><br/><span  style={{marginLeft:"1.5em"}}className="script">amenidades</span></h1>}</span>

        
    <HandleImages name="playa"/>
    </div>

    <div className="component">
    <div className="centered">{props.eng==true?
    
    <><p>Surrounded by white sands, tropical rainforest, archeological sites, lagoons, mangroves, and turquoise waters, and only 10 minutes away from downtown Cancun, lies Playa Mujeres, an exclusive tourist destination in the Mexican Caribbean that hosts more than 8,200 hotel rooms and luxurious residences, which makes it the region that boasts the greatest growth in the state.</p><p>Its amenities offer unique resort experiences that will transform each one of your days into unforgettable moments that will last forever.</p></>


    :<><p>Entre arena blanca, selva tropical, zonas arqueológicas, laguna, manglar, mar turquesa y a 10 minutos del centro de Cancún, surge Playa Mujeres, exclusivo destino turístico en la zona del Caribe Mexicano que alberga más de 8,200 cuartos en lujosos centros de hospedaje, lo cual lo convierte en el lugar de mayor crecimiento del estado.</p><p>Las amenidades que lo componen ofrecen experiencias únicas de un resort, que te esperan para hacer cada uno de tus días momentos memorables que perdurarán por siempre.</p></>}</div></div>
        </div>
        </ScrollWrapper>
     
   
    )
  }



  const TwoCol = (props) => {
  
   
    return (
   
        <ScrollWrapper>

<div className="col-wrapper amenidades">
<Link to="/amenidades/la-amada" className="left-col" >  

          <div className="logo">   
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
	 viewBox="0 0 330.6 76.4" enable-background="new 0 0 330.6 76.4" >
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
          
          </div>
      <div className="bg">  <HandleImages name="amenidadesA10"/></div>
        
         </Link>

          <Link to="/amenidades/playa" className="right-col" >   
 <div className="logo"> <HandleImages name="logopmb"/></div>
     <div className="bg">
 <HandleImages name="bicis"/></div>
         </Link>
            </div>
            </ScrollWrapper>
 
   
    )
  }



  const Blurb = (props) => {
  
   
    return (
   
  <ScrollWrapper classes="blurb amenidades">
            
  <div>
      <div>
      <span className="wrapped-header">

  
      {props.eng==true? <h2><span  >820 ft. of</span><br/><span className="script">Beachfront  </span><br/><span >and more experiences are waiting for you</span></h2>:  <h2><span  >250 METROS DE </span><br/><span className="script">frente a Playa</span><br/><span >Y MAS AMENIDADES DE LUJO TE ESPERAN.</span></h2>}
  
  
  
  </span>
  <a href="#form"> <button className="outlined-button light"> {props.eng ?"Make an Appointment":"Hacer Cita"}</button></a>
  </div></div>
  </ScrollWrapper>

     
   
    )
  }

  const Video = (props) => {
 
   
    return (
  
      <ScrollWrapper>
            
      <div>
     
    
      <div className="video-wrapper">
      
      <iframe   src="https://www.youtube.com/embed/if0hZ_LxUWA?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
       </div>
      </ScrollWrapper>

  
   
    )
  }

 

class Amenidades extends React.Component{  



    constructor(props) {
      super(props)
      this.state = {
        trailerLightbox: false,
        calendlyLightbox: false,
      }
    
    
    
    }  


    render(){

        return (
        
           <Layout>
<Header/>
<TwoCol/>
<Blurb/>

             
            </Layout> )}      



}

export default Amenidades