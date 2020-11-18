import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'




const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
                <HandleImages name="amenidadesA9" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>Exclusive Beach<br /><span className="sub">Beachfront Residences</span></> : <>Playa Exclusiva<br /><span className="sub">Residencias Frente a Playa</span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                "275 linear yards of white sandy beach of La Amada, turquoise tranquil sea, and the marina breakwater make this a perfect spot for over 2 mile walks on the private beach of Playa Mujeres. Enjoy, play, and spend time with your family in a natural environment that is spacious, private, exclusive, and has a spectacular view of Isla Mujeres."
                :
                
                "Con sus 250 metros lineales de frente de playa de arena blanca, con mar turquesa y rematando con la escollera de la marina, hace un lugar único para realizar caminatas por la playa de más de 3.5 km, disfrutar, convivir y jugar con tu familia en un ambiente natural lleno de amplitud y privacidad con espectaculares vistas a Isla Mujeres."
                }


                </p>

                <Link to="/amenidades/la-amada"  ><button className="back"><span><span className="arrow-back"></span></span><br />{props.eng ? "Back" : "Regresar"}</button></Link>
            </div>
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
                <Slider />

            </Layout>)
    }



}

export default Amenidades