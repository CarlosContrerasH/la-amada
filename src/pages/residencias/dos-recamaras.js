import React from 'react'

import { Link } from 'gatsby'

import { HandleImages } from "../../components/handleImages"
import Layout from '../../components/Layout'

import vistamar from "../../img/RESIDENCIAS/features/FRENTE-A-PLAYA.svg"
import { useScrollPercentage } from 'react-scroll-percentage'
import FancySlider from "../../components/fancySlider"
import lock from "../../img/RESIDENCIAS/features/LOCK-OFF.svg"
import mar from "../../img/RESIDENCIAS/features/VISTA-MARINA.svg"
import playa from "../../img/RESIDENCIAS/features/VISTA-PLAYA.svg"
import reserva from "../../img/RESIDENCIAS/features/VISTA-RESERVA.svg"

import cocina from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/COCINA.svg"
import lavado from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/CUARTO-LAVADO.svg"
import dorm2 from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/DORMITORIO-2.svg"
import dorm3 from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/DORMITORIO-3.svg"
import dormP from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/DORMITORIO-PRINCIPAL.svg"
import terraza from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/METROS-CUADRADOS-TERRAZA.svg"
import vivienda from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/METROS-CUADRADOS.svg"
import salaComedor from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/SALA-COMEDOR.svg"


import SimpleSlider from "../../components/simpleSlider"

let bigSlider =[ <HandleImages name="dosRecamaras1"/>, <HandleImages name="dosRecamaras2"/>, <HandleImages name="dosRecamaras3"/>, <HandleImages name="dosRecamaras4"/>, <HandleImages name="dosRecamaras5"/>]


let lockSlider =[ <HandleImages name="lock"/>, <HandleImages name="lock2"/>, ]

let iniciales=["BW","BC","RT","RT","C","MD","SY","G","KC","SE","L","CP","CP","VV","KP","S","H","F","BW","BW","P","P","KZ","AV","AV","SC","CM","F","A1","A2","A3","A4","A5","A6","A7","E"]

let descriptions=["Beachwalk","Beachclub","Rooftop","Rooftop","Concierge","Market Deli","Yoga Salon","Gym","Kids Club","Event's Room","Resident's Lounge","Bike & Running Path","Bike & Running Path","V&V Marina Marina","Kayac & Paddel Board","Spa","Heliport","Viewpoint","Beachwalk","Beachwalk","Palapas","Palapas","Kids Zone","Green Areas","Green Areas","Sales Center",
<span>Multipurpose Courts<br/>Paddel Tennis<br/>Tennis<br/>Basketball court<br/>Futball court</span>,

"Lighthouse","Marina View","Beachfront View","Beachfront View","Beachfront View",

<span>Beachfront View<br/>Marina View</span>,

"Marina View","Marina View",

<span>Marina View<br/>Lagoon View</span>]


let descripciones=["Playa","Club de Playa","Rooftop","Rooftop","Lobby y Concierge","Market Deli","Salón de Yoga","Gym","Kids Club","Salón de Eventos","Ludoteca","Ciclopista","Ciclopista","Marina V&V Marina","Kayac y Paddel Board","Spa","Helipuerto","Mirador","Playa","Playa","Palapas","Palapas","Kids Zone","Áreas Verdes","Áreas Verdes","Oficinas de Ventas",

<span>Canchas Multiusos<br/>Paddel Tennis<br/>Tennis<br/>Basketball<br/>Futball</span>,

"Faro","Vista a la Marina","Vista al Mar","Vista al Mar","Vista al Mar",

<span>Vista al Mar<br/>Vista a la Marina</span>,

"Vista a la Marina","Vista a la Marina",


<span>Vista a la Marina<br/>Vista a la Laguna</span>]




const Detalle = (props) => {
    return (<div className={"residencia-accordeon expanded detalle"}>

<h1>{props.eng?(props.lock?"One Bedroom + LockOff":"Two Bedrooms"):(props.lock?"Una Récamara + LockOff":"Dos Recámaras")}</h1>
        <div className="content">
            <h3>{props.eng?"From ":"Desde "}{props.lock?"$535,000.00 USD":"$540,000.00 USD"}</h3>
<h3>{props.eng?"Our luxury two bedroom apratments (with lock-off options) are spacious and offer stunning views of our lagoon, natural reserve, and marina. Fall asleep to the sounds of the ocean in your own piece of heaven.":
"Nuestros departamentos de lujo de dos recámaras con y sin lock-off ofrecen amplios espacios y maravillosas vistas hacia la laguna, reserva natural y hacia la marina. El espacio ideal para vivir en el paraíso."}</h3>

            <div className="icons-wrapper">



{/*<div><img alt="lock" src={mar}/><span>Vista<br/> al mar</span></div>*/}

{props.lock?<div>
<img alt="lock" src={lock}/>
<span>Lock-off</span></div>:<div><img style={{width:"80px", height:"80px"}} alt="Ocean view" src={vistamar}/><span>{props.eng?"Ocean view":"Vista al Mar"}</span></div>
}




<div><img alt="Marinafront view" src={mar}/><span>{props.eng?"Marinafront view":"Vista a la Marina"}</span></div>

{props.lock?<div>
<img alt="lock" src={reserva}/>
<span>{props.eng?"Lagoon View":"Vista a la Laguna"}</span></div>:""
}

</div>



        </div>
    </div>)
}



const FloorPlan = (props) => {
    return (<div className="bg-sand floor-plan">

        <HandleImages name="floorPlan2" />
		<HandleImages name="floorPlan2h" />
    </div>)
}


const LockFloorPlan = (props) => {
    return (<div className="bg-sand floor-plan">

        <HandleImages name="floorPlanl" />
		<HandleImages name="floorPlanlh" />
    </div>)
}


const Features = (props) => {
    return (<div className="features">
        <div className="wrapper">
            <div className="col">
                <div className="feature">
                    <h4>{props.eng?"Living Room":"Sala Comedor"}</h4>
                    <div><img alt="Sala Comedor" src={salaComedor} /><span>29M<sup>2</sup></span><span>312FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                    <h4>{props.eng?"Kitchen":"Cocina"}</h4>
                    <div><img alt="Cocina" src={cocina} /><span>23M<sup>2</sup></span><span>247FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                    <h4>{props.eng?"Master Bedroom":"Dormitorio Principal"}</h4>
                    <div><img alt="Dormitorio Principal" src={dormP} /><span>41M<sup>2</sup></span><span>441FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                <h4>{props.eng?"Bedroom 2":"Dormitorio 2"}</h4>
                    <div><img alt="Sala Comedor" src={dorm2} /><span>29M<sup>2</sup></span><span>312FT<sup>2</sup></span></div>
                </div>
            </div>

            <div className="col">
         
                <div className="feature">
				{props.eng? <h4>House Keeping Bedroom</h4>:    <h4>Habitación de Servicio</h4>}
                    <div><img alt="Sala Comedor" src={lavado} /><span>8M<sup>2</sup></span><span>86FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
				{props.eng? <h4>M<sup>2</sup> Housing</h4>:    <h4>M<sup>2</sup> Vivienda</h4>}
                    <div><img alt="Sala Comedor" src={vivienda} /><span>180M<sup>2</sup></span><span>1,937FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
				{props.eng? <h4>M<sup>2</sup> Porching</h4>: <h4>M<sup>2</sup> Terraza</h4>}
                    <div><img alt="Sala Comedor" src={salaComedor} /><span>40M<sup>2</sup></span><span>430FT<sup>2</sup></span></div>
                </div>
            </div>
     
        </div>
        <div className="buttons">
		<button name="Descargar Plano" className="flat-button sand-button centered-button" style={{ margin: "2em" }}>
					<a style={{textDecoration:"none",color:"inherit"}} href="/img/planos/2/plano.jpg"  target="_blank">{props.eng?"DOWNLOAD FLOORPLAN":"Decargar Plano PDF"}</a>
					</button>


                <button name="Tour Virtual" className="flat-button sand-button centered-button" style={{ margin: "2em" }}>
					<a style={{textDecoration:"none",color:"inherit"}} href="https://my.matterport.com/show/?m=CUXeR6Gmb1R&brand=0&play=0&dh=0&mls=1&mt=0&lang=es">
					{props.eng?"Virtual Tour":"Tour Virtual"}</a>
					</button>
            </div>

    </div>)
}



const LockFeatures = (props) => {
    return (<div className="features">
        <div className="wrapper">
            <div className="col">
                <div className="feature">
                    <h4>{props.eng?"Living Room":"Sala Comedor"}</h4>
                    <div><img alt="Sala Comedor" src={salaComedor} /><span>37M<sup>2</sup></span><span>398FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                    <h4>{props.eng?"Kitchen":"Cocina"}</h4>
                    <div><img alt="Cocina" src={cocina} /><span>9M<sup>2</sup></span><span>96FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                    <h4>{props.eng?"Master Bedroom":"Dormitorio Principal"}</h4>
                    <div><img alt="Dormitorio Principal" src={dormP} /><span>41M<sup>2</sup></span><span>441FT<sup>2</sup></span></div>
                </div>
              
            </div>

            <div className="col">
			<div className="feature">
                <h4>{props.eng?"Bedroom 2":"Dormitorio 2"}</h4>
                    <div><img alt="Sala Comedor" src={dorm2} /><span>41M<sup>2</sup></span><span>441FT<sup>2</sup></span></div>
                </div>
         
                <div className="feature">
				{props.eng? <h4>M<sup>2</sup> Housing</h4>:    <h4>M<sup>2</sup> Vivienda</h4>}
                    <div><img alt="Sala Comedor" src={vivienda} /><span>172M<sup>2</sup></span><span>1,851FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
				{props.eng? <h4>M<sup>2</sup> Porching</h4>: <h4>M<sup>2</sup> Terraza</h4>}
                    <div><img alt="Sala Comedor" src={salaComedor} /><span>66M<sup>2</sup></span><span>710FT<sup>2</sup></span></div>
                </div>
            </div>
     
        </div>
        <div className="buttons">
		<button name="Descargar Plano" className="flat-button sand-button centered-button" style={{ margin: "2em" }}>
					<a style={{textDecoration:"none",color:"inherit"}} href="/img/planos/2/lock.jpg"  target="_blank">{props.eng?"DOWNLOAD FLOORPLAN":"Decargar Plano PDF"}</a>
					</button>
              
			  
					<button name="Tour Virtual" className="flat-button sand-button centered-button" style={{ margin: "2em" }}>
					<a style={{textDecoration:"none",color:"inherit"}} href="https://my.matterport.com/show/?m=CUXeR6Gmb1R&brand=0&play=0&dh=0&mls=1&mt=0&lang=es">
					{props.eng?"Virtual Tour":"Tour Virtual"}</a>
					</button>
			  
			        </div>

    </div>)
}









function getIndex(child){

    var i = 0;
while( (child = child.previousSibling) != null ) 
  i++;
  return  i
}


function handleActive(e){
    var classes=e.target.classList;
    var temp=document.getElementsByClassName('map-click');
    for (var i=0;i<temp.length;i++){
        temp[i].classList.remove('active')

    }
    e.target.classList=classes;
    e.target.classList.toggle('active')
}



