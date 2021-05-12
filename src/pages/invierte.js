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

import ciclopista from "../img/invierte/ICONOS/CICLOPISTA.svg"
import golf from "../img/invierte/ICONOS/GOLF.svg"
import marina from "../img/invierte/ICONOS/MARINA.svg"
import seguridad from "../img/invierte/ICONOS/SEGURIDAD.svg"


import salon from "../img/invierte/ICONOS/SALON-DE-RESIDENTES.svg"

import { useScrollPercentage } from 'react-scroll-percentage'
import { Link } from 'gatsby'



 

const InvierteHero = (props) => {
    return (
        <div className="invierte-hero bg-sand">


            <HandleImages name="invierteHeader" />


            <span className="invierte-heading">
                {props.eng == true ? <h1><span className="script">Invest</span><br /><span style={{ fontSize: "1.5em", fontWeight: "200", letterSpacing: ".1em" }}>Wisely</span></h1> : <h1><span className="script">Somos</span><br /><span style={{ fontSize: "1.5em", fontWeight: "200", letterSpacing: ".1em" }}>Tu Mejor Opción</span></h1>}
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
                        "Why invest in our residences?"
                        : "¿por qué invertir en nuestras residencias?"}


                </span></h2>

        </span>
        {props.eng == true ?
                         <p>There is no safer investment than to invest in La Amada. Our location, amenities, architecture, and sumptuous interiors are living proof. We have units available for immediate delivery. They come fully equipped so you do not have to wait to start enjoying the magic of your new home. We also have rental units for those who prefer to rent on an annual or seasonal basis.
                         </p>
        
                        : <p>Invertir en La Amada es invertir seguro dada la ubicación, amenidades, arquitectura e interiorismo de lujo con el que se cuenta. Con nuestras unidades de entrega inmediata podrás gozar desde el primer momento de tu nuevo hogar con todas las amenidades que ofrecemos funcionando; o bien para los que buscan rentabilidad, nuestras unidades se pueden rentar anual o vacacionalmente.</p>}
          

        </div>
        <div>

        {props.eng == true ?
                         <p>Playa Mujeres is a the only private, enclosed community within Costa Mujeres. It is also the area with the highest economic growth in the region, which means a higher return on your property value and investment. If you decided to let your unit, the occupancy rate and return of investment would be high due to its prime coastal location. You can let out your property worry free, as our team of experts will deal with that.
                         </p>
        
                        : <p>Playa Mujeres es la única comunidad cerrada dentro de Costa Mujeres, la zona con mayor crecimiento hotelero del estado, mismo que generará una alta plusvalía para tu propiedad e inversión. Al ser una comunidad en la playa, ofrece buenas ocupaciones con rendimientos muy atractivos para el inversionista y con la facilidad de ser operada por el mismo desarrollo.</p>}
          
          {props.eng == true ?
                         <p>Your peace of mind worry free stay is our main priority. With that in mind, we have put at your service our main reception and lounge which are located at the centre of our facilities. These areas can be used as a main venue reception for your guests where they will be greeted with the highest customer service. La Amada is here to help you with any event, both within and outside of our facilities, so you, your family and your guests can fully enjoy the experience this amazing destination offers.

                         </p>
        
                        : <p>Pensando en que vivas con todas las comodidades resueltas, en el centro de todas las amenidades ponemos tu disposición un espacio que funge como recepción, donde podrás recibir a tus huéspedes con un servicio premium para apoyarte en cualquier actividad, tanto dentro del desarrollo como fuera de él, para que tú, tu familia o invitados gocen de todas las experiencias que ofrece nuestro destino de lujo.
                        </p>}
          


        </div>



    </ScrollWrapper>)
}


