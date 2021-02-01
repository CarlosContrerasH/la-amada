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
                         <p>All of our units are ready to be immediately delivered, so you can enjoy your new home from the very beginning with fully functioning amenities; and for those who are looking for profitability, our units can be rented on an extended basis or per vacation period. Being a beach community, the property offers good occupation and rates with attractive capital returns for the investor, all made easier by the option of being operated by our staff.

                         </p>
        
                        : <p>Invertir en La Amada es invertir seguro dada la ubicación, amenidades y arquitectura e interiorismo de lujo con el que se cuenta. Con nuestras unidades de entrega inmediata podrás gozar desde el primer momento , tu nuevo hogar con todas las amenidades que ofrecemos funcionando; o bien para los que buscan rentabilidad, nuestras unidades se pueden rentar anual o vacacionalmente, que al ser una comunidad en la playa ofrece buenas ocupaciones con rendimientos muy atractivos para el inversionista y con la facilidad de ser operada por el mismo desarrollo.</p>}
          

        </div>
        <div>

        {props.eng == true ?
                         <p>Playa Mujeres is the only gated community within Costa Mujeres, the area with the greatest hotel growth in the state, which will simultaneously generate capital gains for your property and investment.

                         </p>
        
                        : <p>Playa Mujeres es la única comunidad cerrada dentro de Costa Mujeres, la zona con mayor crecimiento hotelero del estado, mismo que generará una alta plusvalía para tu propiedad e inversión.</p>}
          
          {props.eng == true ?
                         <p>We have given great thought to meeting your every need, which is why we offer an area that functions as a reception, where you can receive your guests with an elite service that gives support regardless of the activity, whether inside or outside the complex. This way you, your family, and friends can enjoy all the experiences that the destination has to offer.

                         </p>
        
                        : <p>Pensando en que vivas con todas las comodidades resueltas, en el centro de todas las amenidades ponemos tu disposición un espacio que funge como recepción, donde podrás recibir a tus huéspedes con un servicio élite para apoyarte en cualquier actividad, tanto dentro del desarrollo como fuera de él, para que tú y tu familia o invitados gocen de todas las experiencias que ofrece el destino.
                        </p>}
          


        </div>



    </ScrollWrapper>)
}


const Icons = (props) => {
    return (<div className="invierte-icons-wrapper">
        <h3>{props.eng?"Residence’s experiences":"Amenidades dentro del residencial"}</h3>
        <div className="icons">
            <div className="icon-wrapper">
                <img src={playa} />
                <span>{props.eng?"Beach":"Playa"}</span>
            </div>
            <div className="icon-wrapper">
                <img src={concierge} />
                <span>{props.eng?"Beach":"Playa"}</span>
            </div>
            <div className="icon-wrapper">
                <img src={beachclub} />
                <span>{props.eng?"Lobby, motor lobby & Concierge":"Lobby, motor lobby y Concierge"}</span>
            </div>
            <div className="icon-wrapper">
                <img src={rooftop} />
                <span>Beachclub</span>
            </div>
            <div className="icon-wrapper">
                <img src={yoga} />
                <span>{props.eng?"Yoga Studio":"Salón de yoga"}</span>
            </div>
            <div className="icon-wrapper">
                <img src={canchas} />
                <span>{props.eng?"Multipurpose Courts":"Canchas Multiusos" }</span>
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
                <span>{props.eng?"Resident’s Lounge & KidsClub":"Ludoteca y KidsClub " }</span>
            </div>
            <div className="icon-wrapper">
                <img src={beachclubres} />
                <span>BeachClub Restaurant</span>
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
 <h3>{props.eng?"Resident’s Only Services":"Servicions exclusivos para Residentes"}</h3>
 {props.eng?<p>
La Amada takes everyone into consideration, and if you do not live here permanently, we can help you keep your property in the best condition. We take care of all the expenses and fees making your life easier, so that when you come back, everything will be working perfectly in a safe and professional way, ask for our Property Management program.</p>:<p>En La Amada Residences pensamos en todos, por ello te ayudamos a mantener tu propiedad en las mejores condiciones y realizamos el pago de todos los gastos y cuotas derivadas de la misma, haciéndote la vida más fácil y cuando uses la propiedad todo funcione al 100% de una forma segura y profesional con nuestro programa de Property Management y Rental Management.</p>}
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