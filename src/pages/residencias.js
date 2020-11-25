import React from 'react'

import { Link } from 'gatsby'

import {HandleImages} from "../components/handleImages"
import Layout from '../components/Layout'

import { useScrollPercentage } from 'react-scroll-percentage'
import FancySlider from "../components/fancySlider"

let fancySlider =[ <HandleImages name="residencesGal1"/>,<HandleImages name="residencesGal2"/>,<HandleImages name="residencesGal3"/>]
 



let slideTitles=[<><span>Dos</span><br/><span className='sub'>Recámaras</span></>,<><span>Tres</span><br/><span className='sub'>Recámaras</span></>,<><span>Cuatro</span><br/><span className='sub'>Recámaras</span></>]


 
const Residences = (props) => {
  
   
    return (
      <ResWrapper classes="bg-sand fancy">
            
      <div>
   <h3>{props.eng==true?"Our Residences":"Nuestras Residencias"}</h3>
        <FancySlider slides={fancySlider} titles={slideTitles}/>
      </div>
      </ResWrapper>
     
   
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
  

  const Centered = (props) =>{
                 
       
return(    <div className="centered">
    <h3>Conoce nuestras residencias disponibles desde:</h3>
  </div>)
 }



 const Range = (props) =>{
   return( <div class="slidecontainer">
      
    <input onChange={(event)=>props.change(event.target.value)} value={props.precio} type="range" min="1" max="4"   class="slider" id="myRange"/>
 <span>precio:{props.precio}</span>
  </div>)
 }


 const Residencia1 = (props) =>{
    return( <div onClick={()=>props.click("1")} class={"residencia-accordeon "+ (props.expanded?"expanded":"")}>
   <h2>Una Recámara</h2>
   <div className="content">
   <h3>Desde 570,000 USD</h3>
   <h3>Unidades disponibles de entrega inmediata con caracteristicas:</h3></div>
   </div>)
  }

  const Residencia2 = (props) =>{
    return( <div onClick={()=>props.click("2")} class={"residencia-accordeon "+ (props.expanded?"expanded":"")}>
   <h2>Dos Recámaras</h2>
   <div className="content">
   <h3>Desde 570,000 USD</h3>
   <h3>Unidades disponibles de entrega inmediata con caracteristicas:</h3></div>
   </div>)
  }

  const Residencia3 = (props) =>{
    return( <div  onClick={()=>props.click("3")} class={"residencia-accordeon "+ (props.expanded?"expanded":"")}>
   <h2>Tres Recámaras</h2>
   <div className="content">
   <h3>Desde 570,000 USD</h3>
   <h3>Unidades disponibles de entrega inmediata con caracteristicas:</h3></div>
   </div>)
  }

  const Residencia4 = (props) =>{
    return( <div  onClick={()=>props.click("4")} class={"residencia-accordeon "+ (props.expanded?"expanded":"")}>
   <h2>Cuatro Recámaras</h2>
   <div className="content">
   <h3>Desde 570,000 USD</h3>
   <h3>Unidades disponibles de entrega inmediata con caracteristicas:</h3></div>
   </div>)
  }


class Residencias extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
      expanded1:false,
      expanded2:false,
      expanded3:false,
      expanded4:false,
      precio:1
        }

this.handleExpand=this.handleExpand.bind(this);
this.handleRange=this.handleRange.bind(this)

    }

    handleExpand(e){
        this.setState({
            ["expanded"+e]:!this.state["expanded"+e]
        },()=>console.log('click', this.state))
    }

    handleRange(e){
        if(e==1){
            this.setState({
                precio:e,
                expanded1:true,
                expanded2:false,
                expanded3:false,
                expanded4:false,
            })
    
        }
    
    
        if(e==2){
            this.setState({
                precio:e,
                expanded1:true,
                expanded2:true,
                expanded3:false,
                expanded4:false,
            })
    
        }
    
        if(e==3){
            this.setState({
                precio:e,
                expanded1:true,
                expanded2:true,
                expanded3:true,
                expanded4:false,
            })
    
        }
    
    
        if(e==4){
            this.setState({
                precio:e,
                expanded1:true,
                expanded2:true,
                expanded3:true,
                expanded4:true
            })
    
        }
    }

 componentDidMount(){
     this.handleRange(1)
 }


    render() {

        return (

            <Layout>
              <Residences/>
              <Centered/>

<Range precio={this.state.precio} change={this.handleRange}/>
<Residencia1 expanded={this.state.expanded1} click={this.handleExpand}/>
<Residencia2 expanded={this.state.expanded2} click={this.handleExpand}/>
<Residencia3 expanded={this.state.expanded3} click={this.handleExpand}/>
<Residencia4 expanded={this.state.expanded4} click={this.handleExpand}/>

            </Layout>)
    }



}

export default Residencias