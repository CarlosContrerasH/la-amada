import React from 'react'
 

import Layout from '../../components/Layout'
 
import { useScrollPercentage } from 'react-scroll-percentage'
import Logo from "../../components/logo"
import Form from "../../components/contact-form"
import ScrollWrapper from "../../components/scrollwrapper"
import {HandleImages} from "../../components/handleImages"
import SimpleSlider from "../../components/simpleSlider"
import FancySlider from "../../components/fancySlider"

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
<HandleImages name="amenidadesH2"/>,
 <HandleImages name="amenidadesH3"/>,]
 

 
  const Slider = (props) => {
 
   
    return (
  
    
        <ScrollWrapper classes="bg-sand playa">
            
       
        <SimpleSlider slides={bigSlider}/>
      
        </ScrollWrapper>
       
  
   
    )
  }


  const Blurb = (props) => {
 
   
    return (
  
    
        <ScrollWrapper  >
            
       
       <div className="centered">
         <h3>Conoce las exclusivas amenidades de uso exclusivo para residentes e invitados</h3>
       </div>
      
        </ScrollWrapper>
       
  
   
    )
  }


  const Grid = (props) => {
 
   
    return (
  
    
        <ScrollWrapper  >
            
       
       <div className="amenidades-grid">
         <div className="grid-element">
        <div className="icon-wrapper"><HandleImages name="amenidadesA1Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA1"/>
         </div>

         <div className="grid-element big">
        <div className="icon-wrapper"><HandleImages name="amenidadesA2Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA2"/>
         </div>
         
         <div className="grid-element big">
        <div className="icon-wrapper"><HandleImages name="amenidadesA3Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA3"/>
         </div>

         <div className="grid-element ">
        <div className="icon-wrapper"><HandleImages name="amenidadesA4Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA4"/>
         </div>

         <div className="grid-element ">
        <div className="icon-wrapper"><HandleImages name="amenidadesA5Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA5"/>
         </div>

         <div className="grid-element big">
        <div className="icon-wrapper"><HandleImages name="amenidadesA6Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA6"/>
         </div>

         <div className="grid-element big">
        <div className="icon-wrapper"><HandleImages name="amenidadesA7Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA7"/>
         </div>

         <div className="grid-element ">
        <div className="icon-wrapper"><HandleImages name="amenidadesA8Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA8"/>
         </div>

         <div className="grid-element small">
        <div className="icon-wrapper"><HandleImages name="amenidadesA9Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA9"/>
         </div>

         <div className="grid-element small">
        <div className="icon-wrapper"><HandleImages name="amenidadesA10Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA10"/>
         </div>

         <div className="grid-element small">
        <div className="icon-wrapper"><HandleImages name="amenidadesA11Icon"/><span>Areas Verdes</span></div> <HandleImages name="amenidadesA11"/>
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
 <Slider/>
 <Blurb/>
          <Grid/>   
            </Layout> )}      



}

export default Amenidades