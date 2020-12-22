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

import { useScrollPercentage } from 'react-scroll-percentage'
import { Link } from 'gatsby'



 

const InvierteHero = (props) => {
    return (
        <div className="invierte-hero bg-sand">


            <HandleImages name="invierteHeader" />


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


const Icons = (props) => {
    return (<div className="invierte-icons-wrapper">
        <h3>Amenidades dentro del residencial</h3>
        <div className="icons">
            <div className="icon-wrapper">
                <img src={playa} />
                <span>Playa</span>
            </div>
            <div className="icon-wrapper">
                <img src={concierge} />
                <span>Concierge</span>
            </div>
            <div className="icon-wrapper">
                <img src={beachclub} />
                <span>Beachclub</span>
            </div>
            <div className="icon-wrapper">
                <img src={rooftop} />
                <span>Rooftop Y Albercas</span>
            </div>
            <div className="icon-wrapper">
                <img src={yoga} />
                <span>Salon de Yoga</span>
            </div>
            <div className="icon-wrapper">
                <img src={canchas} />
                <span>Canchas Multiusos</span>
            </div>
            <div className="icon-wrapper">
                <img src={gym} />
                <span>Gym</span>
            </div>
            <div className="icon-wrapper">
                <img src={deli} />
                <span>Market Deli</span>
            </div>
            <div className="icon-wrapper">
                <img src={ludoteca} />
                <span>Ludoteca y Kidsclub</span>
            </div>
            <div className="icon-wrapper">
                <img src={beachclubres} />
                <span>Beachclub Restaurant</span>
            </div>

        </div>
    </div>)
}


const TwoPic = (props) => {
 

    return (



<div className="bg-sand ">
        <div className="two-pic">
<div>
            <div className="pic">  <HandleImages name="invierte1" /></div>
            <div className="pic" >  <HandleImages name="invierte2" /></div>
            </div>

        </div>

        <div className="invierte-centered">
 <h3>Servicions exclusivos para Residentes</h3>
 <p>Lorem ipsum</p>
        </div>


<div className="text-pic"> 
<div>
<h3>Administracion de Renta Vacacional</h3>
<p>Lorem Ipsum</p>

</div>

<HandleImages name="invierte3" />
</div>


        </div>




    )
}

 


const Botones=()=>{
   return( <div className="invierte-buttons">
        <div>
        <Link to="/amenidades"> <button className="outlined-button light">AMENIDADES</button></Link>
        <Link to="/residencias">  <button className="outlined-button light">RESIDENCIAS</button></Link>
        </div>
    </div>)
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
                <Icons />
                <TwoPic />
               <Botones/>
                <FullImage />
            </Layout>)
    }



}

export default Invierte