import React from 'react'
 

import Layout from '../components/Layout'
 
import { useScrollPercentage } from 'react-scroll-percentage'
import Logo from "../components/logo"
import Form from "../components/contact-form"
import ScrollWrapper from "../components/scrollwrapper"
import {HandleImages} from "../components/handleImages"
import SimpleSlider from "../components/simpleSlider"
import FancySlider from "../components/fancySlider"

 
 
 


  const Header = (props) => {
  
   
    return (
        <ScrollWrapper>
            
        <div className="full">

    <div >
    <span className="header-amenidades">
  <h1><span>NUESTRAS</span><br/><span className="script">amenidades</span></h1></span>
 
        
    <HandleImages name="playa"/>
    </div>
    <div><p>{props.eng?"english":"espanol"}</p></div>
        </div>
        </ScrollWrapper>
     
   
    )
  }



  const TwoCol = (props) => {
  
   
    return (
   
        <ScrollWrapper>

<div className="col-wrapper amenidades">
      <div className="left-col">

          <div className="logo">   <Logo /></div>
      <div className="bg">  <HandleImages name="tenis"/></div>
        
          </div>

 <div className="right-col">
 <div className="logo"> <HandleImages name="logopm"/></div>
     <div className="bg">
 <HandleImages name="bicis"/></div>
          </div>
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
  <h2><span>250 METROS DE </span><br/><span className="script">frente a Playa</span><br/><span>Y MAS AMENIDADES DE LUJO TE ESPERAN</span></h2></span>
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