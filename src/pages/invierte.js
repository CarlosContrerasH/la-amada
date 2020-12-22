import React from 'react'


import Layout from '../components/Layout'


import ScrollWrapper from "../components/scrollwrapper"
import { HandleImages } from "../components/handleImages"
import SimpleSlider from "../components/simpleSlider"
import promecap from "../img/conocenos/PROMECAP-LOGO.svg"
import hamak from "../img/conocenos/HAMAK-HOTELS-LOGO.svg"

import playa from "../img/invierte/ICONOS/PLAYA-01.svg"
import concierge from "../img/invierte/ICONOS/CONCIERGE-01.svg"
import beachclub from "../img/invierte/ICONOS/BEACHCLUB.svg"
import rooftop from "../img/invierte/ICONOS/ROOFTOPS-AND-POOLS.svg"
import yoga from "../img/invierte/ICONOS/YOGA-STUDIO.svg"
import canchas from "../img/invierte/ICONOS/COURTS.svg"
import gym from "../img/invierte/ICONOS/GYM.svg"
import deli from "../img/invierte/ICONOS/MARKET-DELI.svg"
import ludoteca from "../img/invierte/ICONOS/KIDSCLUB.svg"
import beachclubres from "../img/invierte/ICONOS/BEACHCLUB-REST.svg"

import { Link } from 'gatsby'




let playaSlider = [<HandleImages name="ludotecaH1" />, <HandleImages name="ludotecaH2" />, <HandleImages name="ludotecaH3" />]



const InvierteHero = (props) => {
    return (
        <div className="invierte-hero bg-sand">


            <HandleImages name="conocenos1" />


            <span className="invierte-heading">
                {props.eng == true ? "" : <h1><span className="script">Somos</span><br /><span style={{ fontSize: "1.5em", fontWeight: "200", letterSpacing: ".1em" }}>Tu Mejor Opción</span></h1>}
            </span>




        </div>
    )
}


const TwoCol = (props) => {
    return (<ScrollWrapper classes="invierte-two-col">


        <div> <span className="wrapped-header playa">
            <h2>

                {props.eng == true ?
                    <> Smart<br />Investing</>
                    : <> Inversion<br />La Amada</>}



                <br /><span className="sub" style={{ fontStyle: "italic", fontWeight: "200", letterSpacing: ".1em" }}>
                    {props.eng == true ?
                        "a team built by the best  "
                        : "Un equipo contrsuido por los mejores"}


                </span></h2>

        </span>
        
        <p>Our residential is characterized by its prime location and luxurious amenities, but this would not be possible without the great team behind this great project. Meet our team in the sales and project management area, a team that we are undoubtedly proud to be part of.
                 </p>
        
        </div>
        <div>

        <p>Our residential is characterized by its prime location and luxurious amenities, but this would not be possible without the great team behind this great project. Meet our team in the sales and project management area, a team that we are undoubtedly proud to be part of.
                 </p>
        <p>Our residential is characterized by its prime location and luxurious amenities, but this would not be possible without the great team behind this great project. Meet our team in the sales and project management area, a team that we are undoubtedly proud to be part of.
                 </p>



        </div>
       
      
       
    </ScrollWrapper>)
}


const Icons = (props)=>{
   return( <div className="invierte-icons-wrapper">
<h3>Amenidades dentro del residencial</h3>
<div className="icons">
    <div className="icon-wrapper">
        <img src={playa}/>
        <span>Playa</span>
    </div>
    <div className="icon-wrapper">
        <img src={concierge}/>
        <span>Concierge</span>
    </div>
    <div className="icon-wrapper">
        <img src={beachclub}/>
        <span>Beachclub</span>
    </div>
    <div className="icon-wrapper">
        <img src={rooftop}/>
        <span>Rooftop Y Albercas</span>
    </div>
    <div className="icon-wrapper">
        <img src={yoga}/>
        <span>Salon de Yoga</span>
    </div>
    <div className="icon-wrapper">
        <img src={canchas}/>
        <span>Canchas Multiusos</span>
    </div>
    <div className="icon-wrapper">
        <img src={gym}/>
        <span>Gym</span>
    </div>
    <div className="icon-wrapper">
        <img src={deli}/>
        <span>Market Deli</span>
    </div>
    <div className="icon-wrapper">
        <img src={ludoteca}/>
        <span>Ludoteca y Kidsclub</span>
    </div>
    <div className="icon-wrapper">
        <img src={beachclubres}/>
        <span>Beachclub Restaurant</span>
    </div>
    
</div>
    </div>)
}


const Asociados = (props) => {
    return (

        <ScrollWrapper classes="asociados bg-sand ">
            <span className="wrapped-header playa">
                <h2>
                    {props.eng == true ?
                        "Associates "
                        : "Asociados"}


                    <br /><span className="sub" style={{ fontStyle: "italic", fontWeight: "200", letterSpacing: ".1em" }}>
                        {props.eng == true ?
                            "Our pillars of growth and positioning are supported by two great Mexican companies: "
                            : "  Nuestros pilares de crecimiento y posicionamiento están sustentados por dos grandes empresas mexicanas: "}
                    </span></h2>

            </span>
            <div className="asociado">
                <a href="https://www.promecapac.com/" target="_blank"><div className="logo"><img src={promecap} /></div> </a>

                {props.eng == true ?
                    <p>Hotelera Marina, S.A. de C.V. is the developer at La Amada. Hotelera Marina is an affiliate of Promecap Capital de Desarrollo, S.A. de C.V.  Promecap discovers value and manages investments for private and institutional clients in Mexico and abroad. Through its affiliation with Hotelera Marina, Promecap is able to provide stable guidance and a long-term vision to the community at La Amada.
                    </p>
                    : <p>Hotelera Marina, S.A. de C.V. es el desarrollador de La Amada y es socio de Promecap Capital de Desarrollo, S.A. de C.V. Esta última se dedica a descubrir valor y administrar inversiones para clientes privados e instituciones en México y el extranjero. A través de su afiliación con Hotelera Marina, Promecap otorga una dirección estable y visión a largo plazo para la comunidad de La Amada.</p>}

            </div>
            <div className="asociado">
                <a href="https://www.hamakhotels.com/home" target="_blank"><div className="logo"><img src={hamak} /></div> </a>

                {props.eng == true ?
                    <p>Hamak Hotels is an expert at creating lifelong memories. Hamak manages the renovation and amenity improvements at the La Amada Residences.  Hamak designs and operates some of the premier hotel and resort experiences in Latin America. Whether designing new resorts or managing existing hotel operations, Hamak focuses on top tier quality guest experiences.
                    </p>
                    : <p>Hamak Hotels es experto creando recuerdos para toda la vida. Hamak administra la renovación, así como las mejoras de las instalaciones del residencial La Amada. Hamak diseña y opera varios hoteles Premier y experiencias tipo resort en Latinoamérica. Tanto en el diseño de nuevos resorts como en la administración de hoteles. El enfoque de Hamak está en brindar experiencias de lujo.
                      </p>}
            </div>


        </ScrollWrapper>
    )
}

const FullImage = () => {
    return (
        <HandleImages name="conocenos2" />
    )
}

class Invierte extends React.Component {



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
                <InvierteHero />
                <TwoCol />
                <Icons/>
                <Asociados />
                <FullImage />
            </Layout>)
    }



}

export default Invierte