const Map = (props) => {
    return (
        <div className="map-wrapper bg-sand">
          
          <div className={"map active"+props.active}>
<HandleImages name="map"/>
       
 
 
<svg version="1.1"  x="0px" y="0px"   viewBox="0 0 763.5 1104.7"  >
<defs><radialGradient id="myGradient"><stop offset="50%" stop-color="#ffffffff"></stop><stop offset="100%" stop-color="#ffffff00"></stop></radialGradient></defs>
 
<rect className="st0" width="763.5" height="1104.7" fill="none"/>
<g>
<circle    className="map-click" id={props.active==1?"active":""}    onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}     cx="231.6" cy="311.7" r="21.9"/>
	<circle className="st1" cx="231.6" cy="311.7" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M224.8,321.9c-1.7,0-3.1-1.4-3.1-3.1v-13.4c0-1.7,1.4-3.1,3.1-3.1h13.5c1.7,0,3.1,1.4,3.1,3.1v13.4
				c0,1.7-1.4,3.1-3.1,3.1H224.8z"/>
		</g>
		<g>
			<path className="st2" d="M224.8,321.9c-1.7,0-3.1-1.4-3.1-3.1v-13.4c0-1.7,1.4-3.1,3.1-3.1h13.5c1.7,0,3.1,1.4,3.1,3.1v13.4
				c0,1.7-1.4,3.1-3.1,3.1H224.8z"/>
		</g>
		<g>
			<path className="st3" d="M229.4,311.7c0.2-0.1,0.3-0.3,0.3-0.4L229,309l0.6-0.2l-0.3,2.7c-0.1,0.8,0.3,1.2,0.4,1.4l2.7,2.4l-0.7,3.3
				c-0.1,0.4-0.1,0.8,0.3,0.9c0,0,0,0,0,0c0.4,0.1,0.8-0.2,0.9-0.6l1-3.7c0.1-0.2,0-0.5-0.1-0.7l-1.9-2.8l0.4-2.4l0.3,0.3
				c0,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.2l2.1,0.9c0.4,0.1,0.5,0,0.6-0.2c0.1-0.1,0.2-0.4-0.2-0.7l-1.9-1l-1.3-1.3
				c-0.2-0.4-0.5-0.7-1-0.8c-0.5-0.1-1,0.1-1.2,0.5l-1.9,0.8c-0.1,0.1-0.2,0.3-0.1,0.4l0.9,2.9c0,0.1,0.1,0.2,0.2,0.3
				C229.1,311.8,229.2,311.8,229.4,311.7"/>
		</g>
		<g>
			<path className="st3" d="M230.3,319.3c0.1-0.1,0.1-0.3,0.2-0.4l0.8-2.8c0.1-0.3,0.1-0.6,0-0.8l-0.1-0.8l-1.2-1
				c-0.2-0.2-0.4-0.4-0.5-0.6l0.5,3l-0.7,2.7c-0.1,0.4,0,0.8,0.4,0.9C230,319.6,230.2,319.5,230.3,319.3"/>
		</g>
	</g>
	<g>
		<path className="st3" d="M231.7,306.7c0.7-0.1,1.1-0.6,1.1-1.3c-0.1-0.7-0.6-1.1-1.3-1.1c-0.7,0.1-1.1,0.6-1.1,1.3
			C230.4,306.2,231,306.7,231.7,306.7"/>
	</g>
</g>
<g >
<circle    className="map-click" id={props.active==2?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}} cx="360" cy="432.1" r="21.9"/>
	<circle className="st1" cx="360" cy="432.1" r="41.9"/>
	<g>
		<path className="st2" d="M353.4,440.8c-1.7,0-3.1-1.4-3.1-3.1v-13.3c0-1.7,1.4-3.1,3.1-3.1h13.3c1.7,0,3.1,1.4,3.1,3.1v13.3
			c0,1.7-1.4,3.1-3.1,3.1H353.4z"/>
	</g>
	<g>
		<polygon className="st3" points="367.3,426.3 358.5,426.3 362.9,423.4 		"/>
	</g>
	<g>
		<polygon className="st3" points="361.5,426.3 352.7,426.3 357.1,423.4 		"/>
	</g>
	<g>
		<polygon className="st3" points="364,426.3 356,426.3 360,423.7 		"/>
	</g>
	<g>
		<rect x="362.2" y="426.1" className="st3" width="0.8" height="3.5"/>
	</g>
	<g>
		<rect x="357" y="426.1" className="st3" width="0.8" height="3.5"/>
	</g>
	<g>
		<rect x="353.9" y="426.1" className="st3" width="0.8" height="3.5"/>
	</g>
	<g>
		<rect x="365.3" y="426.1" className="st3" width="0.8" height="3.5"/>
	</g>
	<g>
		<rect x="359.6" y="426.1" className="st3" width="0.8" height="3.5"/>
	</g>
	<g>
		<polygon className="st3" points="368.9,437.7 351,437.7 353.8,430.2 366.1,430.2 		"/>
	</g>
	<g>
		<path className="st2" d="M365.5,435.4c-0.4,0.2-0.6,0.1-0.8,0.1c-0.2,0-0.3-0.1-0.6,0c-0.3,0.1-0.5,0.2-0.6,0.4
			c-0.2,0.2-0.4,0.4-0.7,0.5c-0.3,0.1-0.5,0-0.7-0.1c-0.2-0.1-0.3-0.2-0.6-0.2c-0.3,0-0.4,0.2-0.6,0.3c-0.2,0.2-0.4,0.4-0.7,0.4
			c-0.3,0-0.5-0.2-0.7-0.4c-0.2-0.2-0.3-0.3-0.6-0.3c-0.3,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.4,0.2-0.7,0.1c-0.3-0.1-0.5-0.3-0.7-0.5
			c-0.2-0.2-0.3-0.3-0.6-0.4c-0.3-0.1-0.5-0.1-0.7,0c-0.2,0-0.5,0.1-0.8-0.1c-0.4-0.2-0.6-0.4-0.8-0.6c-0.2-0.2-0.4-0.3-0.7-0.5
			c-0.1-0.1-0.2-0.2-0.2-0.2s0.2-0.1,0.3,0c0.5,0.2,0.7,0.4,0.9,0.5c0.2,0.2,0.3,0.3,0.6,0.4c0.3,0.1,0.5,0.1,0.6,0.1
			c0.2,0,0.5-0.1,0.9,0c0.4,0.1,0.6,0.3,0.8,0.5c0.2,0.2,0.3,0.3,0.5,0.3c0.2,0.1,0.4,0,0.6-0.1c0.2-0.1,0.4-0.2,0.8-0.2
			c0.4,0,0.6,0.2,0.7,0.4c0.2,0.1,0.3,0.3,0.5,0.3c0.2,0,0.4-0.1,0.5-0.3c0.2-0.2,0.4-0.3,0.7-0.4c0.4,0,0.6,0.1,0.8,0.2
			c0.2,0.1,0.3,0.2,0.6,0.1c0.2-0.1,0.4-0.2,0.6-0.3c0.2-0.2,0.4-0.4,0.8-0.5c0.4-0.1,0.6,0,0.8,0c0.2,0,0.3,0.1,0.6,0
			c0.3-0.1,0.4-0.2,0.5-0.4c0.2-0.2,0.4-0.3,0.8-0.5c0.1,0,0.2,0,0.3,0.1c0,0.1,0,0.2-0.2,0.2c-0.4,0.2-0.5,0.3-0.6,0.4
			C366.1,435,365.9,435.2,365.5,435.4"/>
	</g>
	<g>
		<path className="st2" d="M355.9,436.8c-0.3-0.1-0.4,0-0.6,0.1c-0.2,0-0.5,0.1-0.9-0.1c-0.4-0.2-0.6-0.4-0.8-0.6
			c-0.2-0.2-0.4-0.3-0.8-0.5c-0.1-0.1-0.2-0.2-0.2-0.2c0-0.1,0.2-0.1,0.3,0c0.5,0.2,0.7,0.4,0.9,0.6c0.2,0.2,0.3,0.3,0.6,0.4
			c0.3,0.1,0.5,0.1,0.7,0.1c0.2,0,0.6-0.3,1,0c0.3,0.2,0.7,0.6,1,0.6c0.2,0,0.2,0.3,0,0.3c-0.3,0-0.6-0.1-0.7-0.2
			C356.2,437,355.9,436.8,355.9,436.8"/>
	</g>
	<g>
		<path className="st2" d="M364.4,436.8c0.3-0.1,0.4,0,0.6,0.1c0.2,0,0.5,0.1,0.9-0.1c0.4-0.2,0.6-0.4,0.8-0.6c0.2-0.2,0.4-0.3,0.8-0.5
			c0.1-0.1,0.2-0.2,0.2-0.2c0-0.1-0.2-0.1-0.3,0c-0.5,0.2-0.7,0.4-0.9,0.6c-0.2,0.2-0.3,0.3-0.6,0.4c-0.3,0.1-0.5,0.1-0.7,0.1
			c-0.2,0-0.6-0.3-1,0c-0.3,0.2-0.7,0.6-1,0.6c-0.2,0-0.2,0.3,0.1,0.3c0.3,0,0.6-0.1,0.7-0.2C364.1,437,364.4,436.8,364.4,436.8"/>
	</g>
	<g>
		<path className="st2" d="M365.3,434.2c-0.4,0.1-0.6,0-0.8,0c-0.2-0.1-0.3-0.1-0.6-0.1c-0.3,0.1-0.4,0.2-0.6,0.3
			c-0.2,0.1-0.4,0.3-0.7,0.4c-0.3,0.1-0.5-0.1-0.7-0.2c-0.2-0.1-0.3-0.2-0.6-0.2c-0.3,0-0.4,0.1-0.6,0.3c-0.2,0.1-0.4,0.3-0.7,0.3
			c-0.3,0-0.5-0.2-0.7-0.3c-0.2-0.1-0.3-0.2-0.6-0.3c-0.3,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.4,0.2-0.7,0.2c-0.3-0.1-0.5-0.2-0.7-0.4
			c-0.2-0.1-0.3-0.3-0.6-0.3c-0.3-0.1-0.5,0-0.7,0c-0.2,0.1-0.4,0.1-0.8,0c-0.4-0.1-0.6-0.3-0.7-0.4c-0.2-0.1-0.3-0.2-0.7-0.3
			c-0.1,0-0.2-0.1-0.1-0.2c0-0.1,0.2-0.1,0.3-0.1c0.4,0.1,0.6,0.2,0.8,0.3c0.2,0.1,0.3,0.2,0.6,0.3c0.3,0.1,0.4,0,0.6,0
			c0.2,0,0.5-0.1,0.8-0.1c0.4,0.1,0.6,0.2,0.7,0.3c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0,0.4,0,0.5-0.1c0.2-0.1,0.4-0.2,0.7-0.2
			c0.3,0,0.5,0.2,0.7,0.3c0.2,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2c0.2-0.1,0.4-0.3,0.7-0.3c0.3,0,0.6,0.1,0.7,0.2
			c0.2,0.1,0.3,0.2,0.5,0.1c0.2,0,0.4-0.1,0.5-0.3c0.2-0.1,0.4-0.3,0.7-0.3c0.4-0.1,0.6,0,0.8,0.1c0.2,0.1,0.3,0.1,0.5,0
			c0.3-0.1,0.4-0.1,0.5-0.2c0.2-0.1,0.3-0.2,0.7-0.3c0.1,0,0.2,0,0.3,0.1c0,0.1,0,0.1-0.1,0.2c-0.3,0.1-0.4,0.2-0.6,0.3
			C365.9,434,365.7,434.1,365.3,434.2"/>
	</g>
	<g>
		<path className="st2" d="M365.1,433.2c-0.3,0.1-0.5,0-0.7-0.1c-0.2-0.1-0.3-0.1-0.6-0.1c-0.3,0-0.4,0.1-0.6,0.2
			c-0.2,0.1-0.3,0.2-0.6,0.3c-0.3,0-0.5-0.1-0.7-0.2c-0.2-0.1-0.3-0.2-0.6-0.2c-0.3,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.2-0.6,0.2
			c-0.3,0-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.2-0.6-0.2c-0.3,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.4,0.2-0.7,0.2c-0.3,0-0.5-0.2-0.6-0.3
			c-0.2-0.1-0.3-0.2-0.6-0.2c-0.3,0-0.4,0-0.6,0.1c-0.2,0.1-0.4,0.1-0.7,0.1c-0.3-0.1-0.5-0.2-0.7-0.3c-0.2-0.1-0.3-0.2-0.6-0.2
			c-0.1,0-0.2-0.1-0.1-0.1c0-0.1,0.1-0.1,0.2-0.1c0.4,0,0.5,0.1,0.7,0.2c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4,0,0.6-0.1
			c0.2-0.1,0.4-0.2,0.8-0.1c0.3,0,0.5,0.1,0.7,0.2c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.1c0.2-0.1,0.4-0.2,0.7-0.2
			c0.3,0,0.5,0.1,0.7,0.2c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2c0.2-0.1,0.4-0.2,0.7-0.2c0.3,0,0.5,0.1,0.7,0.2
			c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.4-0.1,0.5-0.2c0.2-0.1,0.4-0.2,0.7-0.2c0.4,0,0.5,0.1,0.7,0.1c0.1,0.1,0.3,0.1,0.5,0.1
			c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.3-0.2,0.7-0.2c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.1-0.1,0.1c-0.3,0-0.4,0.1-0.5,0.2
			C365.6,433.1,365.4,433.2,365.1,433.2"/>
	</g>
	<g>
		<path className="st2" d="M364.8,432.3c-0.3,0-0.5-0.1-0.6-0.1c-0.1-0.1-0.3-0.1-0.5-0.1c-0.3,0-0.4,0.1-0.5,0.2
			c-0.2,0.1-0.3,0.2-0.6,0.2c-0.3,0-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.2-0.5-0.2c-0.3,0-0.4,0.1-0.5,0.2c-0.2,0.1-0.3,0.2-0.6,0.2
			c-0.3,0-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.2-0.5-0.2c-0.3,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.2-0.6,0.2c-0.3,0-0.5-0.1-0.6-0.2
			s-0.3-0.2-0.5-0.2c-0.3,0-0.4,0.1-0.6,0.1c-0.2,0.1-0.4,0.2-0.7,0.1c-0.3,0-0.5-0.1-0.6-0.2c-0.1-0.1-0.3-0.1-0.5-0.1
			c-0.1,0-0.1-0.1-0.1-0.1c0-0.1,0.1-0.1,0.2-0.1c0.3,0,0.5,0.1,0.7,0.1c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.4,0,0.5-0.1
			c0.2-0.1,0.4-0.2,0.7-0.2c0.3,0,0.5,0.1,0.7,0.2c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3-0.1,0.5-0.1c0.2-0.1,0.4-0.2,0.7-0.2
			c0.3,0,0.5,0.1,0.7,0.2c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2c0.2-0.1,0.4-0.2,0.7-0.2c0.3,0,0.5,0.1,0.7,0.2
			c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3-0.1,0.5-0.1c0.2-0.1,0.3-0.2,0.7-0.2c0.3,0,0.5,0.1,0.7,0.2c0.1,0.1,0.2,0.1,0.5,0.1
			c0.2,0,0.3-0.1,0.4-0.1c0.1-0.1,0.3-0.2,0.6-0.2c0.1,0,0.2,0.1,0.2,0.1c0,0.1,0,0.1-0.1,0.1c-0.3,0-0.4,0.1-0.5,0.1
			C365.3,432.2,365.1,432.3,364.8,432.3"/>
	</g>
	<g>
		<path className="st2" d="M364.7,431.4c-0.3,0-0.5-0.1-0.6-0.2c-0.1-0.1-0.2-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.1
			c-0.2,0.1-0.3,0.2-0.6,0.2c-0.3,0-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.1-0.3,0.2-0.6,0.2
			c-0.3,0-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.1-0.3,0.2-0.6,0.2c-0.3,0-0.5-0.1-0.6-0.2
			c-0.2-0.1-0.3-0.1-0.5-0.1c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.1-0.3,0.2-0.6,0.2c-0.3,0-0.5-0.1-0.6-0.1c-0.2-0.1-0.3-0.1-0.5-0.1
			c-0.1,0-0.2-0.1-0.2-0.1c0-0.1,0.1-0.2,0.1-0.2c0.3,0,0.5,0.1,0.7,0.1c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3-0.1,0.5-0.2
			c0.2-0.1,0.3-0.2,0.7-0.2c0.3,0,0.5,0.1,0.7,0.2c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3-0.1,0.5-0.2c0.2-0.1,0.4-0.2,0.7-0.2
			c0.3,0,0.5,0.1,0.7,0.2c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3-0.1,0.5-0.1c0.2-0.1,0.4-0.2,0.7-0.2c0.3,0,0.5,0.1,0.7,0.2
			c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.1c0.2-0.1,0.4-0.2,0.7-0.2c0.3,0,0.5,0.1,0.6,0.2c0.1,0.1,0.2,0.1,0.4,0.2
			c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.3-0.2,0.6-0.1c0.1,0,0.1,0.1,0.1,0.2c0,0.1-0.1,0.1-0.2,0.1c-0.2,0-0.4,0-0.5,0.1
			C365.1,431.3,365,431.4,364.7,431.4"/>
	</g>
</g>

<g>
    
