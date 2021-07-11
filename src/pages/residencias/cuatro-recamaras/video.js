import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../../../components/Layout'
 
import video from "../../../img/mainBG.mp4"
import { useScrollPercentage } from 'react-scroll-percentage'
import Logo from "../../../components/logo" 
import ScrollWrapper from "../../../components/scrollwrapper"
import {HandleImages} from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"
import FancySlider from "../../../components/fancySlider"
import video2 from "../../../img/cuatro-recamaras.mp4"

let fancySlider =[ <HandleImages name="unaRecamarah" />,<HandleImages name="dosRecamaras"/>,<HandleImages name="residencesGal2"/>,<HandleImages name="residencesGal3"/>,<HandleImages name="penthouse"/>]
let playaSlider =[ <HandleImages name="playaGal1"/>, <HandleImages name="playaGal2"/>,<HandleImages name="amenidadespH1" />,
<HandleImages name="amenidadespH2" />,
<HandleImages name="amenidadespH3" /> ]

let slideLinks = ["/residencias/una-recamara/","/residencias/dos-recamaras/","/residencias/tres-recamaras/","/residencias/cuatro-recamaras/","/residencias/penthouse/"]
let bigSlider =[ <HandleImages name="homeGal1"/>, <HandleImages name="homeGal2"/>, <HandleImages name="homeGal3"/>]
let slideTitles=[<><span>Una</span><br/><span className='sub'>Recámara</span></>,<><span>Dos</span><br/><span className='sub'>Recámaras</span></>,<><span>Tres</span><br/><span className='sub'>Recámaras</span></>,<><span>Cuatro</span><br/><span className='sub'>Recámaras</span></>,<><span></span><br/><span className='sub'>Penthouse</span></>]

let engTitles=[<><span>One</span><br/><span className='sub'>Bedroom</span></>,<><span>Two</span><br/><span className='sub'>Bedrooms</span></>,<><span>Three</span><br/><span className='sub'>Bedrooms</span></>,<><span>Four</span><br/><span className='sub'>Bedrooms</span></>,<><span></span><br/><span className='sub'>Penthouse</span></>]
 


 
  const Amenidades = (props) => {
 
   
    return (
  
      <ScrollWrapper>
            
      <div>
 <div className="video-wrapper">
    {
    <video  style={{width:"100%"}}controls autoPlay loop>
  <source src={video2} type="video/mp4"/>
   
  
</video>
      }</div>
     
       </div>
      </ScrollWrapper>

  
   
    )
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

     
          <Amenidades video={this.state.video} handleVideo={this.handleVideo}/>
            
 
             
            </Layout> )}      



}

export default IndexPage