const Icons = (props) => {
    return (<div className="invierte-icons-wrapper">
        <h3>{props.eng?"Residence’s experiences":"Amenidades dentro del residencial"}</h3>
        <div className="icons">
            <a href="/amenidades/la-amada/playa" className="icon-wrapper">
                <img src={playa} />
                <span>{props.eng?"Beach":"Playa"}</span>
            </a>
            <a href="/amenidades/la-amada/lobby" className="icon-wrapper">
                <img src={concierge} />
                <span>{props.eng?"Lobby, motor lobby & Concierge":"Lobby, motor lobby y Concierge"}</span>
            </a>
            <a href="/amenidades/la-amada/playa"className="icon-wrapper">
                <img src={beachclub} />
                <span>{props.eng?"Rooftops & Pools":"Rooftops y Albercas"}</span>
            </a>
            <a href="/amenidades/la-amada/beachclub" className="icon-wrapper">
                <img src={rooftop} />
                <span>Beachclub</span>
            </a>
            <a href="/amenidades/la-amada/yoga" className="icon-wrapper">
                <img src={yoga} />
                <span>{props.eng?"Yoga Studio":"Salón de yoga"}</span>
            </a>
            <a href="/amenidades/la-amada/canchas"className="icon-wrapper">
                <img src={canchas} />
                <span>{props.eng?"Multipurpose Courts":"Canchas Multiusos" }</span>
            </a>
            <a href="/amenidades/la-amada/gym"className="icon-wrapper">
                <img src={gym} />
                <span>Gym</span>
            </a>
            <a href="/amenidades/la-amada/market" className="icon-wrapper">
                <img src={deli} />
                <span>Market Deli</span>
            </a>
            <a href="/amenidades/la-amada/ludoteca" className="icon-wrapper">
                <img src={ludoteca} />
                <span>{props.eng?"Resident’s Lounge & KidsClub":"Ludoteca y KidsClub " }</span>
            </a>
            <a href="/amenidades/la-amada/beachclub-restaurant"className="icon-wrapper">
                <img src={beachclubres} />
                <span>BeachClub Restaurant</span>
            </a>


            <a href="/amenidades/la-amada/salon" className="icon-wrapper">
                <img src={salon} />

                <span>{props.eng?"RESIDENTIAL LOUNGE":"Salón de Residentes" }</span>
           
            </a>

            <a href="/amenidades/playa/marina"className="icon-wrapper">
                <img src={marina} />
                <span>Marina</span>
            </a>

            <a href="/amenidades/playa/golf" className="icon-wrapper">
                <img src={golf} />
                <span>Campo de Golf</span>
            </a>

            <a href="/amenidades/playa/ciclopista"className="icon-wrapper">
                <img src={ciclopista} />
                <span>Ciclopista</span>
            </a>

            <a href="/amenidades/playa/seguridad" className="icon-wrapper">
                <img src={seguridad} />
                <span>Seguridad 24 Hrs</span>
            </a>

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
 <h3>{props.eng?"Exlusive services for our property owners":"Servicios extras exclusivos para Propietarios"}</h3>
 {props.eng?<p>Our Property Management and Rental Management programs are here to help you take care of your unit keeping it in the best conditions as if brand new. We manage all the payments and services needed, making your life easier and worry free. Forget about making any advance arrangements before coming in to enjoy your home, with our management programs we do that for you.</p>:<p>Con nuestro programa de Property Management y Rental Management te ayudamos a mantener tu propiedad en las mejores condiciones y realizamos el pago de todos los gastos y cuotas derivadas de la misma, haciéndote la vida más fácil y cuando uses la propiedad todo funcione al 100% de una forma segura y profesional.</p>}
        </div>


<div className="text-pic"> 
<div>
<h3>{props.eng?"Vacation Rental Management":"Administración de renta vacacional"}</h3>
 {props.eng?<p>For those who see La Amada as an investment, we have an expert hospitality team that controls the quality of units and their equipment, in order to rent them in an orderly fashion while guaranteeing the best rates and proper usage of your property and amenities, offering your guests a quality hotel service. </p>:<p>Para los que piensan en La Amada como una inversión, tenemos un equipo experto en hospitalidad quien controla la calidad y equipamiento de las unidades, para poderlas rentar ordenadamente, garantizando las mejores tarifas por noche y sobre todo el buen uso tanto de la propiedad como de sus amenidades, manteniendo el orden y dando a sus huéspedes un servicio hotelero de calidad. </p>}

</div>

<HandleImages name="invierte3" />
</div>


        </div>




    )
}

 


const Botones=(props)=>{
   return( <div className="invierte-buttons">
        <div>
        <Link to="/amenidades"> <button className="outlined-button light">{props.eng?"AMENITIES":"AMENIDADES"}</button></Link>
        <Link to="/residencias">  <button className="outlined-button light">{props.eng?"RESIDENCES":"RESIDENCIAS"}</button></Link>
        </div>
    </div>)
}



const FullImage = () => {
    return (
        <HandleImages name="invierte4" />
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