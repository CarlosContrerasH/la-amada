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
            <div className="single-wide ubicacion">
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
                    <p>There is a place that meets all the expectations that you have been looking for in your daily life or when on vacation. Peaceful moments, family time, security, and privacy; these are just some of the experiences that can be found when living at La Amada.</p><p>
                    With a surface area of 13 acres, La Amada features 215 luxurious apartments with 1, 2, 3, or 4 bedrooms distributed throughout 8 buildings, with either beach-front, ocean, marina, or natural reserve views. They have been carefully planned, with spacious bedrooms, ample terraces and covered parking, designed taking care of every single detail, while offering spaces to share, create, and build new memories that you will treasure forever.
</p><p>
                        Discover our surrounding areas:</p>
                </div>:  <div  >
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


const Mapa = (props) => {


    return (
       <div className="icons-map-wrapper">
           <div className="top">
           <div className="icons-wrapper">

{ /* 

<div><img alt="lock" src={mar}/><span>Vista<br/> al mar</span></div>*/}

<div><img alt="Marinafront view" src={pm}/><span>{props.eng == true ? "Main entrance Playa Mujeres Resort & Golf":"Entrada principal Playa Mujeres Resort & Golf"}</span></div>

<div><img alt="Lagoon View" src={marina}/><span>V&V Marina</span></div>

<div><img alt="Lagoon View" src={delfinario}/><span>{props.eng == true ? "Dolphinarium Playa Mujeres":"Delfinario Playa Mujeres"}</span></div>


<div><img alt="Lagoon View" src={golf}/><span>{props.eng == true ? "Club-House Playa Mujeres Golf Club":"Casa Club Playa Mujeres Golf Club"}</span></div>


<div><img alt="Lagoon View" src={hotels}/><span>{props.eng == true ? "Resorts & Hotels":"Resorts y Hoteles"}</span></div>

 
</div>
           </div>
           <div className="left"><HandleImages name="mapa"/></div>
           <div className="right"><ul>
               <li><span>1</span><span>{props.eng == true ?<>Main Entrance Playa Mujeres Resort & Golf</>:<>Entrada Principal Playa Mujeres Resort & Golf</>}</span></li>
               <li><span>2</span><span>V&V Marina</span></li>
               <li><span>3</span><span>{props.eng == true ?"Paradisus Playa Mujeres Hotel":"Hotel Paradisus Playa Mujeres"}</span></li>
               <li><span>4</span><span>LA AMADA RESIDENCES</span></li>
               <li><span>5</span><span>The Beloved Hotel & Spa</span></li>
               <li><span>6</span><span>{props.eng == true ?"Excellence Hotel ":"Hotel Excellence"}</span></li>
               <li><span>7</span><span>{props.eng == true ?"Finest Hotel ":"Hotel Finest"}</span></li>
               <li><span>8</span><span>{props.eng == true ?"Fista Americana Aqua Hotel ":"Hotel Fiesta Americana Aqua"}</span></li>
               <li><span>9</span><span>{props.eng == true ?"Atelier Studio Hotel ":"Hotel Atelier"}</span></li>
               <li><span>10</span><span>Naa'y Estate Homes Community</span></li>
               <li><span>11</span><span>{props.eng == true ?"Dreams Playa Mujeres Hotel  ":"Hotel Dreams Playa Mujeres"}</span></li>
               <li><span>12</span><span>{props.eng == true ?"Secrets Playa Mujeres Hotel  ":"Hotel Secrets Playa Mujeres"}</span></li>
               <li><span>13</span><span>{props.eng == true ?"Grand Palladium Hotel ":"Hotel Grand Palladium"}</span></li>
               <li><span>14</span><span>Playa Mujeres Golf Club</span></li>
               </ul></div>
       </div>


    )
}




const CircleMap = (props) => {


    return (

        <ScrollWrapper>


            <div className="bg-sand centered ubicacion" style={{ padding: "1em" }}>
              {props.eng?  <span><span className="script" style={{ lineHeight: "initial" }}>Exclusivity </span> 20 MINUTES AWAY<br />
           FROM CANCUN'S DOWNTOWN</span>: <span><span className="script" style={{ lineHeight: "initial" }}>Exclusividad </span>A 20 MINUTOS<br />
DEL CENTRO DE CANCÚN</span>}
                <button class="outlined-button" style={{ margin: "1em" }}>{props.eng?"download master plan":"DESCARGAR MASTER PLAN"}</button>
            </div>
            <div className="bg-sand circle-map">
                <img src={map} />
            </div>
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