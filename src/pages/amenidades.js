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
  <h1><span style={{fontSize:"1.5em",fontWeight:"200",letterSpacing:".1em"}}>NUESTRAS</span><br/><span  style={{marginLeft:"1.5em"}}className="script">amenidades</span></h1></span>
 
        
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

          <div className="logo">   <Logo /></div>
      <div className="bg">  <HandleImages name="tenis"/></div>
        
         </Link>

          <Link to="/amenidades/playa" className="right-col" >   
 <div className="logo"> <HandleImages name="logopm"/></div>
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
  <h2><span  >250 METROS DE </span><br/><span className="script">frente a Playa</span><br/><span >Y MAS AMENIDADES DE LUJO TE ESPERAN.</span></h2></span>
  <button className="outlined-button light">  Hacer Cita</button>
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
<Video/>
             
            </Layout> )}      



}

export default Amenidades