<circle    className="map-click" id={props.active==3?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}} cx="408.4" cy="563.7" r="21.9"/>
	<circle className="st1" cx="408.4" cy="563.7" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M401.8,572.4c-1.6,0-2.9-1.3-2.9-2.9v-12.6c0-1.6,1.3-2.9,2.9-2.9h12.6c1.6,0,2.9,1.3,2.9,2.9v12.6
				c0,1.6-1.3,2.9-2.9,2.9H401.8z"/>
		</g>
		<g>
			<path className="st3" d="M404.4,562.8c0.9,0,1.4,0.4,1.9,0.7c0.4,0.3,0.6,0.4,1,0.4c0.4,0,0.7-0.2,1-0.4c0,0,0,0,0,0l-0.2-1.1
				c0-0.1,0-0.1-0.1-0.1l-1.9-1.9c-0.1-0.1-0.2-0.1-0.3-0.1l-3.1,0.6c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0
				c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0
				c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0l2.9-0.2l0.3,0.5l-4.1,1.1c-0.1,0-0.2,0.1-0.2,0.2
				c0,0.1,0,0.2,0,0.3l0.3,0.4c0.1,0,0.2-0.2,0.3-0.2C403,563.2,403.5,562.8,404.4,562.8"/>
		</g>
		<g>
			<path className="st3" d="M410,561.2c0,0.6-0.5,1-1.1,1c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1C409.5,560.1,410,560.6,410,561.2"/>
		</g>
		<g>
			<path className="st3" d="M412.8,565.5c-0.7,0-1.1-0.3-1.5-0.6c-0.3-0.3-0.6-0.5-1.2-0.5c-0.6,0-0.9,0.3-1.3,0.5
				c-0.4,0.3-0.8,0.6-1.6,0.6c-0.7,0-1.2-0.3-1.6-0.6c-0.4-0.3-0.7-0.5-1.3-0.5c-0.6,0-0.9,0.3-1.3,0.5c-0.4,0.3-0.8,0.6-1.6,0.6
				c-0.7,0-1.1-0.3-1.5-0.6c-0.1-0.1-0.2-0.3-0.1-0.5c0.1-0.1,0.3-0.2,0.5-0.1c0.3,0.3,0.6,0.4,1.1,0.4c0.5,0,0.8-0.2,1.2-0.5
				c0.4-0.3,0.9-0.7,1.7-0.7c0.8,0,1.3,0.4,1.7,0.7c0.4,0.3,0.7,0.5,1.2,0.5c0.5,0,0.8-0.2,1.2-0.5c0.4-0.3,0.9-0.7,1.7-0.7
				c0.8,0,1.3,0.4,1.6,0.7c0.3,0.3,0.5,0.5,1,0.5c0.5,0,0.7-0.2,1-0.5c0.3-0.3,0.8-0.7,1.6-0.7c0.2,0,0.3,0.1,0.3,0.3
				c0,0.2-0.1,0.3-0.3,0.3c-0.6,0-0.9,0.2-1.2,0.5C414,565.1,413.6,565.5,412.8,565.5z"/>
		</g>
		<g>
			<path className="st3" d="M412.8,567.1c-0.7,0-1.1-0.3-1.5-0.6c-0.3-0.3-0.6-0.5-1.2-0.5c-0.6,0-0.9,0.3-1.3,0.5
				c-0.4,0.3-0.8,0.6-1.6,0.6c-0.7,0-1.2-0.3-1.6-0.6c-0.4-0.3-0.7-0.5-1.3-0.5c-0.6,0-0.9,0.3-1.3,0.5c-0.4,0.3-0.8,0.6-1.6,0.6
				c-0.2,0-0.3-0.1-0.3-0.3c0-0.2,0.1-0.3,0.3-0.3c0.5,0,0.8-0.2,1.2-0.5c0.4-0.3,0.9-0.7,1.7-0.7c0.8,0,1.3,0.4,1.7,0.7
				c0.4,0.3,0.7,0.5,1.2,0.5c0.5,0,0.8-0.2,1.2-0.5c0.4-0.3,0.9-0.7,1.7-0.7c0.8,0,1.3,0.4,1.6,0.7c0.3,0.3,0.5,0.5,1,0.5
				c0.5,0,0.7-0.2,1-0.5c0.3-0.3,0.8-0.7,1.6-0.7c0.2,0,0.3,0.1,0.3,0.3c0,0.2-0.1,0.3-0.3,0.3c-0.6,0-0.9,0.2-1.2,0.5
				C414,566.7,413.6,567.1,412.8,567.1z"/>
		</g>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==4?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}} cx="181.4" cy="958.8" r="21.9"/>
	<circle className="st1" cx="181.4" cy="958.8" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M174.2,967.7c-1.6,0-2.9-1.3-2.9-2.9v-12.6c0-1.6,1.3-2.9,2.9-2.9h12.6c1.6,0,2.9,1.3,2.9,2.9v12.6
				c0,1.6-1.3,2.9-2.9,2.9H174.2z"/>
		</g>
		<g>
			<path className="st3" d="M176.8,958c0.9,0,1.4,0.4,1.9,0.7c0.4,0.3,0.6,0.4,1,0.4c0.4,0,0.7-0.2,1-0.4c0,0,0,0,0,0l-0.2-1.1
				c0-0.1,0-0.1-0.1-0.1l-1.9-1.9c-0.1-0.1-0.2-0.1-0.3-0.1l-3.1,0.6c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0
				c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0
				c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0l2.9-0.2l0.3,0.5l-4.1,1.1c-0.1,0-0.2,0.1-0.2,0.2
				c0,0.1,0,0.2,0,0.3l0.3,0.4c0.1,0,0.2-0.2,0.3-0.2C175.4,958.4,175.9,958,176.8,958"/>
		</g>
		<g>
			<path className="st3" d="M182.4,956.5c0,0.6-0.5,1-1.1,1c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1C181.9,955.4,182.4,955.9,182.4,956.5"/>
		</g>
		<g>
			<path className="st3" d="M185.2,960.7c-0.7,0-1.1-0.3-1.5-0.6c-0.3-0.3-0.6-0.5-1.2-0.5c-0.6,0-0.9,0.3-1.3,0.5
				c-0.4,0.3-0.8,0.6-1.6,0.6c-0.7,0-1.2-0.3-1.6-0.6c-0.4-0.3-0.7-0.5-1.3-0.5c-0.6,0-0.9,0.3-1.3,0.5c-0.4,0.3-0.8,0.6-1.6,0.6
				c-0.7,0-1.1-0.3-1.5-0.6c-0.1-0.1-0.2-0.3-0.1-0.5c0.1-0.1,0.3-0.2,0.5-0.1c0.3,0.3,0.6,0.4,1.1,0.4c0.5,0,0.8-0.2,1.2-0.5
				c0.4-0.3,0.9-0.7,1.7-0.7c0.8,0,1.3,0.4,1.7,0.7c0.4,0.3,0.7,0.5,1.2,0.5c0.5,0,0.8-0.2,1.2-0.5c0.4-0.3,0.9-0.7,1.7-0.7
				c0.8,0,1.3,0.4,1.6,0.7c0.3,0.3,0.5,0.5,1,0.5c0.5,0,0.7-0.2,1-0.5c0.3-0.3,0.8-0.7,1.6-0.7c0.2,0,0.3,0.1,0.3,0.3
				c0,0.2-0.1,0.3-0.3,0.3c-0.6,0-0.9,0.2-1.2,0.5C186.4,960.4,186,960.7,185.2,960.7z"/>
		</g>
		<g>
			<path className="st3" d="M185.2,962.4c-0.7,0-1.1-0.3-1.5-0.6c-0.3-0.3-0.6-0.5-1.2-0.5c-0.6,0-0.9,0.3-1.3,0.5
				c-0.4,0.3-0.8,0.6-1.6,0.6c-0.7,0-1.2-0.3-1.6-0.6c-0.4-0.3-0.7-0.5-1.3-0.5c-0.6,0-0.9,0.3-1.3,0.5c-0.4,0.3-0.8,0.6-1.6,0.6
				c-0.2,0-0.3-0.1-0.3-0.3c0-0.2,0.1-0.3,0.3-0.3c0.5,0,0.8-0.2,1.2-0.5c0.4-0.3,0.9-0.7,1.7-0.7c0.8,0,1.3,0.4,1.7,0.7
				c0.4,0.3,0.7,0.5,1.2,0.5c0.5,0,0.8-0.2,1.2-0.5c0.4-0.3,0.9-0.7,1.7-0.7c0.8,0,1.3,0.4,1.6,0.7c0.3,0.3,0.5,0.5,1,0.5
				c0.5,0,0.7-0.2,1-0.5c0.3-0.3,0.8-0.7,1.6-0.7c0.2,0,0.3,0.1,0.3,0.3c0,0.2-0.1,0.3-0.3,0.3c-0.6,0-0.9,0.2-1.2,0.5
				C186.4,962,186,962.4,185.2,962.4z"/>
		</g>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==5?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}} cx="66.9" cy="893.7" r="21.9"/>
	<circle className="st1" cx="66.9" cy="893.7" r="41.9"/>
	<g>
		<path className="st2" d="M60.9,902.2c-1.5,0-2.7-1.2-2.7-2.7v-11.9c0-1.5,1.2-2.7,2.7-2.7h11.9c1.5,0,2.7,1.2,2.7,2.7v11.9
			c0,1.5-1.2,2.7-2.7,2.7H60.9z"/>
	</g>
	<g>
		<path className="st3" d="M66.9,888.7c0.5,0,0.9-0.4,0.9-0.9c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.8,0.4-0.8,0.9
			C66,888.4,66.4,888.7,66.9,888.7"/>
	</g>
	<g>
		<path className="st3" d="M68.5,890c0-0.7-0.1-0.9-1.2-0.9h-0.9c-1.1,0-1.2,0.3-1.2,0.9v2h3.3V890z"/>
	</g>
	<g>
		<polygon className="st3" points="73.4,892.4 60.3,892.4 60.3,893.3 61,893.3 61.3,899.8 72.5,899.8 72.8,893.3 73.4,893.3 		"/>
	</g>
</g>
<g>

<circle    className="map-click" id={props.active==6?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}} cx="43.4" cy="939" r="21.9"/>
	<circle className="st1" cx="43.4" cy="939" r="41.9"/>
	<g>
		<path className="st2" d="M36.9,946.9c-1.5,0-2.7-1.2-2.7-2.7v-11.8c0-1.5,1.2-2.7,2.7-2.7h11.8c1.5,0,2.7,1.2,2.7,2.7v11.8
			c0,1.5-1.2,2.7-2.7,2.7H36.9z"/>
	</g>
	<g>
		<path className="st3" d="M35.7,933.6c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4h2.2l2.1,6.8c0,0.2,0.2,0.3,0.4,0.3H47
			c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4h-6.3l-0.5-1.6h7.3l0.4-0.3l0.8-3.6c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1
			h-9.5l-0.2-0.7l-0.4-0.3H35.7z M47.2,938.3h-7.3l-0.3-1.1h7.8L47.2,938.3z M39.4,936.5l-0.1-0.1l-0.3-0.9h8.8l-0.2,1L39.4,936.5z"
			/>
	</g>
	<g>
		<path className="st3" d="M41.1,941.9c-0.3,0-0.6,0.3-0.6,0.6s0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6S41.5,941.9,41.1,941.9"/>
	</g>
	<g>
		<path className="st3" d="M45.9,941.9c-0.3,0-0.6,0.3-0.6,0.6s0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6S46.2,941.9,45.9,941.9"/>
	</g>
</g>
<g>

<circle    className="map-click" id={props.active==7?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}}  cx="42.7" cy="918.7" r="21.9"/>
	<circle className="st1" cx="42.7" cy="918.7" r="41.9"/>
	<g>
		<path className="st2" d="M36.8,926.2c-1.5,0-2.8-1.2-2.8-2.8v-12c0-1.5,1.2-2.8,2.8-2.8h12c1.5,0,2.8,1.2,2.8,2.8v12
			c0,1.5-1.2,2.8-2.8,2.8H36.8z"/>
	</g>
	<path className="st3" d="M48.3,920L48.3,920c-0.3-0.3-0.7-0.6-1.1-0.8c0.8-0.9,1.1-1.9,1.1-2c0-0.2-0.1-0.3-0.3-0.3
		c-0.6-0.1-1.1-0.2-1.7-0.1c0-0.1,0-0.2,0.1-0.3c0.1-0.7,0-1.3-0.1-2c-0.1-0.2-0.2-0.3-0.4-0.2c-0.6,0.2-1.2,0.5-1.8,0.9
		c-0.3-1-0.9-1.6-1.2-1.9c-0.1-0.1-0.2-0.1-0.2-0.1s-0.2,0-0.2,0.1c-0.3,0.3-0.9,0.9-1.2,1.9c-0.5-0.4-1.1-0.7-1.8-0.9
		c-0.2,0-0.4,0.1-0.4,0.2c-0.1,0.4-0.3,1.3-0.1,2.3c-0.6-0.1-1.1,0-1.7,0.1c-0.2,0-0.3,0.2-0.3,0.3c0,0.1,0.3,1.1,1.1,2
		c-0.4,0.2-0.8,0.5-1.1,0.8c-0.1,0.1-0.1,0.2-0.1,0.2c0,0.1,0,0.2,0.1,0.2c0.8,0.8,1.9,1.2,3,1.2c1,0,2-0.4,2.7-1
		c0.8,0.7,1.7,1,2.7,1c1.1,0,2.2-0.4,3-1.2c0.1-0.1,0.1-0.2,0.1-0.2C48.4,920.2,48.3,920.1,48.3,920L48.3,920z M46.1,917.5
		c0.5-0.1,0.9-0.1,1.4,0c-0.3,0.9-0.9,1.6-1.8,2.1c-0.6,0.3-1.2,0.5-1.8,0.5c1-0.6,1.5-1.4,1.8-1.8C45.9,918,46,917.7,46.1,917.5
		L46.1,917.5z M37.7,917.5c0.5-0.1,0.9-0.1,1.4,0c0.1,0.3,0.2,0.6,0.4,0.8c0.3,0.4,0.8,1.2,1.8,1.8c-0.6,0-1.2-0.2-1.8-0.5
		C38.6,919.1,38,918.3,37.7,917.5L37.7,917.5z M39.8,921.1c-0.8,0-1.6-0.3-2.2-0.8c0.3-0.2,0.6-0.4,0.9-0.5c0.2,0.1,0.4,0.3,0.6,0.4
		c0.4,0.2,1.2,0.6,2.2,0.6C40.8,921,40.3,921.1,39.8,921.1L39.8,921.1z M40,917.9c-0.2-0.4-0.8-1.5-0.5-2.9c0.5,0.2,1,0.5,1.4,0.8
		c-0.1,0.3-0.1,0.7-0.1,1c0,0.5,0.1,1.5,0.7,2.6C40.7,919,40.2,918.3,40,917.9z M42.6,919.8c-1-1.2-1.1-2.4-1.1-2.9
		c0-0.5,0.1-1.8,1.1-2.9c1,1.2,1.1,2.4,1.1,2.9C43.6,917.4,43.6,918.6,42.6,919.8z M44.3,916.9c0-0.4,0-0.7-0.1-1
		c0.4-0.4,0.9-0.6,1.4-0.8c0.3,1.4-0.3,2.5-0.5,2.9c-0.2,0.4-0.7,1-1.5,1.5C44.2,918.4,44.3,917.4,44.3,916.9L44.3,916.9z
		 M45.3,921.1c-0.5,0-1-0.1-1.4-0.3c1,0,1.8-0.4,2.2-0.6c0.2-0.1,0.4-0.3,0.6-0.4c0.3,0.1,0.6,0.3,0.9,0.5
		C46.9,920.8,46.1,921.1,45.3,921.1z"/>
