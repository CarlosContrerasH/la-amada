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

let fancySlider =[ <HandleImages name="unaRecamarah" />,<HandleImages name="dosRecamaras"/>,<HandleImages name="residencesGal2"/>,<HandleImages name="residencesGal3"/>,<HandleImages name="penthouse"/>]
let playaSlider =[ <HandleImages name="playaGal1"/>, <HandleImages name="playaGal2"/>,<HandleImages name="amenidadespH1" />,
<HandleImages name="amenidadespH2" />,
<HandleImages name="amenidadespH3" /> ]

let slideLinks = ["/residencias/una-recamara/","/residencias/dos-recamaras/","/residencias/tres-recamaras/","/residencias/cuatro-recamaras/","/residencias/penthouse/"]
let bigSlider =[ <HandleImages name="homeGal1"/>, <HandleImages name="homeGal2"/>, <HandleImages name="homeGal3"/>]
let slideTitles=[<><span>Una</span><br/><span className='sub'>Recámara</span></>,<><span>Dos</span><br/><span className='sub'>Recámaras</span></>,<><span>Tres</span><br/><span className='sub'>Recámaras</span></>,<><span>Cuatro</span><br/><span className='sub'>Recámaras</span></>,<><span></span><br/><span className='sub'>Penthouse</span></>]

let engTitles=[<><span>One</span><br/><span className='sub'>Bedroom</span></>,<><span>Two</span><br/><span className='sub'>Bedrooms</span></>,<><span>Three</span><br/><span className='sub'>Bedrooms</span></>,<><span>Four</span><br/><span className='sub'>Bedrooms</span></>,<><span></span><br/><span className='sub'>Penthouse</span></>]
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
     
   <div className={"logo-wrapper "+(percentage>.25?"fade":"")}><Logo/>{props.eng==true?<h1>Luxury Beachfront Residences</h1>:<h1>Residencias de Lujo frente a Playa </h1>}</div>
    <div className="screen first"></div>
    <div className="screen second" ref={ref} ></div>
    <div className="bg-wrapper" style={{transform:"translateY(min("+ (percentage.toPrecision(2)) * 200+"%,var(--transformHero)))"}} >
   
      <div>
    <HandleImages name="depas"/><HandleImages name="desktopHero" />
    <video src={video} muted={true} autoPlay={true} playsInline = {true } loop={true} /></div>
    </div>
    {/*
    
    style={{bottom:"max(calc(100vh - 102px - "+ Math.round(percentage*400)+ "vh),-100vh)"}}
    <video src={video} muted={true} autoPlay={true} playsInline = {true } loop={true} style={percentage<.5?{transform:"translateY("+ (percentage.toPrecision(2)) * 200+"%)"}:{transform:"translateY(100%)"}}/>*/}
  </div>
  
  
  
  
  
   
    )
  }


