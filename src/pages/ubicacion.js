import React from 'react'


import Layout from '../components/Layout'

import { useScrollPercentage } from 'react-scroll-percentage'
import Logo from "../components/logo"
import Form from "../components/contact-form"
import ScrollWrapper from "../components/scrollwrapper"
import { HandleImages } from "../components/handleImages"
import RecSlider from "../components/slider-recomendaciones"
import FancySlider from "../components/fancySlider"
import map from "../img/UBICACION/MAPA-CANCUN.svg"
import { Link } from 'gatsby'
import lock from "../img/RESIDENCIAS/features/LOCK-OFF.svg"
import mar from "../img/RESIDENCIAS/features/VISTA-MARINA.svg"

import delfinario from "../img/UBICACION/ICONOS/ICON-DELFINARIO.svg"
import golf from "../img/UBICACION/ICONOS/ICON-GOLF.svg"
import hotels from "../img/UBICACION/ICONOS/ICON-HOTELS.svg"
import marina from "../img/UBICACION/ICONOS/ICON-MARINA.svg"
import pm from "../img/UBICACION/ICONOS/ICON-PM.svg"
import ZoomMap from "../components/zoom-map"



let playaSlider = [<HandleImages name="recomendacion1" />, <HandleImages name="recomendacion2" />, <HandleImages name="recomendacion3" />, <HandleImages name="recomendacion4" />, <HandleImages name="isla" />, <HandleImages name="recomendacion6" />, <HandleImages name="recomendacion7" />, <HandleImages name="recomendacion8" />, <HandleImages name="recomendacion9" />]




const Header = (props) => {


    return (
        <ScrollWrapper>

            <div className="full">

                <div >
                    {props.eng ? <span className="header-ubicacion">
                        <h1><span style={{ fontSize: "1.5em", fontWeight: "200", letterSpacing: ".1em" }}>PRIME</span><br /><span style={{ marginLeft: "1.5em" }} className="script">location</span></h1></span> :
                        <span className="header-ubicacion">
                            <h1><span style={{ fontSize: "1.5em", fontWeight: "200", letterSpacing: ".1em" }}>UBICACIÓN</span><br /><span style={{ marginLeft: "1.5em" }} className="script">privilegiada</span></h1></span>
                    }


                    <HandleImages name="ubicacionHeader" />
                </div>


            </div>
        </ScrollWrapper>


    )
}



const TwoCol = (props) => {


    return (

        <ScrollWrapper>
            <div className="map-zoom-row">
            <div className="map-zoom-wrapper">{/*<HandleImages name="mapa2"/>*/}<ZoomMap/></div>
            <div className="map-text">
            <div  >
                    <span className="wrapped-header ubicacion">
                        <h2> {props.eng == true ? <>EXCLUSIVENESS<br/>IN EVERY CORNER<br /><span className="sub">WE ARE THE ONLY RESIDENCES<br/>
INSIDE PLAYA MUJERES
</span></> : <>EXCLUSIVIDAD<br />
EN CADA RINCÓN<br /><span className="sub">SOMOS EL ÚNICO RESIDENCIAL
DENTRO DE PLAYA MUJERES</span></>}</h2>
                    </span>
                </div>


             {props.eng?   <div  >
                    <p>La Amada is a place that meets all of your expectations. Here is the place you have been looking for, whether you want to live here or come on holiday. Peaceful moments, family time, security, and privacy; these are just some of the experiences that can be found when living at La Amada.</p><p>
                    Surrounded by white sands, rain forests, archaeological sites, lagoons, mangroves, turquoise sea and only 15 minutes away from Cancun’s downtown, you will find Playa Mujeres. It is an exclusive touristic destination in the Mexican Caribbean that hosts more than 8000 rooms in luxurious lodging centers. Playa Mujeres is the place with the highest economic growth in the province. </p><p>
                        Discover our surrounding areas:</p>
                </div>:  <div  >
                    <p>Existe un lugar que sin duda reúne todas las expectativas que buscas en tu vida diaria o para vacacionar. Momentos de tranquilidad, convivencia familiar, seguridad y privacidad; son solo algunos de los sentimientos que te ofrecemos al vivir en La Amada.</p>
                    
                    <p>Entre arena blanca, selva tropical, zonas arqueológicas, laguna, 
manglar, mar turquesa y a 15 minutos del centro de Cancún, surge Playa 
Mujeres, exclusivo destino turístico en la zona del Caribe Mexicano que 
alberga más de 8,200 cuartos en lujosos centros de hospedaje, lo cual lo
 convierte en el lugar de mayor crecimiento del estado.</p><p>
                        Conoce las áreas que nos rodean:</p>
                </div>}
                </div> 
                
                </div>
        </ScrollWrapper>


    )
}





const Slider = (props) => {


    return (
        <RecSlider slides={playaSlider} eng={props.eng}/>


    )
}


const Mapa = (props) => {


    return (
       <div  >
         
         <div className="bg-sand centered ubicacion" style={{ padding: "1em" }}>
              {props.eng?  <span><span className="script" style={{ lineHeight: "initial" }}>Exclusivity </span> 20 MINUTES AWAY<br />
           FROM CANCUN'S DOWNTOWN</span>: <span><span className="script" style={{ lineHeight: "initial" }}>Exclusividad </span>A 20 MINUTOS<br />
DEL CENTRO DE CANCÚN</span>}
                <button class="outlined-button" style={{ margin: "1em" }}>
                    
                <a style={{textDecoration:"none",color:"inherit"}} href="/img/MasterPlan_LA_AMADA.jpg" target='_blank'>
                    {props.eng?"download master plan":"DESCARGAR MASTER PLAN"}

                    </a> 
                    
                    </button>
            </div>
           
       </div>


    )
}




const CircleMap = (props) => {


    return (

        <ScrollWrapper>


  
        
            {props.eng?<div className="centered ubicacion">
                <span className="script">The best of Mexico at your front door
</span>
                <p>Whether you are interested in outdoor adventure, culture, nightlife, or relaxation, La Amada is an ideal basecamp for recreation.</p>
            </div>:<div className="centered ubicacion">
                <span className="script">Lo mejor del Caribe Mexicano
a tu puerta</span>
                <p>Ya sea que prefieras aventuras al aire libre, cultura, vida nocturna o relajación,
La Amada es el lugar ideal para empezar a disfrutarlo.<br/>
                    Nuestra perfecta ubicación nos permite disfrutar de las siguientes atracciones:</p>
            </div>
            }

        </ScrollWrapper>

    )
}








class Amenidades extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            trailerLightbox: false,
            calendlyLightbox: false,
        }



    }


    render() {

        return (

            <Layout>
                <Header />
                <TwoCol />
                <Mapa/>
                <iframe className="google-map" src="https://www.google.com/maps/d/u/0/embed?mid=1fkjdrh3vtDKWr5k5ziWeFSrsiqg9pd3_" height="480"></iframe>
                <CircleMap />
              <Slider/>
                          
                

            </Layout>)
    }



}

export default Amenidades