</g>
<g>
<circle    className="map-click" id={props.active==8?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}  cx="97.7" cy="873.8" r="21.9"/>
	<circle className="st1" cx="97.7" cy="873.8" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M91.8,882.5c-1.5,0-2.7-1.2-2.7-2.7v-11.9c0-1.5,1.2-2.7,2.7-2.7h11.9c1.5,0,2.7,1.2,2.7,2.7v11.9
				c0,1.5-1.2,2.7-2.7,2.7H91.8z"/>
		</g>
		<g>
			<path className="st3" d="M94.7,870.9l0.1,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.2-0.1l0.7-1.1l0.7,0.1l-0.5,2.1c-0.1,0.2-0.1,0.4,0,0.6
				c0,0.1,0.1,0.2,0.2,0.3l2.4,1.7l-0.1,2.4c0,0.3,0,0.6,0.3,0.6c0,0,0,0,0,0c0.3,0,0.5-0.2,0.5-0.5l0.2-2.7c0-0.2-0.1-0.3-0.2-0.4
				l-1.7-1.7l0.4-1.9l1,0.4c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2-0.1l1.1-1.2c0.1-0.1,0.1-0.3,0-0.4l-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.1
				c-0.1,0-0.2,0-0.2,0.1l-0.9,1l-0.9-0.5c-0.1-0.3-0.3-0.5-0.7-0.6c-0.3-0.1-0.7,0-0.9,0.3l-1.3,0c-0.1,0-0.2,0.1-0.3,0.2l-0.7,1.4
				c0,0.1,0,0.2,0,0.2C94.6,870.8,94.6,870.9,94.7,870.9"/>
		</g>
		<g>
			<path className="st3" d="M93.4,876.4c0.1,0,0.2-0.1,0.3-0.1l2.6-1c0.2-0.1,0.3-0.2,0.3-0.3l0.4-1.4l-0.8-0.6
				c-0.1-0.1-0.2-0.2-0.2-0.3l-0.4,1.9l-2.2,1c-0.3,0.1-0.4,0.4-0.3,0.6C93.1,876.4,93.3,876.4,93.4,876.4"/>
		</g>
		<g>
			<path className="st3" d="M102.1,879.5h-3.6l3.2-0.3c0.4,0,0.6-0.4,0.6-0.7c0-0.4-0.3-0.6-0.7-0.6l-0.4,0l2.6-7.3l1-0.4
				c0.2-0.1,0.3-0.2,0.2-0.4c-0.1-0.2-0.2-0.3-0.4-0.2l-0.1,0l0.5-0.5c0.2-0.2,0.2-0.4,0-0.6c-0.2-0.2-0.4-0.2-0.6,0l-1.2,1.2
				c0,0-0.1,0.1-0.1,0.1l-0.1,0.2l-2.2,0.8c-0.2,0.1-0.3,0.2-0.2,0.4c0,0.1,0.2,0.2,0.3,0.2c0,0,0.1,0,0.1,0l1.7-0.6l-2.5,7
				c0,0,0,0,0,0l-9.2,0.8c-0.3,0-0.6,0.3-0.6,0.7v0.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.3,0.2,0.4,0.2c0,0,0,0,0.1,0l4.6-0.5
				c0,0,0,0.1,0,0.1c0,0.2,0.2,0.4,0.4,0.4h5.8c0.2,0,0.4-0.2,0.4-0.4C102.5,879.6,102.3,879.5,102.1,879.5"/>
		</g>
	</g>
	<g>
		<path className="st3" d="M98.1,868.5c0.5,0,0.8-0.4,0.8-0.8c0-0.5-0.4-0.8-0.8-0.8c-0.5,0-0.8,0.4-0.8,0.8
			C97.3,868.2,97.7,868.5,98.1,868.5"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==9?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}  cx="77.8" cy="912.5" r="21.9"/>
	<circle className="st1" cx="77.8" cy="912.5" r="41.9"/>
	<g>
		<g>
			<g>
				<path className="st2" d="M72.4,921.8c-1.5,0-2.7-1.2-2.7-2.7v-11.9c0-1.5,1.2-2.7,2.7-2.7h11.9c1.5,0,2.7,1.2,2.7,2.7v11.9
					c0,1.5-1.2,2.7-2.7,2.7H72.4z"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			<path className="st3" d="M84.3,910.2l-0.2-0.3c-0.8-1.2-2.1-1.9-3.5-1.9h-0.7c-0.4,0-0.8,0.3-1,0.7h-1.5c-0.1-0.4-0.5-0.7-1-0.7h-0.7
				c-0.3-0.4-0.8-0.7-1.4-0.7H73c-0.2,0-0.3,0.2-0.3,0.3c0,0.8,0.6,1.5,1.4,1.7v0.7h-1c-0.2,0-0.3,0.2-0.3,0.3
				c0,0.2,0.2,0.3,0.3,0.3h1v0.7c-0.8,0.2-1.4,0.8-1.4,1.7c0,0.2,0.2,0.3,0.3,0.3h1.4c0.6,0,1-0.3,1.4-0.7l0,0h1.7v1.4
				c-0.7,0.1-1.2,0.7-1.3,1.3h-0.4c-0.9,0-1.7,0.8-1.7,1.7c0,0.2,0.2,0.3,0.3,0.3h6.8c0.2,0,0.3-0.2,0.3-0.3c0-0.9-0.8-1.7-1.7-1.7
				h-0.4c-0.1-0.7-0.7-1.2-1.3-1.3v-1.4h2.4c1.4,0,2.7-0.7,3.5-1.9l0.2-0.3C84.3,910.5,84.3,910.4,84.3,910.2z M77.5,909.4h1.4v0.3
				c0,0.2-0.2,0.3-0.3,0.3h-0.7c-0.2,0-0.3-0.2-0.3-0.3V909.4z M73.4,908.1h1c0.4,0,0.8,0.3,1,0.7h-1
				C74,908.7,73.6,908.4,73.4,908.1z M74.4,912.8h-1c0.1-0.4,0.5-0.7,1-0.7h1C75.3,912.5,74.9,912.8,74.4,912.8z M79.9,916.2
				c0.4,0,0.8,0.3,1,0.7h-6c0.1-0.4,0.5-0.7,1-0.7C76.3,916.2,79.4,916.2,79.9,916.2z M78.8,915.5h-1.9c0.1-0.4,0.5-0.7,1-0.7
				S78.7,915.1,78.8,915.5z M80.2,912.1h-4.1c0-0.1,0-0.2,0-0.3c0-0.2-0.2-0.3-0.3-0.3h-1v-0.7h1c0.2,0,0.3-0.2,0.3-0.3
				c0-0.2-0.2-0.3-0.3-0.3h-1v-0.7h1c0.2,0,0.3-0.2,0.3-0.3c0-0.1,0-0.2,0-0.3h0.4c0.2,0,0.3,0.2,0.3,0.3v0.7c0,0.6,0.5,1,1,1h0.7
				c0.6,0,1-0.5,1-1v-0.7c0-0.2,0.2-0.3,0.3-0.3h0.4V912.1z M83.5,910.6c-0.6,0.9-1.5,1.4-2.6,1.5v-3.4c1,0.1,2,0.7,2.6,1.5l0.1,0.2
				L83.5,910.6z"/>
		</g>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==10?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="97.9" cy="893.5" r="21.9"/>
	<circle className="st1" cx="97.9" cy="893.5" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M91.8,902.1c-1.5,0-2.7-1.2-2.7-2.7v-11.9c0-1.5,1.2-2.7,2.7-2.7h11.9c1.5,0,2.7,1.2,2.7,2.7v11.9
				c0,1.5-1.2,2.7-2.7,2.7H91.8z"/>
		</g>
	</g>
	<g>
		<path className="st3" d="M97.6,889.7c0-1.8-1.2-3.2-2.7-3.2s-2.7,1.4-2.7,3.2c0,1.5,0.9,2.8,2.2,3.1l-0.1,0.1c-0.1,0.1-0.1,0.3,0,0.4
			c0.1,0.1,0.1,0.1,0.2,0.1s0.1,0,0.2-0.1l0,0v6.7c0,0.1,0.1,0.3,0.3,0.3c0.1,0,0.3-0.1,0.3-0.3v-6.8l0,0c0.1,0.1,0.1,0.1,0.2,0.1
			s0.1,0,0.2-0.1c0.1-0.1,0.1-0.3,0-0.4l-0.1-0.1C96.7,892.5,97.6,891.2,97.6,889.7z M94.9,892.3c-1.2,0-2.2-1.2-2.2-2.7
			c0-1.5,1-2.7,2.2-2.7c1.2,0,2.2,1.2,2.2,2.7C97.1,891.1,96.1,892.3,94.9,892.3z"/>
		<path className="st3" d="M94.9,887.5c-0.1,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3c0.7,0,1.3,0.7,1.3,1.6c0,0.1,0.1,0.3,0.3,0.3
			c0.1,0,0.3-0.1,0.3-0.3C96.7,888.5,95.9,887.5,94.9,887.5z"/>
		<path className="st3" d="M102.7,889.9c-0.2-0.7-0.6-1.2-1.2-1.4c-0.3-0.1-0.5-0.2-0.8-0.2c-1,0-1.9,0.7-2.4,1.7
			c-0.3,0.6-0.4,1.4-0.2,2c0.1,0.5,0.4,0.8,0.7,1.1l0,0c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0,0,0,0l-1.9,4
			c-0.1,0.1,0,0.3,0.1,0.3c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.2-0.1l1.9-4c0,0.1,0.1,0.1,0.2,0.1c0,0,0.1,0,0.1,0
			c0.1-0.1,0.2-0.2,0.2-0.3l0,0c0.1,0,0.2,0,0.3,0c1,0,1.9-0.7,2.4-1.7C102.9,891.2,102.9,890.5,102.7,889.9z M102.1,891.7
			c-0.4,0.8-1.1,1.4-1.9,1.4c-0.2,0-0.4,0-0.6-0.1c-0.4-0.2-0.7-0.6-0.9-1.1c-0.1-0.5-0.1-1.1,0.2-1.6c0.4-0.8,1.1-1.4,1.9-1.4
			c0.2,0,0.4,0,0.6,0.1c0.4,0.2,0.7,0.6,0.9,1.1C102.4,890.5,102.3,891.1,102.1,891.7z"/>
		<path className="st3" d="M101.2,889.4c-0.1-0.1-0.3,0-0.3,0.1c-0.1,0.1,0,0.3,0.1,0.3c0.5,0.2,0.6,0.9,0.4,1.5c-0.1,0.1,0,0.3,0.1,0.3
			c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.2-0.2C102.2,890.7,101.9,889.7,101.2,889.4z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==11?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}  cx="98.2" cy="913.1" r="21.9"/>
	<circle className="st1" cx="98.2" cy="913.1" r="41.9"/>
	<g>
		<g>
			<g>
				<path className="st2" d="M92.3,921.8c-1.5,0-2.7-1.2-2.7-2.7v-11.9c0-1.5,1.2-2.7,2.7-2.7h11.9c1.5,0,2.7,1.2,2.7,2.7V919
					c0,1.5-1.2,2.7-2.7,2.7H92.3z"/>
			</g>
		</g>
	</g>
	<g>
		<path className="st3" d="M102.9,907.7H93c-0.4,0-0.7,0.3-0.7,0.7v6.5c0,0.4,0.3,0.7,0.7,0.7h3.2v1.6h-1.8c-0.2,0-0.3,0.1-0.3,0.3
			c0,0.2,0.1,0.3,0.3,0.3h7c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3h-1.8v-1.6h3.2c0.4,0,0.7-0.3,0.7-0.7v-6.5
			C103.5,908,103.2,907.7,102.9,907.7z M99,917.2h-2.1v-1.6H99V917.2z M102.9,914.9c-0.3,0-9.7,0-9.9,0v-6.5h9.9
			C102.9,915,102.9,914.9,102.9,914.9z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==12?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}  cx="189.3" cy="1020.8" r="21.9"/>
	<circle className="st1" cx="189.3" cy="1020.8" r="41.9"/>
	<g>
		<path className="st2" d="M179.6,1034.9c-2.4,0-4.3-1.9-4.3-4.3v-18.9c0-2.4,1.9-4.3,4.3-4.3h18.9c2.4,0,4.3,1.9,4.3,4.3v18.9
			c0,2.4-1.9,4.3-4.3,4.3H179.6z"/>
	</g>
	<g>
		<path className="st3" d="M195.8,1023.4c-0.3,0-0.5,0-0.8,0.1l-1.6-5c-0.1-0.2-0.2-0.3-0.5-0.3h-1.1c-0.1-0.3-0.4-0.5-0.7-0.5
			c0,0-0.4,0-0.8-0.3c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-2.6-1.2-3.2c-0.6-0.2-1.8-0.6-2-0.6c-0.2,0-0.4,0-0.6,0.1
			c-0.2,0.1-0.8,0.5-1.2,1c-0.7,0.8-1.8,3.5-1.9,4.5c-0.1,0.5,0.2,0.9,0.5,1.1c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.3,0.2,0.5,0.5,0.5h0.9
			l0.4,0.9l-1.5,2.1c-0.6-0.3-1.3-0.5-2-0.5c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2c2.1,0,3.9-1.6,4.2-3.7h2.6
			c0,0,0.2,0,0.3,0.1h0.1c0.5,0,0.9-0.4,1-0.9c0-0.2,0-0.3,0-0.5l3.6-3.9l0.3,1c-1.5,0.7-2.5,2.1-2.5,3.8c0,2.3,1.9,4.2,4.2,4.2
			c2.3,0,4.2-1.9,4.2-4.2C200,1025.2,198.1,1023.4,195.8,1023.4 M186.8,1020.8c0,0,0.1,0,0.1,0c0.6,0.2,1.1,0.5,1.5,0.6h-2l-0.3-0.6
			H186.8z M182.1,1030.8c-1.8,0-3.2-1.5-3.2-3.2c0-1.8,1.5-3.2,3.2-3.2c0.5,0,1,0.1,1.4,0.3l-1.8,2.6c-0.1,0.1-0.1,0.3,0,0.5
			c0.1,0.2,0.2,0.3,0.4,0.3h3.2C185,1029.6,183.7,1030.8,182.1,1030.8 M183,1027.1l1.3-1.9c0.5,0.5,0.9,1.1,1,1.9H183z
			 M186.2,1027.1c-0.1-1.1-0.6-2-1.4-2.7l1.1-1.7l2,4.4H186.2z M188.3,1025.5l-1.5-3.2h1.7C188.5,1023.2,188.4,1024.4,188.3,1025.5
			 M190.3,1025.1c0.1-0.9,0.1-1.9,0.2-2.8h2.4L190.3,1025.1z M190.5,1021.4c0-0.2,0-0.3,0-0.5c-0.1-0.4-0.2-1.1-3.2-2.1
			c0.3-0.8,0.9-1.9,1.5-2.6c0,0.2,0,0.4-0.1,0.7c-0.1,0.6-0.2,1.3,0.4,1.7c1,0.7,1.9,0.8,2,0.8h0c0.2,0,0.5-0.1,0.6-0.3h0.9l0.7,2.3
			H190.5z M195.8,1030.8c-1.8,0-3.2-1.5-3.2-3.2c0-1.3,0.7-2.4,1.8-2.9l1,3c0.1,0.2,0.2,0.3,0.5,0.3c0,0,0.1,0,0.1,0
			c0.2-0.1,0.4-0.3,0.3-0.6l-1-3c0.2,0,0.3,0,0.5,0c1.8,0,3.2,1.5,3.2,3.2C199,1029.3,197.6,1030.8,195.8,1030.8"/>
	</g>
	<g>
		<path className="st3" d="M187.5,1010.3c0.5-1,1.6-1.4,2.6-1c1,0.5,1.4,1.6,1,2.6c-0.5,1-1.6,1.4-2.6,1
			C187.5,1012.4,187.1,1011.3,187.5,1010.3"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==13?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}  cx="609.9" cy="911.7" r="21.9"/>
	<circle className="st1" cx="609.9" cy="911.7" r="41.9"/>
	<g>
		<path className="st2" d="M600.2,925.5c-2.4,0-4.3-1.9-4.3-4.3v-18.9c0-2.4,1.9-4.3,4.3-4.3h18.9c2.4,0,4.3,1.9,4.3,4.3v18.9
			c0,2.4-1.9,4.3-4.3,4.3H600.2z"/>
	</g>
	<g>
		<path className="st3" d="M616.4,914c-0.3,0-0.5,0-0.8,0.1l-1.6-5c-0.1-0.2-0.2-0.3-0.5-0.3h-1.1c-0.1-0.3-0.4-0.5-0.7-0.5
			c0,0-0.4,0-0.8-0.3c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-2.6-1.2-3.2c-0.6-0.2-1.8-0.6-2-0.6c-0.2,0-0.4,0-0.6,0.1
			c-0.2,0.1-0.8,0.5-1.2,1c-0.7,0.8-1.8,3.5-1.9,4.5c-0.1,0.5,0.2,0.9,0.5,1.1c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.3,0.2,0.5,0.5,0.5h0.9
			l0.4,0.9l-1.5,2.1c-0.6-0.3-1.3-0.5-2-0.5c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2c2.1,0,3.9-1.6,4.2-3.7h2.6
			c0,0,0.2,0,0.3,0.1h0.1c0.5,0,0.9-0.4,1-0.9c0-0.2,0-0.3,0-0.5l3.6-3.9l0.3,1c-1.5,0.7-2.5,2.1-2.5,3.8c0,2.3,1.9,4.2,4.2,4.2
			s4.2-1.9,4.2-4.2C620.6,915.9,618.7,914,616.4,914 M607.3,911.5c0,0,0.1,0,0.1,0c0.6,0.2,1.1,0.5,1.5,0.6h-2l-0.3-0.6H607.3z
			 M602.6,921.4c-1.8,0-3.2-1.5-3.2-3.2c0-1.8,1.5-3.2,3.2-3.2c0.5,0,1,0.1,1.4,0.3l-1.8,2.6c-0.1,0.1-0.1,0.3,0,0.5
			c0.1,0.2,0.2,0.3,0.4,0.3h3.2C605.6,920.2,604.3,921.4,602.6,921.4 M603.5,917.7l1.3-1.9c0.5,0.5,0.9,1.1,1,1.9H603.5z
			 M606.8,917.7c-0.1-1.1-0.6-2-1.4-2.7l1.1-1.7l2,4.4H606.8z M608.9,916.2l-1.5-3.2h1.7C609.1,913.8,609,915,608.9,916.2
			 M610.9,915.8c0.1-0.9,0.1-1.9,0.2-2.8h2.4L610.9,915.8z M611.1,912c0-0.2,0-0.3,0-0.5c-0.1-0.4-0.2-1.1-3.2-2.1
			c0.3-0.8,0.9-1.9,1.5-2.6c0,0.2,0,0.4-0.1,0.7c-0.1,0.6-0.2,1.3,0.4,1.7c1,0.7,1.9,0.8,2,0.8h0c0.2,0,0.5-0.1,0.6-0.3h0.9l0.7,2.3
			H611.1z M616.4,921.4c-1.8,0-3.2-1.5-3.2-3.2c0-1.3,0.7-2.4,1.8-2.9l1,3c0.1,0.2,0.2,0.3,0.5,0.3c0,0,0.1,0,0.1,0
			c0.2-0.1,0.4-0.3,0.3-0.6l-1-3c0.2,0,0.3,0,0.5,0c1.8,0,3.2,1.5,3.2,3.2C619.6,920,618.2,921.4,616.4,921.4"/>
	</g>
	<g>
		<path className="st3" d="M608.1,900.9c0.5-1,1.6-1.4,2.6-1c1,0.5,1.4,1.6,1,2.6c-0.5,1-1.6,1.4-2.6,1
			C608.1,903.1,607.7,901.9,608.1,900.9"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==14?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="608" cy="593.8"  r="21.9"/>
	<circle className="st1" cx="608" cy="593.8" r="41.9"/>
	<g>
		<g>
			<g>
				<path className="st2" d="M598,608.4c-2.4,0-4.3-1.9-4.3-4.4v-18.9c0-2.4,1.9-4.3,4.3-4.3h18.9c2.4,0,4.3,1.9,4.3,4.3v18.9
					c0,2.4-1.9,4.4-4.3,4.4H598z"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			<path className="st3" d="M618.5,600c-0.7,0-1.3-0.3-1.9-0.8l2.5-5c0.1-0.2,0.1-0.4,0-0.6c-0.1-0.2-0.3-0.3-0.6-0.3h-5.1l-2.9-4.1
				c0,0,0,0,0,0V589c0-1.5-1.2-2.7-2.7-2.7h-6.1c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h0.6v1.3h-0.6c-0.3,0-0.6,0.3-0.6,0.6
				l-0.4,3.8h-1.2c-0.7,0-1.2,0.5-1.3,1.2l-0.3,2.5h-0.5c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h0.3l-0.1,1.2c0,0,0,0,0,0
				c0,0.2,0,0.4,0.1,0.6c-0.1,0-0.2,0-0.3,0c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.9,0,1.8-0.3,2.6-1c0.8,0.7,1.7,1,2.6,1
				c0.9,0,1.8-0.3,2.6-1c0.8,0.7,1.7,1,2.6,1c0.9,0,1.8-0.3,2.6-1c0.8,0.7,1.7,1,2.6,1c0.9,0,1.8-0.3,2.6-1c0.8,0.7,1.7,1,2.6,1
				c0.4,0,0.7-0.3,0.7-0.7C619.2,600.3,618.9,600,618.5,600z M603.7,587.5h4.1c0.7,0,1.3,0.6,1.4,1.3h-5.5V587.5z M602.4,590.1h7.3
				l0.4,0.6h-7.8L602.4,590.1z M602.2,592h8.7c0,0,0.1,0,0.1,0l0.8,1.2H602L602.2,592z M615.1,599.2c-0.6,0.5-1.2,0.8-1.9,0.8
				c-0.7,0-1.4-0.3-1.9-0.8c-0.4-0.4-1-0.4-1.4,0c-0.6,0.6-1.3,0.8-1.9,0.8c-0.7,0-1.4-0.3-1.9-0.8c-0.4-0.4-1-0.4-1.4,0
				c-0.6,0.6-1.3,0.8-1.9,0.8c-0.7,0-1.4-0.3-1.9-0.8c-0.4-0.4-1-0.4-1.4,0c-0.1,0.1-0.3,0.2-0.4,0.3l0.5-4.9h17.9L615.1,599.2z"/>
		</g>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==15?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}  cx="440.2" cy="356.2" r="21.9"/>
	<circle className="st1" cx="440.2" cy="356.2" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M433.9,365.7c-1.6,0-2.9-1.3-2.9-2.9v-12.7c0-1.6,1.3-2.9,2.9-2.9h12.7c1.6,0,2.9,1.3,2.9,2.9v12.7
				c0,1.6-1.3,2.9-2.9,2.9H433.9z"/>
		</g>
		<g>
			<path className="st3" d="M445.4,358.4c-0.3,0-0.6,0.1-0.9,0.2c-0.3,0.1-0.6,0.2-0.9,0.2c-0.3,0-0.6-0.1-0.9-0.2
				c-0.3-0.1-0.6-0.2-0.9-0.2c-0.3,0-0.6,0.1-0.9,0.2c-0.3,0.1-0.6,0.2-0.9,0.2c-0.3,0-0.6-0.1-0.9-0.2c-0.3-0.1-0.6-0.2-0.9-0.2
				s-0.6,0.1-0.9,0.2c-0.3,0.1-0.6,0.2-0.9,0.2c-0.3,0-0.6-0.1-0.9-0.2c-0.3-0.1-0.6-0.2-0.9-0.2c-0.3,0-0.6,0.1-0.9,0.2
				c-0.3,0.1-0.6,0.2-0.9,0.2v1.3c0.3,0,0.6-0.1,0.9-0.2c0.3-0.1,0.6-0.2,0.9-0.2c0.3,0,0.6,0.1,0.9,0.2c0.2,0.1,0.5,0.2,0.7,0.2
				l-1.1,1.1c-0.4-0.2-0.8-0.2-1.1,0.1l-1.3,1.3c-0.4,0.4-0.4,0.9,0,1.3c0.4,0.4,0.9,0.4,1.3,0l1.3-1.3c0.3-0.3,0.3-0.7,0.2-1.1
				l1.5-1.5c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,0.9-0.2s0.6,0.1,0.9,0.2c0.3,0.1,0.6,0.2,0.9,0.2c0.3,0,0.6-0.1,0.9-0.2
				c0.3-0.1,0.6-0.2,0.9-0.2c0.3,0,0.6,0.1,0.9,0.2c0.3,0.1,0.6,0.2,0.9,0.2c0.3,0,0.6-0.1,0.9-0.2c0.3-0.1,0.6-0.2,0.9-0.2
				c0.3,0,0.6,0.1,0.9,0.2c0.3,0.1,0.6,0.2,0.9,0.2v-1.3c-0.3,0-0.6-0.1-0.9-0.2C446.1,358.4,445.8,358.4,445.4,358.4"/>
		</g>
		<g>
			<path className="st3" d="M446.1,351.8l1.3-1.3c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-0.9-0.4-1.3,0l-1.3,1.3c-0.3,0.3-0.3,0.8-0.1,1.1
				l-1.6,1.6l-3.1-1.2c-0.1,0-0.2-0.1-0.3-0.1c-0.7-0.2-1.4,0.2-1.6,0.9l-1,3.2c0,0,0,0.1,0,0.1h-4.3v1.7c0.2,0,0.5-0.1,0.7-0.1
				c0.3-0.2,0.7-0.2,1.1-0.2c0.4,0,0.8,0.1,1.1,0.2c0.2,0.1,0.5,0.2,0.7,0.2c0.2,0,0.5,0,0.7-0.1c0.4-0.2,0.7-0.2,1.1-0.2
				c0.4,0,0.8,0.1,1.1,0.2c0.2,0.1,0.5,0.2,0.7,0.2c0.2,0,0.5,0,0.7-0.1c0.3-0.2,0.7-0.2,1.1-0.2c0.4,0,0.8,0.1,1.1,0.2
				c0.2,0.1,0.5,0.2,0.7,0.2c0.2,0,0.5-0.1,0.7-0.1c0.3-0.2,0.7-0.2,1.1-0.2c0.1,0,0.3,0,0.6-0.2c0.5-0.2,0.6-0.3,1-0.6
				c0.3-0.2,0.6-0.6-0.1-0.6c-0.2,0-6.1,0-6.1,0l1.8-1.8l0.2,0.1c0.3,0.1,0.7,0,0.8-0.4c0.1-0.2,0-0.5-0.1-0.6l1.5-1.5
				C445.3,352.2,445.8,352.1,446.1,351.8 M440.2,356.2h-0.4l0.8-2.6l1.6,0.6L440.2,356.2z"/>
		</g>
		<g>
			<path className="st3" d="M440.1,350.4l-0.2,0.4c-0.1,0.2-0.3,0.4-0.6,0.4H439c0.2,0.3,0.6,0.5,1,0.5c0.7,0,1.2-0.5,1.2-1.2v-0.1
				L440.1,350.4C440.2,350.4,440.2,350.4,440.1,350.4"/>
		</g>
	</g>
	<g>
		<path className="st3" d="M439.4,350.8c0.1,0,0.3-0.1,0.3-0.2l0.2-0.4c0.1-0.1,0.2-0.2,0.3-0.2h1.3c-0.2-0.7-0.8-1.1-1.5-1.1
			c-0.8,0-1.5,0.7-1.5,1.5c0,0.1,0,0.3,0.1,0.4H439.4z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==16?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}} cx="159.8" cy="754.7" r="21.9"/>
	<circle className="st1" cx="159.8" cy="754.7" r="41.9"/>
	<g>
		<g>
			<g>
				<path className="st2" d="M150.9,767c-2.4,0-4.3-1.9-4.3-4.4v-18.9c0-2.4,1.9-4.3,4.3-4.3h18.9c2.4,0,4.3,1.9,4.3,4.3v18.9
					c0,2.4-1.9,4.4-4.3,4.4H150.9z"/>
			</g>
		</g>
	</g>
	<g>
		<path className="st3" d="M156.1,755.9c0,0.6-0.2,1.2-0.7,1.6c-0.3,0.3-0.8,0.5-1.4,0.6c-0.3,0.1-0.7,0.1-1.1,0.1c-0.8,0-1.4-0.1-2-0.4
			c-0.4-0.2-0.8-0.5-1-0.9c-0.3-0.4-0.4-0.8-0.4-1.3l1.9-0.1c0.1,0.5,0.3,0.9,0.6,1.2c0.2,0.2,0.5,0.3,0.8,0.3
			c0.4,0,0.8-0.2,1.1-0.4c0.1-0.1,0.2-0.3,0.2-0.6c0-0.4-0.3-0.8-0.8-1.1c-0.4-0.3-1-0.6-1.8-1.2c-0.7-0.4-1.1-0.8-1.4-1.2
			c-0.3-0.4-0.4-0.8-0.4-1.3c0-0.8,0.4-1.5,1.2-1.9c0.5-0.3,1.1-0.4,1.9-0.4c0.7,0,1.3,0.1,1.8,0.3c0.4,0.2,0.7,0.4,1,0.7
			c0.2,0.3,0.4,0.7,0.4,1.1l-1.9,0.2c-0.1-0.4-0.2-0.7-0.5-0.9c-0.2-0.2-0.4-0.2-0.8-0.2c-0.4,0-0.6,0.1-0.8,0.3
			c-0.2,0.2-0.2,0.4-0.2,0.7c0,0.4,0.3,0.8,0.8,1.3c0.2,0.2,0.5,0.4,0.9,0.6c0.5,0.3,0.8,0.5,0.9,0.6c0.5,0.3,0.9,0.7,1.1,1
			c0.1,0.2,0.2,0.3,0.3,0.4C156,755.4,156.1,755.7,156.1,755.9z"/>
		<path className="st3" d="M161,749c1,0,1.8,0.2,2.3,0.6c0.5,0.4,0.8,0.9,0.8,1.5v1.3c0,0.6-0.3,1.1-0.9,1.5c-0.6,0.4-1.4,0.6-2.2,0.6
			h-1.2v3.5h-2V749H161z M162.1,751.2c0-0.2-0.1-0.4-0.3-0.6c-0.2-0.1-0.5-0.2-0.8-0.2h-1.2v2.9h1.2c0.3,0,0.6-0.1,0.8-0.2
			c0.2-0.2,0.3-0.3,0.3-0.6V751.2z"/>
		<path className="st3" d="M167,756.1l-0.5,2.1h-2.1l2.3-9.2h2.8l2.2,9.2h-2.1l-0.5-2.1H167z M168,751.1l-0.7,3.6h1.5L168,751.1z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==17?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}} cx="520.3" cy="955.4" r="21.9"/>
	<circle className="st1" cx="520.3" cy="955.4" r="41.9"/>
	<g>
		<g>
			<g>
				<path className="st2" d="M510.7,969.7c-2.4,0-4.3-1.9-4.3-4.4v-18.9c0-2.4,1.9-4.3,4.3-4.3h18.9c2.4,0,4.3,1.9,4.3,4.3v18.9
					c0,2.4-1.9,4.4-4.3,4.4H510.7z"/>
			</g>
		</g>
	</g>
	<g>
		<path className="st3" d="M518.1,956.7v7.1h-3.7V947h3.7v7.1h4.4V947h3.7v16.8h-3.7v-7.1H518.1z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==18?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}} cx="538" cy="998.4" r="21.9"/>
	<circle className="st1" cx="538" cy="998.4" r="41.9"/>
	<g>
		<g>
			<g>
				<path className="st2" d="M528.5,1012.2c-2.4,0-4.3-1.9-4.3-4.4V989c0-2.4,1.9-4.3,4.3-4.3h18.9c2.4,0,4.3,1.9,4.3,4.3v18.9
					c0,2.4-1.9,4.4-4.3,4.4H528.5z"/>
			</g>
		</g>
	</g>
	<path className="st3" d="M538,991.8c-4.4,0-8.2,2.8-9.7,6.6c1.5,3.9,5.3,6.6,9.7,6.6c4.4,0,8.2-2.8,9.7-6.6
		C546.2,994.5,542.4,991.8,538,991.8z M538,1002.8c-2.4,0-4.4-2-4.4-4.4s2-4.4,4.4-4.4c2.4,0,4.4,2,4.4,4.4S540.4,1002.8,538,1002.8
		z M538,995.8c-1.5,0-2.7,1.2-2.7,2.7c0,1.5,1.2,2.7,2.7,2.7c1.5,0,2.7-1.2,2.7-2.7C540.6,996.9,539.4,995.8,538,995.8z"/>
