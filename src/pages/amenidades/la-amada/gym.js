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
                <HandleImages name="amenidadesA6" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        HEALTHCLUB
                    
                    <br /><span className="sub">
                        
                    subtitle
                        
                        </span></> : <>
                        
                        GYM

                    <br /><span className="sub">
                        
                  subtittulo
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
                We know that your health is very important, which is why we offer an area for you to exercise near your home with no need to leave the residences. This is an indoor air-conditioned space with a pool view. We provide the latest gym equipment and amenities so you can complete your daily routines and keep yourself healthy.
                </>
                :
                
                <>
               Porque sabemos que tu salud es muy importante, ponemos a tu disposición un área para practicar tu actividad física cerca de tu hogar, sin desplazarte fuera del desarrollo, en un espacio cerrado y climatizado con vistas a la alberca. Todas las comodidades y equipos de primera generación para lograr tus rutinas diarias y mantener tu estado físico en las mejores condiciones.
                </>
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