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

let playaSlider = [<HandleImages name="recomendacion1" />, <HandleImages name="recomendacion2" />, <HandleImages name="recomendacion3" />, <HandleImages name="recomendacion4" />, <HandleImages name="recomendacion5" />, <HandleImages name="recomendacion6" />, <HandleImages name="recomendacion7" />, <HandleImages name="recomendacion8" />, <HandleImages name="recomendacion9" />]




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
            <div className="col-wrapper ubicacion">
                <div className="left-col">
                    <span className="wrapped-header ubicacion">
                        <h2> {props.eng == true ? <>EXCLUSIVENESS<br/>IN EVERY CORNER<br /><span className="sub">WE ARE THE ONLY RESIDENCES<br/>
INSIDE PLAYA MUJERES
</span></> : <>EXCLUSIVIDAD<br />
EN CADA RINCÓN<br /><span className="sub">SOMOS EL ÚNICO RESIDENCIAL
DENTRO DE PLAYA MUJERES</span></>}</h2>
                    </span>
                </div>


             {props.eng?   <div className="right-col">
                    <p>There is a place that meets all the expectations that you have been looking for in your daily life or when on vacation. Peaceful moments, family time, security, and privacy; these are just some of the experiences that can be found when living at La Amada.</p><p>
                    With a surface area of 13 acres, La Amada features 215 luxurious apartments with 1, 2, 3, or 4 bedrooms distributed throughout 8 buildings, with either beach-front, ocean, marina, or natural reserve views. They have been carefully planned, with spacious bedrooms, ample terraces and covered parking, designed taking care of every single detail, while offering spaces to share, create, and build new memories that you will treasure forever.
</p><p>
                        Conoce las áreas que nos rodean:</p>
                </div>:  <div className="right-col">
                    <p>Existe un lugar que sin duda reúne todas las expectativas que buscas en tu vida diaria
o para vacacionar; momentos de tranquilidad, convivencia familiar, seguridad y privacidad; son solo algunos de los sentimientos que te ofrecemos al vivir en La Amada.</p><p>
                        Con una superficie de terreno de 5.2 hectáreas, La Amada cuenta con 215 lujosos departamentos de 1, 2, 3 y 4 recámaras distribuidos en 8 edificios, en la playa, con vista
                        al mar, a la marina o a la reserva natural, todos cuidadosamente diseñados y planificados con amplias terrazas, estacionamientos cubiertos, dando la mayor importancia a
                        cada uno de sus detalles, ofreciendo espacios para compartir, crear y construir nuevos
recuerdos que atesorarás por siempre.</p><p>
                        Conoce las áreas que nos rodean:</p>
                </div>}
                
                
                </div>
        </ScrollWrapper>


    )
}





const Slider = (props) => {


    return (
        <RecSlider slides={playaSlider} eng={props.eng}/>


    )
}



const CircleMap = (props) => {


    return (

        <ScrollWrapper>


            <div className="bg-sand centered ubicacion" style={{ padding: "1em" }}>
                <span><span className="script" style={{ lineHeight: "initial" }}>Exclusividad </span>A 20 MINUTOS<br />
DEL CENTRO DE CANCÚN</span>
                <button class="outlined-button" style={{ margin: "1em" }}>DESCARGAR MASTER PLAN</button>
            </div>
            <div className="bg-sand circle-map">
                <img src={map} />
            </div>
            {props.eng?<div className="centered ubicacion">
                <span className="script">The best of Mexico at your front door
</span>
                <p>Whether you are interested in outdoor adventure, culture, nightlife, or relaxation, La Amada is an ideal basecamp for recreation.</p><p>
                    Nuestra perfecta ubicación nos permite disfrutar de las siguientes atracciones:</p>
            </div>:<div className="centered ubicacion">
                <span className="script">Lo mejor del Caribe Mexicano
a tu puerta</span>
                <p>Ya sea que prefieras aventuras al aire libre, cultura, vida nocturna o relajación,
La Amada es el lugar ideal para empezar a disfrutarlo.</p><p>
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
                <iframe className="google-map" src="https://www.google.com/maps/d/u/0/embed?mid=1fkjdrh3vtDKWr5k5ziWeFSrsiqg9pd3_" height="480"></iframe>
                <CircleMap />
              <Slider/>
                          
                

            </Layout>)
    }



}

export default Amenidades