</g>
<g>
<circle    className="map-click" id={props.active==19?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}  cx="579.4" cy="312" r="21.9"/>
	<circle className="st1" cx="579.4" cy="312" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M572.6,321.9c-1.7,0-3.1-1.4-3.1-3.1v-13.4c0-1.7,1.4-3.1,3.1-3.1h13.5c1.7,0,3.1,1.4,3.1,3.1v13.4
				c0,1.7-1.4,3.1-3.1,3.1H572.6z"/>
		</g>
		<g>
			<path className="st2" d="M572.6,321.9c-1.7,0-3.1-1.4-3.1-3.1v-13.4c0-1.7,1.4-3.1,3.1-3.1h13.5c1.7,0,3.1,1.4,3.1,3.1v13.4
				c0,1.7-1.4,3.1-3.1,3.1H572.6z"/>v
		</g>
		<g>
			<path className="st3" d="M577.2,311.7c0.2-0.1,0.3-0.3,0.3-0.4l-0.7-2.2l0.6-0.2l-0.3,2.7c-0.1,0.8,0.3,1.2,0.4,1.4l2.7,2.4l-0.7,3.3
				c-0.1,0.4-0.1,0.8,0.3,0.9c0,0,0,0,0,0c0.4,0.1,0.8-0.2,0.9-0.6l1-3.7c0.1-0.2,0-0.5-0.1-0.7l-1.9-2.8l0.4-2.4l0.3,0.3
				c0,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.2l2.1,0.9c0.4,0.1,0.5,0,0.6-0.2c0.1-0.1,0.2-0.4-0.2-0.7l-1.9-1l-1.3-1.3
				c-0.2-0.4-0.5-0.7-1-0.8c-0.5-0.1-1,0.1-1.2,0.5l-1.9,0.8c-0.1,0.1-0.2,0.3-0.1,0.4l0.9,2.9c0,0.1,0.1,0.2,0.2,0.3
				C576.9,311.8,577,311.8,577.2,311.7"/>
		</g>
		<g>
			<path className="st3" d="M578.1,319.3c0.1-0.1,0.1-0.3,0.2-0.4l0.8-2.8c0.1-0.3,0.1-0.6,0-0.8l-0.1-0.8l-1.2-1
				c-0.2-0.2-0.4-0.4-0.5-0.6l0.5,3l-0.7,2.7c-0.1,0.4,0,0.8,0.4,0.9C577.8,319.6,578,319.5,578.1,319.3"/>
		</g>
	</g>
	<g>
		<path className="st3" d="M579.5,306.7c0.7-0.1,1.1-0.6,1.1-1.3c-0.1-0.7-0.6-1.1-1.3-1.1c-0.7,0.1-1.1,0.6-1.1,1.3
			C578.2,306.2,578.8,306.7,579.5,306.7"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==20?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="407" cy="312.9" r="21.9"/>
	<circle className="st1" cx="407" cy="312.9" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M400.6,321.9c-1.7,0-3.1-1.4-3.1-3.1v-13.4c0-1.7,1.4-3.1,3.1-3.1H414c1.7,0,3.1,1.4,3.1,3.1v13.4
				c0,1.7-1.4,3.1-3.1,3.1H400.6z"/>
		</g>
		<g>
			<path className="st2" d="M400.6,321.9c-1.7,0-3.1-1.4-3.1-3.1v-13.4c0-1.7,1.4-3.1,3.1-3.1H414c1.7,0,3.1,1.4,3.1,3.1v13.4
				c0,1.7-1.4,3.1-3.1,3.1H400.6z"/>
		</g>
		<g>
			<path className="st3" d="M405.2,311.7c0.2-0.1,0.3-0.3,0.3-0.4l-0.7-2.2l0.6-0.2l-0.3,2.7c-0.1,0.8,0.3,1.2,0.4,1.4l2.7,2.4l-0.7,3.3
				c-0.1,0.4-0.1,0.8,0.3,0.9c0,0,0,0,0,0c0.4,0.1,0.8-0.2,0.9-0.6l1-3.7c0.1-0.2,0-0.5-0.1-0.7l-1.9-2.8l0.4-2.4l0.3,0.3
				c0,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.2,0.1,0.3,0.2l2.1,0.9c0.4,0.1,0.5,0,0.6-0.2c0.1-0.1,0.2-0.4-0.2-0.7l-1.9-1l-1.3-1.3
				c-0.2-0.4-0.5-0.7-1-0.8c-0.5-0.1-1,0.1-1.2,0.5l-1.9,0.8c-0.1,0.1-0.2,0.3-0.1,0.4l0.9,2.9c0,0.1,0.1,0.2,0.2,0.3
				C404.9,311.8,405,311.8,405.2,311.7"/>
		</g>
		<g>
			<path className="st3" d="M406,319.3c0.1-0.1,0.1-0.3,0.2-0.4l0.8-2.8c0.1-0.3,0.1-0.6,0-0.8l-0.1-0.8l-1.2-1
				c-0.2-0.2-0.4-0.4-0.5-0.6l0.5,3l-0.7,2.7c-0.1,0.4,0,0.8,0.4,0.9C405.8,319.6,405.9,319.5,406,319.3"/>
		</g>
	</g>
	<g>
		<path className="st3" d="M407.4,306.7c0.7-0.1,1.1-0.6,1.1-1.3c-0.1-0.7-0.6-1.1-1.3-1.1c-0.7,0.1-1.1,0.6-1.1,1.3
			C406.2,306.2,406.8,306.7,407.4,306.7"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==21?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="511.6" cy="370.7"r="21.9"/>
	<circle className="st1" cx="511.6" cy="370.7" r="41.9"/>
	<g>
		<path className="st2" d="M505.1,379c-1.6,0-3-1.3-3-3v-12.9c0-1.6,1.3-3,3-3H518c1.6,0,3,1.3,3,3V376c0,1.6-1.3,3-3,3H505.1z"/>
	</g>
	<path className="st3" d="M517.1,369h1l0.5,0c0.3,0,0.5-0.3,0.5-0.7c0-0.2-0.1-0.4-0.3-0.5l-6.8-4.5c-0.3-0.2-0.7-0.2-1,0l-0.8,0.5
		l-3.4,2.2l-2.6,1.8c-0.3,0.2-0.3,0.5-0.2,0.8c0.1,0.2,0.3,0.3,0.4,0.3l0.5,0h1 M516.1,369h0.5 M514.6,366.8
		c0.1-0.1,0.2-0.2,0.3-0.1l0,0l0.8,0.6c0.1,0.1,0.1,0.3,0.1,0.4c-0.1,0.1-0.2,0.2-0.3,0.1c0,0,0,0,0,0l-0.8-0.6
		C514.6,367.1,514.6,367,514.6,366.8L514.6,366.8L514.6,366.8z M514.1,367.7c-0.1,0.1-0.2,0.2-0.3,0.1l0,0l-0.8-0.6
		c-0.1-0.1-0.1-0.3-0.1-0.4c0.1-0.1,0.2-0.2,0.3-0.1l0.8,0.6C514.1,367.4,514.1,367.6,514.1,367.7L514.1,367.7z M512.6,365.4
		c0.1-0.1,0.2-0.2,0.3-0.1l0,0l0.8,0.6c0.1,0.1,0.1,0.3,0.1,0.4s-0.2,0.2-0.3,0.1c0,0,0,0,0,0l-0.8-0.6
		C512.6,365.7,512.6,365.5,512.6,365.4L512.6,365.4z M507.6,369h0.5h0.5h0.5h0.5h0.5h0.5h0.4v6.6c0,0.2,0.2,0.4,0.6,0.4
		c0.3,0,0.5-0.2,0.5-0.4V369h0.5h0.5h0.5h0.5h0.5h0.5h0.5 M507.3,367.7c-0.1-0.1,0-0.3,0.1-0.4l0,0l0.8-0.6c0.1-0.1,0.3-0.1,0.3,0.1
		c0.1,0.1,0,0.3-0.1,0.4c0,0,0,0,0,0l-0.8,0.6C507.6,367.9,507.4,367.9,507.3,367.7L507.3,367.7L507.3,367.7z M509.2,367.3l0.8-0.6
		c0.1-0.1,0.3-0.1,0.4,0.1c0.1,0.1,0,0.3-0.1,0.4c0,0,0,0,0,0l-0.8,0.6c-0.1,0.1-0.3,0-0.3-0.1C509,367.6,509.1,367.4,509.2,367.3z
		 M510.2,365.3c0.1-0.1,0.3,0,0.3,0.1c0.1,0.1,0,0.3-0.1,0.4l-0.8,0.6c-0.1,0.1-0.3,0.1-0.4-0.1s0-0.3,0.1-0.4c0,0,0,0,0,0
		L510.2,365.3z M506.5,369h0.5"/>
