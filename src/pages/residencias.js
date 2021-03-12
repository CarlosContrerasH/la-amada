import React from 'react'

import { Link } from 'gatsby'

import {HandleImages} from "../components/handleImages"
import Layout from '../components/Layout'

import vistamar from "../img/RESIDENCIAS/features/FRENTE-A-PLAYA.svg"
import { useScrollPercentage } from 'react-scroll-percentage'
import FancySlider from "../components/fancySlider"
import lock from "../img/RESIDENCIAS/features/LOCK-OFF.svg"
import mar from "../img/RESIDENCIAS/features/VISTA-MARINA.svg"
import playa from "../img/RESIDENCIAS/features/VISTA-PLAYA.svg"
import reserva from "../img/RESIDENCIAS/features/VISTA-RESERVA.svg"

let fancySlider =[ <HandleImages name="unaRecamarah" />,<HandleImages name="dosRecamaras"/>,<HandleImages name="residencesGal2"/>,<HandleImages name="residencesGal3"/>,<HandleImages name="penthouse"/>]


let slideLinks = ["/residencias/una-recamara/","/residencias/dos-recamaras/","/residencias/tres-recamaras/","/residencias/cuatro-recamaras/","/residencias/penthouse/"]
 

let slideTitles=[<><span>Una</span><br/><span className='sub'>Recámara</span></>,<><span>Dos</span><br/><span className='sub'>Recámaras</span></>,<><span>Tres</span><br/><span className='sub'>Recámaras</span></>,<><span>Cuatro</span><br/><span className='sub'>Recámaras</span></>,<><span></span><br/><span className='sub'>Penthouse</span></>]

let engTitles=[<><span>One</span><br/><span className='sub'>Bedroom</span></>,<><span>Two</span><br/><span className='sub'>Bedrooms</span></>,<><span>Three</span><br/><span className='sub'>Bedrooms</span></>,<><span>Four</span><br/><span className='sub'>Bedrooms</span></>,<><span></span><br/><span className='sub'>Penthouse</span></>]
 


 



