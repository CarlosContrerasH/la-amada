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
                <HandleImages name="amenidadesA4" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                    multipurpose courts
                    
                    <br /><span className="sub">
                        
                        Subtitle
                        
                        </span></> : <>
                        
                        CANCHAS MULTIUSOS

                    <br /><span className="sub">
                        
                        Residencias Frente a Playa
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                "You and your children can train or just play in any of our tennis, padel and multi-purpose courts which offer fun when playing football, soccer, basketball, volleyball, or any other activity that can be enjoyed with friends. La Amada also offers extensive green areas and playground so that the little ones can have fun in an outdoor and healthy environment."
                :
                
                "Para que tú y tus hijos entrenen o simplemente jueguen en cualquiera de nuestras canchas de tenis, pádel y la multicancha, que ofrece diversión jugando futbol, basquetbol, voleibol o cualquier otra actividad para pasar con amigos. También La Amada cuenta con amplias áreas verdes y juegos infantiles para que los niños más pequeños se distraigan en un ambiente sano al aire libre."
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