</g>
<g>
<circle    className="map-click" id={props.active==22?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="269.5" cy="355.5"  r="21.9"/>
	<circle className="st1" cx="269.5" cy="355.5" r="41.9"/>
	<g>
		<path className="st2" d="M263.1,364.9c-1.6,0-3-1.3-3-3V349c0-1.6,1.3-3,3-3h12.9c1.6,0,3,1.3,3,3v12.9c0,1.6-1.3,3-3,3H263.1z"/>
	</g>
	<path className="st3" d="M275,354.9h1l0.5,0c0.3,0,0.5-0.3,0.5-0.7c0-0.2-0.1-0.4-0.3-0.5l-6.8-4.5c-0.3-0.2-0.7-0.2-1,0l-0.8,0.5
		l-3.4,2.2l-2.6,1.8c-0.3,0.2-0.3,0.5-0.2,0.8c0.1,0.2,0.3,0.3,0.4,0.3l0.5,0h1 M274,354.9h0.5 M272.6,352.7
		c0.1-0.1,0.2-0.2,0.3-0.1l0,0l0.8,0.6c0.1,0.1,0.1,0.3,0.1,0.4s-0.2,0.2-0.3,0.1c0,0,0,0,0,0l-0.8-0.6
		C272.5,353,272.5,352.8,272.6,352.7L272.6,352.7L272.6,352.7z M272,353.6c-0.1,0.1-0.2,0.2-0.3,0.1v0l-0.8-0.6
		c-0.1-0.1-0.1-0.3-0.1-0.4c0.1-0.1,0.2-0.2,0.3-0.1l0.8,0.6C272,353.3,272.1,353.5,272,353.6L272,353.6z M270.6,351.3
		c0.1-0.1,0.2-0.2,0.3-0.1l0,0l0.8,0.6c0.1,0.1,0.1,0.3,0.1,0.4c-0.1,0.1-0.2,0.2-0.3,0.1c0,0,0,0,0,0l-0.8-0.6
		C270.5,351.6,270.5,351.4,270.6,351.3L270.6,351.3z M265.5,354.9h0.5h0.5h0.5h0.5h0.5h0.5h0.4v6.6c0,0.2,0.2,0.4,0.6,0.4
		c0.3,0,0.5-0.2,0.5-0.4v-6.6h0.5h0.5h0.5h0.5h0.5h0.5h0.5 M265.3,353.6c-0.1-0.1,0-0.3,0.1-0.4l0,0l0.8-0.6
		c0.1-0.1,0.3-0.1,0.3,0.1c0.1,0.1,0,0.3-0.1,0.4c0,0,0,0,0,0l-0.8,0.6C265.5,353.8,265.3,353.8,265.3,353.6L265.3,353.6
		L265.3,353.6z M267.1,353.2l0.8-0.6c0.1-0.1,0.3-0.1,0.4,0.1s0,0.3-0.1,0.4c0,0,0,0,0,0l-0.8,0.6c-0.1,0.1-0.3,0-0.3-0.1
		C267,353.5,267,353.3,267.1,353.2z M268.1,351.2c0.1-0.1,0.3,0,0.3,0.1c0.1,0.1,0,0.3-0.1,0.4l-0.8,0.6c-0.1,0.1-0.3,0.1-0.4-0.1
		c-0.1-0.1,0-0.3,0.1-0.4c0,0,0,0,0,0L268.1,351.2z M264.5,354.9h0.5"/>
</g>
<g>
<circle    className="map-click" id={props.active==23?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}  cx="130.7" cy="841.9"r="21.9"/>
	<circle className="st1" cx="130.7" cy="841.9" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M125.1,850.1c-1.4,0-2.6-1.2-2.6-2.6v-11.2c0-1.4,1.2-2.6,2.6-2.6h11.2c1.4,0,2.6,1.2,2.6,2.6v11.2
				c0,1.4-1.2,2.6-2.6,2.6H125.1z"/>
		</g>
	</g>
	<g>
		<path className="st3" d="M135.4,845.2h-0.6c-1.3,0-1.6-3.3-3.8-4v2c1,1,1.5,3.7,3.8,3.7h0.6c0.2,0,0.3-0.1,0.3-0.3v-1.2
			C135.7,845.3,135.5,845.2,135.4,845.2L135.4,845.2z M135.4,845.2"/>
		<path className="st3" d="M128.6,841.1c0-0.3-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6v1.7h1.2V841.1z M128.6,841.1"/>
		<g>
			<defs>
				<rect id="SVGID_1_" x="125.7" y="836.9" width="10" height="10"/>
			</defs>
	 
			<path className="st5" d="M125.7,846.6c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3v-3.8h0.6v-1.7c0-0.6,0.5-1.2,1.2-1.2
				c0.7,0,1.2,0.5,1.2,1.2v1.8h0.6v3.8c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3c0-0.3,0-7,0-7.3h-4.7V846.6z M125.7,846.6"/>
			<path className="st5" d="M128.2,837c-0.1-0.1-0.3-0.1-0.4,0l-2,1.7h4.3L128.2,837z M128.2,837"/>
		</g>
		<path className="st3" d="M128.6,843.4h-1.2v-0.6h-0.6v3.8c0,0.2,0.1,0.3,0.3,0.3s0.3-0.1,0.3-0.3v-0.3h1.2v0.3c0,0.2,0.1,0.3,0.3,0.3
			c0.2,0,0.3-0.1,0.3-0.3v-3.8h-0.6V843.4z M128.6,844v0.6h-1.2V844H128.6z M127.4,845.8v-0.6h1.2v0.6H127.4z M127.4,845.8"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==24?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="303.2" cy="410.1"  r="21.9"/>
	<circle className="st1" cx="303.2" cy="410.1" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M297,418.2c-1.6,0-2.8-1.3-2.8-2.8V403c0-1.6,1.3-2.8,2.8-2.8h12.3c1.6,0,2.8,1.3,2.8,2.8v12.3
				c0,1.6-1.3,2.8-2.8,2.8H297z"/>
		</g>
	</g>
	<path className="st3" d="M307.8,403.1c0-0.2-0.2-0.3-0.3-0.3c-1.6-0.2-3-0.2-4.3,0.1c-1.6,0.4-3.1,1.1-4.2,2.3c-1.8,1.8-1.8,4.7,0,6.4
		c0.2,0.2,0.4,0.3,0.5,0.5v3.2c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4v-2.8c0.6,0.3,1.2,0.4,1.9,0.4c1.2,0,2.4-0.5,3.2-1.3
		c1.3-1.3,1.1-3.2,1-4.2c-0.1-1.6-0.3-3,1.3-3.9C307.8,403.5,307.8,403.3,307.8,403.1z M299.5,405.8c1.3-1.3,3.1-2.1,5.2-2.3
		c-0.9,0.4-1.8,1.1-2.6,1.9c-1.5,1.6-2.4,3.6-2.6,5.8C298,409.7,298,407.3,299.5,405.8L299.5,405.8z M305.6,407.5
		c0.1,1.4,0.2,2.6-0.8,3.6c-0.7,0.7-1.7,1.1-2.7,1.1c-0.7,0-1.3-0.2-1.9-0.5c0.1-2.2,0.9-4.2,2.4-5.8c0.7-0.7,1.5-1.3,2.3-1.7
		c0.4-0.2,0.8-0.4,1.2-0.5c-0.3,0.4-0.5,0.8-0.6,1.3C305.5,405.9,305.5,406.7,305.6,407.5L305.6,407.5z"/>
</g>
<g>
<circle    className="map-click" id={props.active==25?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="398.8" cy="410.1" r="21.9"/>
	<circle className="st1" cx="398.8" cy="410.1" r="41.9"/>
	<g>
		<g>
			<path className="st2" d="M392.6,418.2c-1.6,0-2.8-1.3-2.8-2.8V403c0-1.6,1.3-2.8,2.8-2.8h12.3c1.6,0,2.8,1.3,2.8,2.8v12.3
				c0,1.6-1.3,2.8-2.8,2.8H392.6z"/>
		</g>
	</g>
	<path className="st3" d="M403.4,403.1c0-0.2-0.2-0.3-0.3-0.3c-1.6-0.2-3-0.2-4.3,0.1c-1.6,0.4-3.1,1.1-4.2,2.3c-1.8,1.8-1.8,4.7,0,6.4
		c0.2,0.2,0.4,0.3,0.5,0.5v3.2c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4v-2.8c0.6,0.3,1.2,0.4,1.9,0.4c1.2,0,2.4-0.5,3.2-1.3
		c1.3-1.3,1.1-3.2,1-4.2c-0.1-1.6-0.3-3,1.3-3.9C403.3,403.5,403.4,403.3,403.4,403.1z M395.1,405.8c1.3-1.3,3.1-2.1,5.2-2.3
		c-0.9,0.4-1.8,1.1-2.6,1.9c-1.5,1.6-2.4,3.6-2.6,5.8C393.6,409.7,393.6,407.3,395.1,405.8L395.1,405.8z M401.2,407.5
		c0.1,1.4,0.2,2.6-0.8,3.6c-0.7,0.7-1.7,1.1-2.7,1.1c-0.7,0-1.3-0.2-1.9-0.5c0.1-2.2,0.9-4.2,2.4-5.8c0.7-0.7,1.5-1.3,2.3-1.7
		c0.4-0.2,0.8-0.4,1.2-0.5c-0.3,0.4-0.5,0.8-0.6,1.3C401,405.9,401.1,406.7,401.2,407.5L401.2,407.5z"/>
</g>
<g>
<circle    className="map-click" id={props.active==26?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}}  cx="266.4" cy="549.6" r="21.9"/>
	<circle className="st1" cx="266.4" cy="549.6" r="41.9"/>
	<g>
		<path className="st4" d="M257.5,561.3c-2.3,0-4.2-1.9-4.2-4.2V539c0-2.3,1.9-4.2,4.2-4.2h18.1c2.3,0,4.2,1.9,4.2,4.2v18.1
			c0,2.3-1.9,4.2-4.2,4.2H257.5z"/>
	</g>
	<g>
		<path className="st3" d="M258,544.9h-2.6c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h2.6c1.1,0,2.1-0.4,2.8-1.2l0.6-0.6
			c0,0,0.8-0.8,2.3-0.8c0.9,0,2.4,0.6,2.6,1.4c0,0.3-0.1,0.5-0.4,0.6c-0.3,0.1-0.5-0.1-0.6-0.4c-0.1-0.1-0.9-0.5-1.6-0.5
			c-1.1,0-1.5,0.5-1.6,0.5l-0.6,0.6C260.6,544.4,259.4,544.9,258,544.9z"/>
	</g>
	<g>
		<path className="st3" d="M257.4,552.8C257.4,552.8,257.4,552.8,257.4,552.8h-2c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h1.9
			c0.1,0,0.2,0,0.3,0c0,0,0-0.1,0-0.1v-7.2c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v7.2c0,0.3,0,0.7-0.4,1
			C258.1,552.8,257.9,552.8,257.4,552.8z"/>
	</g>
	<g>
		<path className="st3" d="M255.9,550.7c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7
			C256.5,550.4,256.3,550.7,255.9,550.7z M255.9,549.6c-0.2,0-0.4,0.2-0.4,0.4c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4
			C256.3,549.8,256.1,549.6,255.9,549.6z"/>
	</g>
	<g>
		<path className="st3" d="M264.7,548.9c-0.7,0-1.4-0.2-1.8-0.7c-0.9-0.9-0.7-2.4,0-3.1l0.2-0.2c0.7-0.7,2.3-2.3,2.6-2.6
			c0.6-0.6,2-1.1,3.3-1.1c2.1,0,2.8,1,2.9,1.1l0.6,0.6c0.8,0.8,1.8,1.2,2.8,1.2h2.6c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.2,0.5-0.5,0.5
			h-2.6c-1.3,0-2.6-0.5-3.6-1.5l-0.6-0.6c-0.1-0.1-0.6-0.7-2.1-0.7c-1,0-2.2,0.4-2.5,0.7c-0.3,0.3-1.9,1.9-2.6,2.6l-0.2,0.2
			c-0.3,0.3-0.4,1.2,0,1.7c0.5,0.5,1.5,0.6,1.9,0.1l2.6-2.6l0.7,0.7l-2.6,2.6C265.9,548.7,265.3,548.9,264.7,548.9z"/>
	</g>
	<g>
		<path className="st3" d="M276,552.8c-0.5,0-0.7,0-1-0.2c-0.4-0.2-0.4-0.7-0.4-1v-7c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v7
			c0,0,0,0.1,0,0.1c0.1,0,0.2,0,0.3,0h1.9c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.2,0.5-0.5,0.5H276C276,552.8,276,552.8,276,552.8z"/>
	</g>
	<g>
		<path className="st3" d="M264.7,555.1C264.7,555.1,264.7,555.1,264.7,555.1c-0.7,0-1.5-0.1-2.1-0.7l-1.5-1.5c-0.8-0.8-1.8-1.2-2.8-1.2
			c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5c1.3,0,2.6,0.5,3.6,1.5l1.5,1.5c0.3,0.3,0.7,0.4,1.3,0.4c0.2,0,0.4,0,0.6-0.1
			c0.7-0.2,1.4-0.2,2.3,0c0.1,0,0.2,0,0.3,0c0.6,0,0.8-0.1,0.9-0.2c0.2-0.3,0.4-0.8,0.4-0.9c0-0.2,0.2-0.3,0.3-0.4
			c0.2-0.1,0.3,0,0.5,0.1c0.1,0.1,0.3,0.2,0.5,0.3c0.3,0.2,1.1-0.2,1.3-0.6c0.1-0.3,0.3-0.8-0.2-1.2c-0.5-0.4-4.5-3.8-4.5-3.8
			l0.7-0.8c0,0,4.1,3.4,4.5,3.8c0.8,0.7,0.8,1.8,0.4,2.5c-0.4,0.8-1.7,1.4-2.6,1c0,0-0.1,0-0.1,0c-0.1,0.2-0.2,0.5-0.4,0.7
			c-0.5,0.6-1.2,0.6-1.8,0.6c-0.2,0-0.3,0-0.4-0.1c-0.7-0.2-1.2-0.2-1.7,0C265.3,555.1,265,555.1,264.7,555.1z"/>
	</g>
	<g>
		<path className="st3" d="M275.1,551.7h-2.8c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5h2.8c0.3,0,0.5,0.2,0.5,0.5
			C275.6,551.5,275.4,551.7,275.1,551.7z"/>
	</g>
</g>
<g>

<circle    className="map-click" id={props.active==27?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}  cx="208.6" cy="868.4"  r="21.9"/>
	<circle className="st1" cx="208.6" cy="868.4" r="41.9"/>
	<g>
		<path className="st2" d="M201.3,878c-1.9,0-3.4-1.5-3.4-3.4v-14.8c0-1.9,1.5-3.4,3.4-3.4h14.8c1.9,0,3.4,1.5,3.4,3.4v14.8
			c0,1.9-1.5,3.4-3.4,3.4H201.3z"/>
	</g>
	<g>
		<path className="st3" d="M207.8,867.7c-1.6,0-3.4-1-4.4-2.7c-1.6-2.4-1.2-5.4,0.8-6.7c2-1.3,4.8-0.3,6.4,2.1c0.7,1.2,1.1,2.5,0.9,3.8
			c-0.1,1.3-0.7,2.3-1.7,2.9C209.2,867.5,208.5,867.7,207.8,867.7z M206.1,858.4c-0.6,0-1.1,0.1-1.6,0.5c-1.7,1.1-1.9,3.7-0.6,5.8
			c1.4,2.1,3.8,3,5.5,1.9c0.8-0.5,1.3-1.4,1.4-2.5c0.1-1.1-0.2-2.3-0.9-3.3C209,859.2,207.5,858.4,206.1,858.4z"/>
	</g>
	<g>
		<path className="st3" d="M216.1,875.7c0.1,0.1-0.2,0.2-0.6,0.5c-0.3,0.2-0.6,0.4-0.7,0.3l-3.5-5.5c-0.1-0.1,0.2-0.3,0.5-0.6
			c0.3-0.2,0.7-0.3,0.7-0.2L216.1,875.7z"/>
	</g>
	<g>
		<path className="st3" d="M209.5,866.8L209.5,866.8c-0.7,0.4-2.1,0.9-1.5,0.9c0.6,0,1.2,0.2,1.9,1.1c0.6,0.8,1.5,2.2,1.5,2.2
			c0.2,0.3,0.4,0.5,0.8,0.1l0,0c0.5-0.3,0.4-0.5,0.2-0.8c0,0-0.9-1.5-1.4-2.3c-0.5-1.1-0.5-1.7-0.2-2.2
			C211.2,865.3,210.2,866.3,209.5,866.8L209.5,866.8z"/>
	</g>
	<g>
		<polygon className="st3" points="209.5,866.9 204.2,858.6 204.4,858.5 209.6,866.8 		"/>
	</g>
	<g>
		<polygon className="st3" points="210.3,866.4 205.1,858.1 205.2,858 210.5,866.3 		"/>
	</g>
	<g>
		<polygon className="st3" points="210.9,865.3 206.2,858 206.3,857.9 211,865.2 		"/>
	</g>
	<g>
		<polygon className="st3" points="211.1,863.8 207.6,858.4 207.8,858.3 211.2,863.7 		"/>
	</g>
	<g>
		<polygon className="st3" points="208.6,867.4 203.3,859.2 203.5,859.1 208.8,867.4 		"/>
	</g>
	<g>
		<polygon className="st3" points="207.5,867.5 202.8,860.2 203,860.1 207.6,867.4 		"/>
	</g>
	<g>
		<polygon className="st3" points="206,867 202.5,861.6 202.7,861.5 206.1,866.9 		"/>
	</g>
	<g>
		<polygon className="st3" points="203.6,864.8 203.5,864.7 210.1,860.5 210.2,860.6 		"/>
	</g>
	<g>
		<polygon className="st3" points="203,864 202.9,863.9 209.6,859.6 209.7,859.8 		"/>
	</g>
	<g>
		<polygon className="st3" points="202.8,863 202.7,862.8 208.8,858.9 208.9,859.1 		"/>
	</g>
	<g>
		<polygon className="st3" points="202.5,861.9 202.5,861.8 207.9,858.3 208,858.5 		"/>
	</g>
	<g>
		<polygon className="st3" points="202.8,860.6 202.7,860.5 206.7,857.9 206.8,858 		"/>
	</g>
	<g>
		<polygon className="st3" points="204.1,865.7 204,865.6 210.7,861.3 210.8,861.5 		"/>
	</g>
	<g>
		<polygon className="st3" points="204.9,866.4 204.8,866.2 211,862.3 211,862.5 		"/>
	</g>
	<g>
		<polygon className="st3" points="205.8,867 205.7,866.9 211.1,863.4 211.2,863.6 		"/>
	</g>
	<g>
		<polygon className="st3" points="207.1,867.4 207,867.2 211,864.7 211.1,864.8 		"/>
	</g>
	<g>
		<path className="st3" d="M207.4,871c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5
			C206.7,869.5,207.4,870.2,207.4,871"/>
	</g>
	<g>
		<path className="st2" d="M203.8,872.6c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6
			C205.4,871.9,204.6,872.6,203.8,872.6z M203.8,869.6c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4
			C205.2,870.2,204.5,869.6,203.8,869.6z"/>
	</g>
	<g>
		<path className="st2" d="M208,872.6c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6
			C209.6,871.9,208.9,872.6,208,872.6z M208,869.6c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4
			C209.4,870.2,208.8,869.6,208,869.6z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==28?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="651.7" cy="44.9" r="21.9"/>
	<circle className="st1" cx="651.7" cy="44.9" r="41.9"/>
	<g>
		<g>
			<g>
				<path className="st2" d="M645.7,53.8c-1.5,0-2.8-1.2-2.8-2.8V39c0-1.5,1.2-2.8,2.8-2.8h12c1.5,0,2.8,1.2,2.8,2.8v12
					c0,1.5-1.2,2.8-2.8,2.8H645.7z"/>
			</g>
			<g>
				<path className="st2" d="M645.7,53.8c-1.5,0-2.8-1.2-2.8-2.8V39c0-1.5,1.2-2.8,2.8-2.8h12c1.5,0,2.8,1.2,2.8,2.8v12
					c0,1.5-1.2,2.8-2.8,2.8H645.7z"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			<path className="st3" d="M653.6,50.2l-0.5-6.9h0.4v-0.7H653l-0.1-0.9h0.5V41h-0.6c-0.1-0.7-0.5-1.2-1.2-1.4v-0.7H651v0.7
				c-0.6,0.2-1.1,0.7-1.2,1.4h-0.6v0.7h0.5l-0.1,0.9h-0.5v0.7h0.4l-0.5,6.9h-0.8v0.7h5.9v-0.7H653.6z M651.3,40.3
				c0.4,0,0.8,0.3,0.8,0.7h-1.6C650.6,40.6,650.9,40.3,651.3,40.3z M650.5,41.7h1.7l0.1,0.9h-1.9L650.5,41.7z M651.7,50.2v-1.4H651
				v1.4h-1.1l0.5-6.9h2l0.5,6.9H651.7z"/>
		</g>
	</g>
</g>

<g>
<circle    className="map-click" id={props.active==29?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="508.1" cy="417.4" r="21.9"/>
	<circle className="st1" cx="508.1" cy="417.4" r="41.9"/>
	<path className="st6" d="M525,417.4c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C517.2,400,525,407.8,525,417.4"/>
	<g>
		<path className="st3" d="M505.7,409.1l3.7,14.2h-2.6l-0.8-3.3h-3.7l-0.8,3.3h-2.6l3.8-14.2H505.7z M505.4,417.8l-1.3-6.1l-1.3,6.1
			H505.4z"/>
		<path className="st3" d="M512.5,411.4H510v-2.3h5.1v14.1h-2.6V411.4z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==30?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}}  cx="272.9" cy="431.6" r="21.9"/>
	<circle className="st1" cx="272.9" cy="431.6" r="41.9"/>
	<path className="st7" d="M272.9,448.5c-9.3,0-16.9-7.6-16.9-16.9c0-9.3,7.6-16.9,16.9-16.9c9.3,0,16.9,7.6,16.9,16.9
		C289.8,440.9,282.2,448.5,272.9,448.5z"/>
	<g>
		<path className="st3" d="M269,423.5l3.7,14.2h-2.6l-0.8-3.3h-3.7l-0.8,3.3h-2.6l3.8-14.2H269z M268.7,432.3l-1.3-6.1l-1.3,6.1H268.7z"
			/>
		<path className="st3" d="M279.6,431.3c-0.3,0.3-0.7,0.6-1,0.9c-0.4,0.3-0.7,0.6-1,0.9c-0.3,0.3-0.5,0.7-0.7,1
			c-0.2,0.4-0.3,0.8-0.3,1.3h5.4v2.3h-8v-1.3c0-0.7,0-1.3,0.1-1.9c0.1-0.5,0.2-1,0.5-1.5c0.2-0.4,0.5-0.9,0.9-1.3
			c0.4-0.4,0.8-0.9,1.4-1.3c0.4-0.3,0.7-0.6,1-0.8c0.3-0.2,0.5-0.4,0.7-0.7s0.4-0.5,0.5-0.7c0.1-0.3,0.2-0.6,0.2-1
			c0-0.6-0.2-1.1-0.5-1.3c-0.3-0.2-0.8-0.4-1.3-0.4c-0.2,0-0.5,0.1-0.7,0.2c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.2-0.4,0.3-0.5,0.5
			c-0.2,0.2-0.3,0.4-0.4,0.5l-1.7-1.6c0.4-0.7,1-1.2,1.8-1.7c0.7-0.4,1.6-0.6,2.6-0.6c1.3,0,2.3,0.3,2.9,1c0.7,0.6,1,1.5,1,2.5
			c0,0.5,0,0.9-0.1,1.3c-0.1,0.4-0.2,0.7-0.4,1.1c-0.2,0.3-0.4,0.7-0.7,1C280.4,430.5,280.1,430.9,279.6,431.3z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==31?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="426.9" cy="477.5" r="21.9"/>
	<circle className="st1" cx="426.9" cy="477.5" r="41.9"/>
	<path className="st6" d="M444.2,477.5c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C436.4,460.1,444.2,467.9,444.2,477.5"/>
	<g>
		<path className="st3" d="M422.7,469.2l3.7,14.2h-2.6l-0.8-3.3h-3.7l-0.8,3.3h-2.6l3.8-14.2H422.7z M422.4,478l-1.3-6.1l-1.3,6.1H422.4
			z"/>
		<path className="st3" d="M435.6,473.9c0,0.5-0.2,0.9-0.5,1.3c-0.4,0.4-0.8,0.6-1.2,0.9c0.2,0.1,0.5,0.3,0.7,0.4
			c0.2,0.2,0.4,0.3,0.6,0.5c0.2,0.2,0.3,0.4,0.4,0.6c0.1,0.2,0.2,0.4,0.2,0.7v1.9c0,0.6-0.1,1.1-0.3,1.5c-0.2,0.4-0.5,0.8-0.9,1
			c-0.4,0.3-0.8,0.5-1.3,0.6s-1,0.2-1.6,0.2c-0.5,0-1-0.1-1.4-0.2c-0.5-0.1-0.9-0.3-1.2-0.5c-0.4-0.2-0.7-0.5-1-0.9
			c-0.3-0.4-0.5-0.8-0.6-1.3l2.1-0.9c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.2,0.3,0.3,0.5,0.5c0.2,0.1,0.4,0.3,0.6,0.3
			c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.5,0,0.7,0c0.2,0,0.4-0.1,0.6-0.2c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.1-0.3,0.1-0.6v-1.9
			c0-0.2,0-0.4-0.1-0.5c-0.1-0.1-0.2-0.2-0.4-0.3c-0.2-0.1-0.4-0.1-0.6-0.2c-0.2,0-0.4-0.1-0.6-0.1h-1.5V475h1.5c0.2,0,0.4,0,0.6,0
			c0.2,0,0.4-0.1,0.6-0.2c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.1-0.3,0.1-0.6v-1.5c0-0.5-0.2-0.8-0.5-0.9c-0.3-0.1-0.7-0.2-1.2-0.2
			c-0.4,0-0.8,0.1-1.2,0.4c-0.4,0.3-0.6,0.6-0.8,1l-1.9-1.1c0.1-0.4,0.3-0.8,0.6-1.1c0.3-0.3,0.6-0.6,0.9-0.8
			c0.4-0.2,0.7-0.4,1.2-0.5c0.4-0.1,0.8-0.2,1.3-0.2c0.6,0,1.1,0.1,1.6,0.2c0.5,0.1,0.9,0.3,1.3,0.6c0.4,0.3,0.7,0.6,0.9,1.1
			c0.2,0.4,0.3,0.9,0.3,1.5V473.9z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==32?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="321.4" cy="513.8" r="21.9"/>
	<circle className="st1" cx="321.4" cy="513.8" r="41.9"/>
	<path className="st6" d="M338.4,513c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C330.6,495.6,338.4,503.4,338.4,513"/>
	<g>
		<path className="st3" d="M317.7,505l3.7,14.2h-2.6l-0.8-3.3h-3.7l-0.8,3.3h-2.6l3.8-14.2H317.7z M317.4,513.8l-1.3-6.1l-1.3,6.1H317.4
			z"/>
		<path className="st3" d="M329.6,513.1h1.8v2.3h-1.8v3.8H327v-3.8h-5v-1.7l3.8-8.6h3.8V513.1z M327,507.3h-0.1l-2.1,5.8h2.2V507.3z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==33?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1);handleActive(event)}} cx="544.9" cy="498.8" r="21.9"/>
	<circle className="st1" cx="544.9" cy="498.8" r="41.9"/>
	<path className="st6" d="M562.1,498.8c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C554.3,481.5,562.1,489.2,562.1,498.8"/>
	<g>
		<path className="st3" d="M541.2,490.8l3.7,14.2h-2.6l-0.8-3.3h-3.7l-0.8,3.3h-2.6l3.8-14.2H541.2z M541,499.6l-1.3-6.1l-1.3,6.1H541z"
			/>
		<path className="st3" d="M550.2,496.1c1.2,0,2.2,0.3,2.9,0.9c0.7,0.6,1.1,1.5,1.1,2.7v1.8c0,0.6-0.1,1.1-0.3,1.6
			c-0.2,0.5-0.5,0.8-0.9,1.1c-0.4,0.3-0.8,0.5-1.3,0.7c-0.5,0.1-1.1,0.2-1.7,0.2c-0.5,0-0.9-0.1-1.4-0.2c-0.5-0.1-0.9-0.3-1.2-0.6
			c-0.4-0.3-0.7-0.6-0.9-1c-0.3-0.4-0.4-0.9-0.5-1.4l2.5-0.7c0,0.1,0.1,0.2,0.2,0.4c0.1,0.2,0.2,0.4,0.3,0.6
			c0.1,0.2,0.3,0.4,0.6,0.5s0.5,0.2,0.9,0.2c0.5,0,0.9-0.1,1.1-0.3s0.3-0.5,0.3-1v-1.8c0-0.5-0.1-0.8-0.4-1
			c-0.3-0.2-0.7-0.3-1.2-0.3h-3.6l0.6-7.5h6.5v2.3h-4.2l-0.2,3H550.2z"/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==34?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}}  cx="466.7" cy="550.9" r="21.9"/>
	<circle className="st1" cx="466.7" cy="550.9" r="41.9"/>
	<path className="st6" d="M484.1,550.9c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C476.3,533.6,484.1,541.3,484.1,550.9"/>
	<g>
		<path className="st3" d="M463.6,543.3l3.7,14.2h-2.6l-0.8-3.3h-3.7l-0.8,3.3h-2.6l3.8-14.2H463.6z M463.3,552.1l-1.3-6.1l-1.3,6.1
			H463.3z"/>
		<path className="st3" d="M473.1,548.1c1.2,0,2,0.3,2.6,0.8c0.6,0.5,0.9,1.4,0.9,2.7v2.5c0,0.6-0.1,1.1-0.3,1.6
			c-0.2,0.4-0.5,0.8-0.9,1.1c-0.4,0.3-0.8,0.5-1.3,0.7s-1.1,0.2-1.7,0.2c-0.6,0-1.1-0.1-1.6-0.2c-0.5-0.1-0.9-0.4-1.3-0.7
			c-0.4-0.3-0.6-0.7-0.8-1.1s-0.3-1-0.3-1.6v-7.6c0-0.6,0.1-1,0.3-1.4c0.2-0.4,0.5-0.7,0.9-1c0.4-0.3,0.8-0.5,1.3-0.6
			c0.5-0.1,1-0.2,1.6-0.2c0.4,0,0.7,0,1,0.1c0.3,0,0.6,0.1,0.8,0.2c0.2,0.1,0.5,0.3,0.7,0.5c0.2,0.2,0.5,0.4,0.8,0.7l-1.4,1.7
			c-0.2-0.3-0.5-0.5-0.8-0.7c-0.3-0.2-0.7-0.3-1-0.3c-0.4,0-0.8,0.1-1.1,0.2c-0.3,0.1-0.5,0.4-0.5,0.8v2.6c0.4-0.4,0.7-0.6,1.1-0.8
			C472.4,548.2,472.7,548.1,473.1,548.1z M474.1,551.9c0-0.5-0.1-0.8-0.3-1c-0.2-0.2-0.6-0.3-1-0.3c-0.5,0-0.9,0.1-1.3,0.4
			c-0.4,0.3-0.5,0.7-0.5,1.1v1.9c0,0.5,0.1,0.8,0.4,1c0.3,0.2,0.7,0.3,1.1,0.3c0.5,0,0.9-0.1,1.2-0.3c0.3-0.2,0.4-0.5,0.4-1V551.9z"
			/>
	</g>
</g>
<g>
<circle    className="map-click" id={props.active==35?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}} cx="331.4" cy="595.4" r="21.9"/>
	<circle className="st1" cx="331.4" cy="595.4" r="41.9"/>
	<path className="st6" d="M347.9,595.4c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C340.2,578.1,347.9,585.8,347.9,595.4"/>
	<g>
		<path className="st3" d="M328.5,587.5l3.7,14.2h-2.6l-0.8-3.3H325l-0.8,3.3h-2.6l3.8-14.2H328.5z M328.2,596.2l-1.3-6.1l-1.3,6.1
			H328.2z"/>
		<path className="st3" d="M332.2,587.5h8.2l-4,14.1h-2.7l3.4-11.8h-4.9V587.5z"/>
	</g>
</g>

<g>
	<circle  className="map-click" id={props.active==36?"active":""}  onClick={(event)=>{props.click(getIndex(event.target.parentNode)-1)}}   cx="152.8" cy="934.7" r="21.9"/>
	<circle  className="st1"   cx="152.8" cy="934.7"  r="41.9"/>
	<path fill="#2A5268" d="M169.5,934.3c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C161.7,917,169.5,924.8,169.5,934.3"/>
	<g>
	<path class="st3" d="M151.6,935.7v3.8h4.8v2.3h-7.3v-14.1h7v2.3h-4.5v3.6h3.8v2.2H151.6z"/>
	</g>
</g>
 

</svg>




</div>

<div className="map-content">
  


	{props.eng?<h4>	Know the exact location of your Next Home</h4>:  <h4>Conoce la Ubicación Exacta de tu <span>Próximo Hogar</span></h4>}
	{props.eng? <h5>Residences at:</h5>: <h5>Residencias en Edificio:</h5>}
    <div>

        
    <span className="legend">{iniciales[props.active-1]}</span><span>{props.eng?descriptions[props.active-1]:descripciones[props.active-1]}</span>
  
    
    </div>

    <button onClick={props.increase} name="Siguiente">⟶</button>
    <button onClick={props.decrease} name="Anterior">⟵</button>
</div>


        </div>
    )
}