const Residences = (props) => {
  
   
    return (
      <ResWrapper classes="bg-sand fancy">
            
      <div>
   <h1>{props.eng==true?"Our Residences":"Nuestras Residencias"}</h1>
   <br/>
   {props.eng?<div className="centered ubicacion">
              <span className="script">La Amada
</span>
              <p>With a surface area of 13 acres, La Amada features 215 luxurious apartments with 1, 2, 3, 4 bedrooms and Penthousedistributed throughout 8 buildings, with either beach-front, ocean, marina, or natural reserve views. They have been carefully planned, with spacious bedrooms, ample terraces and covered parking, designed taking care of every single detail, while offering spaces to share, create, and build new memories that you will treasure forever.</p>
          </div>:<div className="centered ubicacion">
              <span className="script">La Amada</span>
              <p>Con una superficie de terreno de 5.2 hectáreas, La Amada cuenta con 215 lujosos departamentos de 1, 2, 3, 4 recámaras y Penthouse distribuidos en 8 edificios, en la playa, con vista al mar, a la marina o a la reserva natural, todos cuidadosamente diseñados y planificados con amplias terrazas, estacionamientos cubiertos, dando la mayor importancia a cada uno de sus detalles, ofreciendo espacios para compartir, crear y construir nuevos recuerdos que atesorarás por siempre.</p>
          </div>
          }
   <FancySlider slides={fancySlider} titles={props.eng?engTitles:slideTitles} links={slideLinks} eng={props.eng}/>
       
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
    
    return (<div ref={ref} className={percentage > .20 && percentage<.9 ? "visible component " + (props.classes ? props.classes : "") : "component " + (props.classes ? props.classes : "")}>
      {
  
      
     }
      {props.children}
    </div>);
  }
  

  const Centered = (props) =>{
                 
       
return(    <div className="centered">
    <h3>{props.eng==true?"Meet our luxury, move-in ready homes now available starting from:":"Conoce nuestras lujosas residencias, disponibles desde: "}		
		</h3>
  </div>)
 }



 const Range = (props) =>{
   return( <div class="slidecontainer">
      
    <input onChange={(event)=>props.change(event.target.value)} value={props.precio} type="range" min="1" max="5"   class="slider" id="myRange"/>
<div class={"pos"+props.precio}><span >{props.precio==1?"$380,000.00 USD":props.precio==2?"$555,000.00 USD":props.precio==3?"$875,000.00 USD":props.precio==4?"$1,150,000.00 USD":"$1780, 000.00 USD"}</span></div> 
  </div>)
 }


 const Residencia1 = (props) =>{
    return( <div id="r1" onClick={()=>props.click("1")} class={"residencia-accordeon "+ (props.expanded?"expanded":"")}>
 <h2>{props.eng==true?"One Bedrooms": "Una Recámara"} </h2>
   <div className="content">
   <h3>{props.eng==true?"From": "Desde"} $380,000.00 USD</h3>
   <h3>{props.eng==true?"Move-in ready units with features:":"Unidades disponibles de entrega inmediata con características:"}</h3>
   
      
   <div className="icons-wrapper">

     { /* <div>
<img alt="lock" src={lock}/>
<span>Lock-off</span></div>

     <div><img alt="lock" src={mar}/><span>Vista<br/> al mar</span></div>*/}

<div><img alt="Marinafront view" src={mar}/><span>Marinafront view</span></div>

<div><img alt="Lagoon View" src={reserva}/>{props.eng==true?<span>Lagoon<br/>View</span>: <span>Vista<br/> a la reserva</span>}</div>

   </div>
   <HandleImages name="unaRecamara"/>
   <Link to="/residencias/una-recamara"> 
   <button name="ver mas" className="flat-button sand-button centered-button" style={{marginTop:"3em"}}>Ver Mas</button></Link>

   
   </div>
   </div>)
  }

  const Residencia2 = (props) =>{
    return( <div id="r2"  onClick={()=>props.click("2")} class={"residencia-accordeon "+ (props.expanded?"expanded":"")}>
  <h2>{props.eng==true?"Two Bedrooms": "Dos Recámaras"} </h2>
   <div className="content">
   <h3>{props.eng==true?"From": "Desde"} $555,000.00 USD</h3>
   <h3>{props.eng==true?"Move-in ready units with features:":"Unidades disponibles de entrega inmediata con características:"}</h3>

   
         
   <div className="icons-wrapper">

 
<div><img alt="Marinafront view" src={mar}/><span>Marinafront view</span></div>

 
<div>
<img alt="lock" src={lock}/>
<span>Lock-off</span></div>
   </div>
   <HandleImages name="dosRecamaras"/>
   <Link to="/residencias/dos-recamaras"> 
   <button name="ver mas" className="flat-button sand-button centered-button" style={{marginTop:"3em"}}>Ver Mas</button></Link>

   </div>
   </div>)
  }

  const Residencia3 = (props) =>{
    return( <div  id="r3"  onClick={()=>props.click("3")} class={"residencia-accordeon "+ (props.expanded?"expanded":"")}>
   <h2>{props.eng==true?"Three Bedrooms": "Tres Recámaras"} </h2>
   <div className="content">
   <h3>{props.eng==true?"From": "Desde"} $875,000.00 USD</h3>
   <h3>{props.eng==true?"Move-in ready units with features:":"Unidades disponibles de entrega inmediata con características:"}</h3>
 
      
   <div className="icons-wrapper">

 
   <div><img alt="Marinafront view" src={mar}/><span>Marinafront view</span></div>

 
 
</div>
<HandleImages name="tresRecamaras"/>
<Link to="/residencias/tres-recamaras">  
<button name="ver mas" className="flat-button sand-button centered-button" style={{marginTop:"3em"}}>Ver Mas</button></Link>
</div>
   </div>)
  }

  const Residencia4 = (props) =>{
    return( <div  id="r4"  onClick={()=>props.click("4")} class={"residencia-accordeon "+ (props.expanded?"expanded":"")}>
   <h2>Cuatro Recámaras</h2>
   <div className="content">
   <h3>{props.eng==true?"From": "Desde"} $1,150,000.00 USD</h3>
   <h3>{props.eng==true?"Move-in ready units with features:":"Unidades disponibles de entrega inmediata con características:"}</h3>
 
      
   <div className="icons-wrapper">

 
 
   <div><img alt="Marinafront view" src={mar}/><span>Marinafront view</span></div>

 
<div><img alt="Beachfront Residences" src={playa}/>{props.eng==true?<span>Beachfront<br/>Residences</span>: <span>Vista<br/> al mar</span>}</div>


<div><img alt="Lagoon View" src={reserva}/>{props.eng==true?<span>Lagoon<br/>View</span>: <span>Vista<br/> a la reserva</span>}</div>


</div>
<HandleImages name="cuatroRecamaras"/>
<Link to="/residencias/cuatro-recamaras">
<button name="ver mas" className="flat-button sand-button centered-button" style={{marginTop:"3em"}}>Ver Mas</button></Link>
</div>
   </div>)
  }



  const Residencia5 = (props) =>{
    return( <div  id="r4"  onClick={()=>props.click("5")} class={"residencia-accordeon "+ (props.expanded?"expanded":"")}>
   <h2>Penthouse</h2>
   <div className="content">
   <h3>{props.eng==true?"From": "Desde"} $1,780,000.00 USD</h3>
   <h3>{props.eng==true?"Move-in ready units with features:":"Unidades disponibles de entrega inmediata con características:"}</h3>
 
      
   <div className="icons-wrapper">

   <div><img style={{width:"80px", height:"80px"}} alt="Ocean view" src={vistamar}/><span>{props.eng?"Ocean view":"Vista al Mar"}</span></div>


<div>
<img alt="Beachfront view" src={playa}/>
<span>{props.eng?"Beachfront view":"Frente a Playa"}</span></div>


</div>
<HandleImages name="penthouse"/>
<Link to="/residencias/penthouse">  
<button name="ver mas" className="flat-button sand-button centered-button" style={{marginTop:"3em"}}>Ver Mas</button></Link>
</div>
   </div>)
  }




  const Buttons = (props) =>{
    return(  <div className="residencias-buttons-wrapper bg-sand">
       <Link to="/residencias/una-recamara">  <button  onClick={()=>{props.click("1");document.getElementById("r1").scrollIntoView();}}>
              <span>1</span>
              <span>Recámaras</span>
          </button></Link> 

          <Link to="/residencias/dos-recamaras">    <button onClick={()=>{props.click("2");document.getElementById("r2").scrollIntoView();}}>
              <span>2</span>
              <span>Recámaras</span>
          </button></Link> 

          <Link to="/residencias/tres-recamaras">      <button onClick={()=>{props.click("3");document.getElementById("r3").scrollIntoView();}}>
              <span>3</span>
              <span>Recámaras</span>
          </button></Link> 

          <Link to="/residencias/cuatro-recamaras">    <button onClick={()=>{props.click("4");document.getElementById("r4").scrollIntoView();}}>
              <span>4</span>
              <span>Recámaras</span>
          </button></Link> 
          <Link to="/residencias/penthouse">    <button   >
              <span>PH</span>
              <span>Penthouse</span>
          </button></Link> 
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
      expanded5:false,
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
                expanded5:false,
            })
    
        }
    
    
        if(e==2){
            this.setState({
                precio:e,
                expanded1:false,
                expanded2:true,
                expanded3:false,
                expanded4:false,
                expanded5:false,
            })
    
        }
    
        if(e==3){
            this.setState({
                precio:e,
                expanded1:false,
                expanded2:false,
                expanded3:true,
                expanded4:false,
                expanded5:false,
            })
    
        }
    
    
        if(e==4){
            this.setState({
                precio:e,
                expanded1:false,
                expanded2:false,
                expanded3:false,
                expanded4:true,
                expanded5:false,
            })
    
        }
        if(e==5){
          this.setState({
              precio:e,
              expanded1:false,
              expanded2:false,
              expanded3:false,
              expanded4:false,
              expanded5:true,
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
<Residencia5 expanded={this.state.expanded5} click={this.handleExpand}/>
<Buttons click={this.handleRange}/>
            </Layout>)
    }



}

export default Residencias