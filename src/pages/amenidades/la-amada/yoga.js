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
                <HandleImages name="amenidadesA11" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>Yoga<br /><span className="sub"> & Multipurpose Exercise Room </span></> : <>SALÓN DE YOGA<br /><span className="sub">Residencias Frente a Playa</span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                "Because we know how important it is to keep your mind, body, and soul balanced, we have created a comfortable and functional space to obtain harmony within ourselves, while working our body, releasing stress, and feeling the calm and peace that we all need."
                :
                
                "Basados en la importancia de mantener el equilibrio del cuerpo, mente y alma, creamos un espacio cómodo y funcional para obtener la armonía en todo nuestro ser, trabajando el cuerpo, liberando el estrés, obteniendo la calma y paz mental que todos necesitamos."
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