const LockImagen = (props) => {
    return (
         
<div className="single-image">
<SimpleSlider slides={lockSlider}/></div>
        
     )
}

const Imagen = (props) => {
    return (
         
<div className="single-image">
<SimpleSlider slides={bigSlider}/></div>
        
     )
}

const Buttons = (props) =>{
    return(  <div className="residencias-buttons-wrapper bg-sand">
      <Link to="/residencias/una-recamara">  <button  >
              <span>1</span>
              <span>{props.eng?"Bedroom":"Récamara"}</span>
          </button></Link> 

          <Link to="/residencias/dos-recamaras">    <button className="active"   >
              <span>2</span>
              <span>{props.eng?"Bedrooms":"Récamaras"}</span>
          </button></Link> 

          <Link to="/residencias/tres-recamaras">      <button >
              <span>3</span>
              <span>{props.eng?"Bedrooms":"Récamaras"}</span>
          </button></Link> 

          <Link to="/residencias/cuatro-recamaras">    <button >
              <span>4</span>
              <span>{props.eng?"Bedrooms":"Récamaras"}</span>
          </button></Link> 

		  <Link to="/residencias/penthouse">    <button   >
              <span>PH</span>
              <span>Penthouse</span>
          </button></Link> 
      </div>)
  }


  const Tabs = (props) =>{
    return(  <div className="residencias-tabs-wrapper">
       <button name="2 Bedrooms + LockOff" onClick={props.lockTrue}className={props.lock?"active flat-button  centered-button":"inactive flat-button  centered-button"} style={{ margin: "2em" }}>{props.eng?"2 Bedrooms + LockOff":"1 Récamara + LockOff"}</button>
	   <button name="2 Bedrooms"  onClick={props.lockFalse} className={!props.lock?"active flat-button centered-button":"inactive flat-button centered-button"}  style={{ margin: "2em" }}>{props.eng?"2 Bedrooms":"2 Récamaras"}</button>
      </div>)
  }




