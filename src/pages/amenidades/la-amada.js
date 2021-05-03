import React from 'react'
 

import Layout from '../../components/Layout'
 
import { useScrollPercentage } from 'react-scroll-percentage'
import Logo from "../../components/logo"
import Form from "../../components/contact-form"
import ScrollWrapper from "../../components/scrollwrapper"
import {HandleImages} from "../../components/handleImages"
import SimpleSlider from "../../components/simpleSlider"
import FancySlider from "../../components/fancySlider"
import aVerdes from "../../img/AMENIDADES/LA AMADA/ICONOS/AREAS-VERDES.svg"
import bClub from "../../img/AMENIDADES/LA AMADA/ICONOS/BEACHCLUB-01.svg"
import canchas from "../../img/AMENIDADES/LA AMADA/ICONOS/CANCHAS.svg"
import concierge from "../../img/AMENIDADES/LA AMADA/ICONOS/CONCIERGE.svg"
import gym from "../../img/AMENIDADES/LA AMADA/ICONOS/GYM-01.svg"
import ludoteca from "../../img/AMENIDADES/LA AMADA/ICONOS/LUDOTECA-01.svg"
import deli from "../../img/AMENIDADES/LA AMADA/ICONOS/MARKET-DELI-01.svg"
import playa from "../../img/AMENIDADES/LA AMADA/ICONOS/PLAYA-01.svg"
import rest from "../../img/AMENIDADES/LA AMADA/ICONOS/RESTAURANTE-01.svg"
import roof from "../../img/AMENIDADES/LA AMADA/ICONOS/ROOFTOPS-ALBERCAS-01.svg"
import yoga from "../../img/AMENIDADES/LA AMADA/ICONOS/SALON-DE-YOGA-01.svg"

import { Link } from 'gatsby'
 
let grid =[ <></>,
<><HandleImages name="amenidadesA2Icon"/><HandleImages name="amenidadesA2"/></>,
<><HandleImages name="amenidadesA3Icon"/><HandleImages name="amenidadesA3"/></>,
<><HandleImages name="amenidadesA4Icon"/><HandleImages name="amenidadesA4"/></>,
<><HandleImages name="amenidadesA5Icon"/><HandleImages name="amenidadesA5"/></>,
<><HandleImages name="amenidadesA6Icon"/><HandleImages name="amenidadesA6"/></>,
<><HandleImages name="amenidadesA7Icon"/><HandleImages name="amenidadesA7"/></>,
<><HandleImages name="amenidadesA8Icon"/><HandleImages name="amenidadesA8"/></>,
<><HandleImages name="amenidadesA9Icon"/><HandleImages name="amenidadesA9"/></>,
<><HandleImages name="amenidadesA10Icon"/><HandleImages name="amenidadesA10"/></>,
<><HandleImages name="amenidadesA11Icon"/><HandleImages name="amenidadesA11"/></>,]
   


