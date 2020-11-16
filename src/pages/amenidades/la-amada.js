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
 
  
let bigSlider =[ <><HandleImages name="amenidadesA1Icon"/><HandleImages name="amenidadesA1"/></>,
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
 

 
  const Slider = (props) => {
 
   
    return (
  
    
        <ScrollWrapper classes="bg-sand playa">
            
        <div>
        <SimpleSlider slides={bigSlider}/>
        <span className="wrapped-header playa">
      <h2> {props.eng==true?<>Exclusive Beach<br/><span className="sub">Beachfront Residences</span></>:<>Playa Exclusiva<br/><span className="sub">Residenceias Frente a Playa</span></>}</h2> 
      </span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       
      <Link to="/amenidades"  ><button className="back"><span><span className="arrow-back"></span></span><br/>{props.eng?"Back":"Regresar"}</button></Link>
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
             
            </Layout> )}      



}

export default Amenidades