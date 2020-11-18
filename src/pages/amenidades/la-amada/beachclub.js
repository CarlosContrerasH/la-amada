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
                <HandleImages name="amenidadesA3" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>Beachclub  <br /><span className="sub">Beachfront Residences</span></> : <>Beachclub <br /><span className="sub">Residencßias Frente a Playa</span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                "A spectacularly designed 5,500 sqf private beach club that offers 2 pools with four Jacuzzis, a restaurant-bar with an ample and high-quality menu, pool bar, chaise lounge area, cabanas, and open spaces connected with nature, is the ideal place to spend the day with your family."
                :
                
                "Con un área de 2,200 m2 y espectacular diseño, este club cuenta con 2 albercas con cuatro jacuzzis, restaurant bar con amplio menú de alta calidad, pool bar, área de camastros, cabanas y espacios abiertos privados en conexión con la naturaleza, ideal para pasar el día en familia."
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