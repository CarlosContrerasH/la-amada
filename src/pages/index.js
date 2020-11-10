import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import video from "../img/mainBG.mp4"
import { useScrollPercentage } from 'react-scroll-percentage'

import Form from "../components/contact-form"
import ScrollWrapper from "../components/scrollwrapper"
import {HandleImages} from "../components/handleImages"
import SimpleSlider from "../components/simpleSlider"
import FancySlider from "../components/fancySlider"

let playaSlider =[ <HandleImages name="playaGal1"/>, <HandleImages name="playaGal2"/> ]
 
let bigSlider =[ <HandleImages name="homeGal1"/>, <HandleImages name="homeGal2"/>, <HandleImages name="homeGal3"/>]
let slideTitles=[<span>Tres <br/><span className='sub'>Recámaras</span></span>,"Cuatro Recámaras","Dos Recámaras"]

const Hero = () => {
    const [ref, percentage] = useScrollPercentage({
      /* Optional options */
      threshold: 0.0,
    })
   
    return (
  
  <div className="hero" >
   
    <div className="screen first"><span>aqui va la costa</span></div>
    <div className="screen second" ref={ref}><span>aqui va el depa</span></div>
    <video src={video} muted={true} autoPlay={true} playsInline = {true } loop={true} style={percentage<.5?{transform:"translateY("+ (percentage.toPrecision(2)) * 200+"%)"}:{transform:"translateY(100%)"}}/>
  </div>
  
  
  
  
  
   
    )
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
            
            <ScrollWrapper>
            
              <div>
              <span className="wrapped-header">
             <h2> Amenidades <br/>Exclusivas</h2> 
              </span>
            
              <div className="video-wrapper">
              
              <iframe   src="https://www.youtube.com/embed/if0hZ_LxUWA?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <button className="flat-button sand-button centered-button" style={{marginTop:"3em"}}>Ver Mas</button>
              </div>
              </ScrollWrapper>
            
              <ScrollWrapper classes="bg-sand">
            
            <div>
         <h3>Nuestras Residencias</h3>
         <FancySlider slides={playaSlider} titles={slideTitles}/>
            </div>
            </ScrollWrapper>
          
            <ScrollWrapper>
            
            <div>
            <span className="wrapped-header">
            <h2> Playa Mujeres<br/><span className="sub">Condominio Maestro</span></h2> 
            </span>
            <div className="col-wrapper">
            <div className="left-col">
            <SimpleSlider slides={playaSlider}/>
            </div>
            <div className="right-col">
                <HandleImages name="logopm"/>
            <p>Exclusiva comunidad turístico residencial cerrada de
            376 hectáreas ubicada al norte de la ciudad de
            
            Cancún, donde el cuidado y el respeto por la natu-
            raleza del entorno hacen de este desarrollo un lugar
            
            mágico que permite la convivencia, privacidad y
            conectividad que tanto deseas.</p>
            <button className="flat-button sand-button ">Ver Mas</button>
            </div></div>
            
            </div>
            </ScrollWrapper>
            
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
            <Form/>
             
            </Layout> )}      



}

export default IndexPage
