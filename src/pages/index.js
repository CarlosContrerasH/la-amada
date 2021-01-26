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
import video2 from "../img/video.mp4"

let fancySlider =[ <HandleImages name="unaRecamara"/>,<HandleImages name="dosRecamaras"/>,<HandleImages name="residencesGal2"/>,<HandleImages name="residencesGal3"/>]
let playaSlider =[ <HandleImages name="playaGal1"/>, <HandleImages name="playaGal2"/>,<HandleImages name="amenidadespH1" />,
<HandleImages name="amenidadespH2" />,
<HandleImages name="amenidadespH3" /> ]
let slideLinks = ["/residencias/una-recamara/","/residencias/dos-recamaras/","/residencias/tres-recamaras/","/residencias/cuatro-recamaras/"]
 
let bigSlider =[ <HandleImages name="homeGal1"/>, <HandleImages name="homeGal2"/>, <HandleImages name="homeGal3"/>]
let slideTitles=[<><span>Una</span><br/><span className='sub'>Recámara</span></>,<><span>Dos</span><br/><span className='sub'>Recámaras</span></>,<><span>Tres</span><br/><span className='sub'>Recámaras</span></>,<><span>Cuatro</span><br/><span className='sub'>Recámaras</span></>]

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
     
   <div className={"logo-wrapper "+(percentage>.25?"fade":"")}><Logo/>{props.eng==true?<h3>ONLY CONDO IN PLAYA MUJERES, CANCUN.</h3>:<h3>ÚNICO CONDOMINIO DENTRO DE PLAYA MUJERES, CANCÚN.</h3>}</div>
    <div className="screen first"></div>
    <div className="screen second" ref={ref} ></div>
    <div className="bg-wrapper" style={{transform:"translateY(min("+ (percentage.toPrecision(2)) * 200+"%,var(--transformHero)))"}} >
   
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
     <h2> {props.eng==true?<>Exclusive <br/>Amenities</>:<>Amenidades <br/>Exclusivas</>}</h2> 
      </span><div className="video-wrapper">
    {props.video? 
    <video  style={{width:"100%"}}controls autoPlay>
  <source src={video2} type="video/mp4"/>
   
  
</video>
       :<div onClick={()=>props.handleVideo()}><HandleImages name="depas" /></div>}</div>
     
      <Link style={{textDecoration:"none"}}to="/amenidades"> <button name="ver mas" className="flat-button sand-button centered-button" style={{marginTop:"3em"}}>Ver Mas</button></Link>
      </div>
      </ScrollWrapper>

  
   
    )
  }



  const Residences = (props) => {
  
   
    return (
      <ResWrapper classes="bg-sand fancy">
            
      <div>
   <h3>{props.eng==true?"Our Residences":"Nuestras Residencias"}</h3>
        <FancySlider slides={fancySlider} titles={slideTitles} links={slideLinks}/>
      </div>
      </ResWrapper>
     
   
    )
  }



  const PlayaMujeres = (props) => {
  
   
    return (
       
      <ScrollWrapper>
            
      <div>
      <span className="wrapped-header">
      <h2> {props.eng==true?<>Playa Mujeres<br/><span className="sub">Master Condo</span></>:<>Playa Mujeres<br/><span className="sub">Condominio Maestro</span></>}</h2> 
      </span>
      <div className="col-wrapper">
      <div className="left-col">
      <SimpleSlider slides={playaSlider}/>
      </div>
      <div className="right-col">
          <HandleImages name="logopm"/>
     {props.eng==true?<p>Texto en Ingles</p> :<p>Entre arena blanca, selva tropical, zonas arqueológicas, laguna, manglar, mar turquesa y a 10 minutos del centro de Cancún, surge Playa Mujeres, exclusivo destino turístico en la zona del Caribe Mexicano que alberga más de 8,200 cuartos en lujosos centros de hospedaje, lo cual lo convierte en el lugar de mayor crecimiento del estado.Exclusiva comunidad turístico residencial cerrada de 376 hectáreas ubicada al norte de la ciudad de Cancún, donde el cuidado y el respeto por la naturaleza del entorno hacen de este desarrollo un lugar mágico que permite la convivencia, privacidad y conectividad que tanto deseas.</p>
     } <Link to="/amenidades/playa"><button className="flat-button sand-button ">{props.eng==true?"See More":"Ver Mas"}</button></Link>
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
    
    return (<div ref={ref} className={percentage > .15 && percentage< .85? "visible test component " + (props.classes ? props.classes : "") : "component " + (props.classes ? props.classes : "")}>
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
        video:false
      }
    
    
    
    }  
handleVideo=()=>{
  this.setState({
    video:true
  })
}

    render(){

        return (
        
           <Layout  >

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
            
          <Amenidades video={this.state.video} handleVideo={this.handleVideo}/>
            
   <Residences/>
          
   <ScrollWrapper classes="blurb home">
            
            <div>
                <div>
                <span className="wrapped-header">
            <h2><span className="script">Conoce nuestro Proyecto</span><br/><span>Desde 380,000 USD</span></h2></span>
            <button className="outlined-button light">  Hacer Cita</button>
            </div></div>
            </ScrollWrapper>
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


            <ScrollWrapper >
            
            <div>
            <SimpleSlider slides={bigSlider}/>
            <Link style={{textDecoration:"none"}} to="/galeria"> <button className="flat-button sand-button centered-button"  style={{marginTop:"3em"}}>Ver Galeria</button></Link>
           </div>
            </ScrollWrapper>
           
             
            </Layout> )}      



}

export default IndexPage
