import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import video from "../img/mainBG.mp4"
import { useScrollPercentage } from 'react-scroll-percentage'
import Logo from "../components/logo"
import Form from "../components/contact-form"
import ScrollWrapper from "../components/scrollwrapper"
import {HandleImages} from "../components/handleImages"
import SimpleSlider from "../components/simpleSlider"
import FancySlider from "../components/fancySlider"

let fancySlider =[ <HandleImages name="residencesGal1"/>,<HandleImages name="residencesGal2"/>,<HandleImages name="residencesGal3"/>]
let playaSlider =[ <HandleImages name="playaGal1"/>, <HandleImages name="playaGal2"/> ]
 
let bigSlider =[ <HandleImages name="homeGal1"/>, <HandleImages name="homeGal2"/>, <HandleImages name="homeGal3"/>]
let slideTitles=[<><span>Dos</span><br/><span className='sub'>Recámaras</span></>,<><span>Tres</span><br/><span className='sub'>Recámaras</span></>,<><span>Cuatro</span><br/><span className='sub'>Recámaras</span></>]

 function regresator(e){
   return e
 }

const Hero = (props) => {
    const [ref, percentage] = useScrollPercentage({
      /* Optional options */
      threshold: 0.0,
    })
   
    return (
  
  <div className="hero">
   <div className="logo-wrapper"><Logo/>{props.eng?<h3>ONLY CONDO IN PLAYA MUJERES, CANCUN.</h3>:<h3>ÚNICO CONDOMINIO DENTRO DE PLAYA MUJERES, CANCÚN.</h3>}</div>
    <div className="screen first"></div>
    <div className="screen second" ref={ref} ></div>
    <div className="bg-wrapper" style={{transform:"translateY(min("+ (percentage.toPrecision(2)) * 200+"%,50%))"}} >
      {console.log("!", percentage,regresator(percentage),Math.round(percentage*400)) } 
      <div>
    <HandleImages name="depas"/>
    <video src={video} muted={true} autoPlay={true} playsInline = {true } loop={true} /></div>
    </div>
    {/*
    
    style={{bottom:"max(calc(100vh - 102px - "+ Math.round(percentage*400)+ "vh),-100vh)"}}
    <video src={video} muted={true} autoPlay={true} playsInline = {true } loop={true} style={percentage<.5?{transform:"translateY("+ (percentage.toPrecision(2)) * 200+"%)"}:{transform:"translateY(100%)"}}/>*/}
  </div>
  
  
  
  
  
   
    )
  }


  const Amenidades = (props) => {
 
   
    return (
  
      <ScrollWrapper>
            
      <div>
      <span className="wrapped-header">
     <h2> {props.eng?<>Exclusive <br/>Amenities</>:<>Amenidades <br/>Exclusivas</>}</h2> 
      </span>
    
      <div className="video-wrapper">
      
      <iframe   src="https://www.youtube.com/embed/if0hZ_LxUWA?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <button className="flat-button sand-button centered-button" style={{marginTop:"3em"}}>Ver Mas</button>
      </div>
      </ScrollWrapper>

  
   
    )
  }



  const Residences = (props) => {
  
   
    return (
      <ResWrapper classes="bg-sand fancy">
            
      <div>
   <h3>{props.eng?"Our Residences":"Nuestras Residencias"}</h3>
        <FancySlider slides={fancySlider} titles={slideTitles}/>
      </div>
      </ResWrapper>
     
   
    )
  }



  const PlayaMujeres = (props) => {
  
   
    return (
       
      <ScrollWrapper>
            
      <div>
      <span className="wrapped-header">
      <h2> {props.eng?<>Playa Mujeres<br/><span className="sub">Master Condo</span></>:<>Playa Mujeres<br/><span className="sub">Condominio Maestro</span></>}</h2> 
      </span>
      <div className="col-wrapper">
      <div className="left-col">
      <SimpleSlider slides={playaSlider}/>
      </div>
      <div className="right-col">
          <HandleImages name="logopm"/>
     {props.eng?<p>Texto en Ingles</p> :<p>Exclusiva comunidad turístico residencial cerrada de
      376 hectáreas ubicada al norte de la ciudad de
      
      Cancún, donde el cuidado y el respeto por la natu-
      raleza del entorno hacen de este desarrollo un lugar
      
      mágico que permite la convivencia, privacidad y
      conectividad que tanto deseas.</p>
     } <button className="flat-button sand-button ">{props.eng?"Ver Mas":"See More"}</button>
      </div></div>
      
      </div>
      </ScrollWrapper>
   
    )
  }




  const ResWrapper = (props) => {

    const [ref, percentage] = useScrollPercentage({
    
      threshold: 0,
    })

    if( percentage > .25 && percentage < .75 ){

        
         try{ document.body.parentNode.classList.add('snap')}
         catch{}
    }
    else{
      try{  document.body.parentNode.classList.remove('snap')}
      catch{}
    }
    
    return (<div ref={ref} className={percentage > .35 ? "visible component " + (props.classes ? props.classes : "") : "component " + (props.classes ? props.classes : "")}>
      {
  
      
     }
      {props.children}
    </div>);
  }
  

class IndexPage extends React.Component{  



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

            <Hero/>
            {/*<div className="ejemplos">
              <h1>Lorem Ipsum Dolor Sit Amet</h1>
              <h2>Lorem Ipsum Dolor Sit Amet</h2>
              <h3>Lorem Ipsum Dolor Sit Amet</h3>
              <h4>Lorem Ipsum Dolor Sit Amet</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <button className='outlined-button'>Lorem Ipsum</button>
              <button className="flat-button"> Lorem Ipsum</button>
            </div>*/}
            
          <Amenidades/>
            
   <Residences/>
          
          <PlayaMujeres/>
            
             { /*<ScrollWrapper classes="bg-sand">
            
              <div>
              <span className="wrapped-header">
               <h2>Más que un <br/>Lugar <span className="script">para vivir</span></h2> 
              </span>
            
              <div className="video-wrapper">
              <iframe src="https://player.vimeo.com/video/336812660?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
             
              </div>
              
              </div>
        </ScrollWrapper>*/}

              <ScrollWrapper classes="blurb">
            
            <div>
                <div>
                <span className="wrapped-header">
            <h2><span className="script">Conoce nuestro Proyecto</span><br/><span>Desde 380,000 USD</span></h2></span>
            <button className="outlined-button light">  Hacer Cita</button>
            </div></div>
            </ScrollWrapper>

            <ScrollWrapper >
            
            <div>
            <SimpleSlider slides={bigSlider}/>
            <button className="flat-button sand-button centered-button"  style={{marginTop:"3em"}}>Ver Galeria</button>
           </div>
            </ScrollWrapper>
           
             
            </Layout> )}      



}

export default IndexPage