class Residencias extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
mapa:33,
lock:false
        }


    }

	lockTrue=()=>{
		this.setState({lock:true,mapa:36})
	}
	lockFalse=()=>{
		this.setState({lock:false,mapa:33})
	}


    mapClick=(e)=>{

if(!this.state.lock){
	this.setState({
		mapa:e
	},()=>console.log(this.state.mapa))
}

      
    }

    increase = ()=>{

		if(!this.state.lock){
			this.setState({
				mapa:this.state.mapa==36?33:this.state.mapa+1
			})
		}
		

      
    }


    decrease=()=>{

		if(!this.state.lock){
			this.setState({
				mapa:this.state.mapa==33?36:this.state.mapa-1
			})
		}
		
      
    }






    render() {

        return (

            <Layout>
                <div className="detalle-hero"> <HandleImages name="dosRecamaras" /></div>
                <Detalle lock={this.state.lock}/>
				<Tabs lock={this.state.lock} lockTrue={this.lockTrue} lockFalse={this.lockFalse}/>
				{this.state.lock?<LockFloorPlan />:<FloorPlan />} 
				{this.state.lock?<LockFeatures/>:<Features />}
                <Map active={this.state.mapa} increase={this.increase} decrease={this.decrease} click={this.mapClick}/>
				{this.state.lock? <LockImagen/>: <Imagen/>}
                 
                <Buttons/>
            </Layout>)
    }



}

export default Residencias