let bigSlider =[ <HandleImages name="amenidadesH1"/>,
<HandleImages name="sliderAmada2"/>,
 <HandleImages name="amenidadesH3"/>,
<HandleImages name="sliderAmada4"/>,

<HandleImages name="sliderAmada5"/>,]
 

 
  const Slider = (props) => {
 
   
    return (
  
    
        <ScrollWrapper classes="   amenidades-header">
            
       
        <SimpleSlider slides={bigSlider}/>
      
        </ScrollWrapper>
       
  
   
    )
  }


  const Blurb = (props) => {
 
   
    return (
  
    
        <ScrollWrapper  >
            
       
       <div className="centered">
         {props.eng?<h1>Explore our exclusives amenities for owners and guests</h1>:
         <h1>Conoce las amenidades de uso exclusivo para residentes y sus invitados</h1>}
       </div>
      
        </ScrollWrapper>
       
  
   
    )
  }


  const Grid = (props) => {
 
   
    return (
  
    
      
            
        
       <div className="amenidades-grid amada">
       <ScrollWrapper  classes="grid-element">    <Link to="/amenidades/la-amada/playa" >     <div  >


       <div className="icon-wrapper"><img alt="Playa" src={playa}/><span>Playa</span></div> <HandleImages name="amenidadesA9"/>
      
         </div></Link></ScrollWrapper>

         <ScrollWrapper classes="grid-element big" >  <Link to="/amenidades/la-amada/beachclub-restaurant" >    <div >
        <div className="icon-wrapper"><img alt="Beachclub Restaurant" src={rest} style={{width:"6em",height:"6em"}}/><span>Restaurante</span></div> <HandleImages name="amenidadesA2"/>
         </div></Link></ScrollWrapper>
         
         <ScrollWrapper classes="grid-element big" >  <Link to="/amenidades/la-amada/beachclub" >     <div >
        <div className="icon-wrapper"><img alt="Beachclub" src={bClub}/><span>{props.eng?"Beach Club":"Club de Playa"}</span></div> <HandleImages name="amenidadesA3"/>
         </div></Link></ScrollWrapper>

         <ScrollWrapper classes="grid-element " >  <Link to="/amenidades/la-amada/rooftop-albercas" >    <div >
         <div className="icon-wrapper"><img alt="Rooftops y Albercas" src={roof}/><span>{props.eng?"Rooftops & Pools":"Rooftops y Albercas"}</span></div> <HandleImages name="amenidadesA10"/>
      
         </div></Link></ScrollWrapper>

         <ScrollWrapper  classes="grid-element ">  <Link to="/amenidades/la-amada/yoga" >    <div >
         <div className="icon-wrapper"><img alt="Yoga" src={yoga}/><span>{props.eng?"Yoga and Multipurpose Excercise Room":"Salón de Yoga y usos múltiples."}</span></div> <HandleImages name="amenidadesA11"/>
      
         </div></Link></ScrollWrapper>

         <ScrollWrapper  classes="grid-element big">  <Link to="/amenidades/la-amada/canchas" >      <div >
         <div className="icon-wrapper"><img alt="Canchas" src={canchas}/><span>{props.eng?"Multipurpose Courts":"Canchas"}</span></div> <HandleImages name="amenidadesA4"/>
  

         </div></Link></ScrollWrapper>

         <ScrollWrapper  classes="grid-element big">  <Link to="/amenidades/la-amada/market" >     <div >
         <div className="icon-wrapper"><img alt="Marklet Deli" src={deli} style={{width:"6em",height:"6em"}}/><span>Market Deli</span></div> <HandleImages name="amenidadesA8"/>

         </div></Link></ScrollWrapper>

         <ScrollWrapper classes="grid-element " >  <Link to="/amenidades/la-amada/ludoteca" >     <div >
         <div className="icon-wrapper"><img alt="Ludoteca" src={ludoteca}/><span>Ludoteca y Kids-Club </span></div> <HandleImages name="amenidadesA7"/>
 
         </div></Link></ScrollWrapper>

         <ScrollWrapper classes="grid-element big" >  <Link to="/amenidades/la-amada/salon" >     <div >
         <div className="icon-wrapper"><img alt="Ludoteca" src={ludoteca}/><span>{props.eng?"Residential Lounge":"Salón de Residentes"}</span></div><HandleImages name="ludotecaH2"/>
 
         </div></Link></ScrollWrapper>

         <ScrollWrapper  classes="grid-element small">  <Link to="/amenidades/la-amada/gym" >     <div >
         <div className="icon-wrapper"><img alt="Gym" src={gym}/><span>Gym</span></div> <HandleImages name="amenidadesA5"/>
       
         </div></Link></ScrollWrapper>

         <ScrollWrapper  classes="grid-element big">  <Link to="/amenidades/la-amada/lobby" >     <div >
         <div className="icon-wrapper"><img alt="Lobby" src={concierge}/><span>Lobby, Motor Lobby y Concierge</span></div> <HandleImages name="lobbyN"/>
   
         </div></Link></ScrollWrapper>

           <ScrollWrapper classes="grid-element small" >  <Link to="/amenidades/la-amada/areas-verdes" >    <div  >
           <div className="icon-wrapper"><img alt="Areas Verdes" src={aVerdes}/><span>Areas Verdes</span></div> <HandleImages name="areasVerdes0"/>
      
         </div></Link></ScrollWrapper>

       </div>
       
  
   
    )
  }




  const SingleCol = (props) => {
  
   
    return (
   
        <ScrollWrapper classes="single">

<div className="col-wrapper amenidades">
 

          <Link to="/amenidades/playa"   >   
 <div className="logo"> <HandleImages name="logopmb"/></div>
     <div className="bg">
 <HandleImages name="bicis"/></div>
         </Link>

       
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
 <Slider/>
 <Blurb/>
          <Grid/>  
          <SingleCol/> 
            </Layout> )}      



}

export default Amenidades