const Texto =(props)=>{
 return(
  <div className="component bg-sand fancy"> 
  <div  > 
  <h1>{props.eng==true?"Welcome to":"Bienvenido a"}</h1>
  <br/>
  {props.eng?<div className="centered ubicacion">
             <span className="script">La Amada Residences
</span>
             <p>Situated just15 minutes away from Cancun's downtown, La Amada's13 acres of paradise offer a unique combination of privacy and harmony. Our luxurious apartments range from one to four bedrooms and a Penthouse which are distributed throughout 8 buildings. Each unit offers exclusive, uninterrupted views of either our private beach, the ocean, the marina, or the neighbouring natural reserves. The design of our apartments has been carefully thought of to offer you spacious bedrooms, ample terraces, and sheltered parking. At La Amada we have taken care of every single detail to offer you the perfect space to create new memories and share special moments that you and your loved ones will treasure forever.</p>
         </div>:<div className="centered ubicacion">
             <span className="script">La Amada Residences</span>
             <p>a tan sólo 15 minutos del centro de Cancún.     Con una superficie de terreno de 5.2 hectáreas, La Amada cuenta con 215 lujosos departamentos de 1, 2, 3, 4 recámaras y Penthouse distribuidos en 8 edificios, en la playa, con vista al mar, a la marina o a la reserva natural, todos cuidadosamente diseñados y planificados con amplias terrazas, estacionamientos cubiertos, dando la mayor importancia a cada uno de sus detalles, ofreciendo espacios para compartir, crear y construir nuevos recuerdos que atesorarás por siempre.</p>
         </div>
         }

     </div></div>
 ) 
}


  const Amenidades = (props) => {
 
   
    return (
  
      <ScrollWrapper>
            
      <div>
      <span className="wrapped-header">
     <h2> {props.eng==true?<>Meet our property</>:<>Conoce nuestro desarrollo </>}</h2> 

     
      </span><div className="video-wrapper">
    {props.video? 
    <video  style={{width:"100%"}}controls autoPlay loop>
  <source src={video2} type="video/mp4"/>
   
  
</video>
       :<div onClick={()=>props.handleVideo()} className="vid-click">
         
         <HandleImages name="video" />      
 <svg  className="play-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 372.4 369.9" 
enableBackground="new 0 0 372.4 369.9"  >
<g>
	<polygon fill="#DDD3CA" points="307.6,189.1 226.3,235.4 145,281.7 145.6,188.1 146.1,94.5 226.9,141.8 	"/>
	<path fill="#DDD3CA" d="M189.3,347.9c-89.5,0-162.4-72.8-162.4-162.4S99.8,23.1,189.3,23.1c89.5,0,162.4,72.8,162.4,162.4
		S278.8,347.9,189.3,347.9z M189.3,30.1c-85.7,0-155.4,69.7-155.4,155.4c0,85.7,69.7,155.4,155.4,155.4
		c85.7,0,155.4-69.7,155.4-155.4C344.7,99.8,275,30.1,189.3,30.1z"/>
</g>
</svg>

         
        </div>}</div>
     
      <Link style={{textDecoration:"none"}}to="/amenidades"> <button name="ver mas" className="flat-button sand-button centered-button mas" style={{marginTop:"3em"}}>{props.eng==true?"View":"Ver Mas"}</button></Link>
      </div>
      </ScrollWrapper>

  
   
    )
  }



  const Residences = (props) => {
  
   
    return (
      <ResWrapper classes="bg-sand fancy">
            
      <div>
  
<ScrollWrapper classes="blurb home">
            
            <div>
                <div>
                <span className="wrapped-header">
            <h2><span className="script">{props.eng==true?"Our ":"Nuestras "}</span><br/><span>{props.eng==true?"Residences ":"Residencias"} </span></h2></span>
             
            </div></div>
            </ScrollWrapper>
        <FancySlider slides={fancySlider} titles={props.eng?engTitles:slideTitles} links={slideLinks} eng={props.eng}/>
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
     {props.eng==true?<p>An exclusive 930 acres residential tourist community located in the north of Cancún, where the respect and care for the environment and nature makes it a magical residential and hotel community that allows for the kind of cohabitation, privacy, and connectivity that you have been yearning.  
Its amenities offer unique resort experiences that will transform each one of your days into unforgettable moments that will last forever. </p> :<p>Entre arena blanca, selva tropical, zonas arqueológicas, laguna, manglar, mar turquesa y a 10 minutos del centro de Cancún, surge Playa Mujeres, exclusivo destino turístico en la zona del Caribe Mexicano que alberga más de 8,200 cuartos en lujosos centros de hospedaje, lo cual lo convierte en el lugar de mayor crecimiento del estado.Exclusiva comunidad turístico residencial cerrada de 376 hectáreas ubicada al norte de la ciudad de Cancún, donde el cuidado y el respeto por la naturaleza del entorno hacen de este desarrollo un lugar mágico que permite la convivencia, privacidad y conectividad que tanto deseas.</p>
     } <Link to="/amenidades/playa"><button className="flat-button sand-button mas">{props.eng==true?"View":"Ver Mas"}</button></Link>
      </div></div>
      
      </div>
      </ScrollWrapper>
   
    )
  }


  const Blurb = (props) => {
  
   
    return (
      <ScrollWrapper classes="blurb home">
            
      <div>
          <div>
          <span className="wrapped-header">
      <h2><span className="script">{props.eng==true?"Meet our proyect ":"Conoce nuestro Proyecto"}</span><br/><span>{props.eng==true?"From ":"Desde "} 380,000 USD</span></h2></span>
      <a href="#form"> <button className="outlined-button light"> {props.eng ?"Make an Appointment":"Hacer Cita"}</button></a>
      </div></div>
      </ScrollWrapper>
    )}





    const Galeria = (props) => {
  
   
      return(
      <ScrollWrapper >
            
      <div>
      <SimpleSlider slides={bigSlider}/>
      <Link style={{textDecoration:"none"}} to="/galeria"> <button className="flat-button sand-button centered-button"  style={{marginTop:"3em"}}>{props.eng==true?"Gallery":"Ver Galeria"}</button></Link>
     </div>
      </ScrollWrapper>
    )}

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
            <Texto/>
            
          <Amenidades video={this.state.video} handleVideo={this.handleVideo}/>
            
   <Residences/>
          
<Blurb/>
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


        <Galeria/>
           
             
            </Layout> )}      



}

export default IndexPage
