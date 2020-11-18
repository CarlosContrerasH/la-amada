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
                <HandleImages name="amenidadesA7" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        Kids Club 
                    
                    <br /><span className="sub">
                        
                    & Play Center
                        
                        </span></> : <>
                        
                        KIDS CLUB  

                    <br /><span className="sub">
                        
                    Y LUDOTECA
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
                An elegant and quiet space set up so you can have a good time with your friends or neighbors, where you can play board games, watch a movie or football game while feeling right at home. In this room you can also host work meetings if required.<br/>Created exclusively for the little ones, we can guarantee fun and entertainment with activities that stimulate their physical and mental development.<br/>This space is strategically located next to the Residents’ Lounge, with hidden windows, so that while the kids play, their parents can observe them while enjoying their own peace and quiet. 

                </>
                :
                
                <>
                
                Espacio tranquilo y elegante, ambientado para convivir con tus amigos o vecinos, donde te desconectes con juegos, puedas ver una película o un buen partido sintiéndote en la comodidad de tu hogar. En este espacio también podrás tener reuniones de trabajo si así lo requieres.<br/>Creado exclusivamente para los más pequeños del hogar, garantizando la diversión y entretenimiento con actividades infantiles que estimulan su desarrollo físico y mental.<br/>Este espacio está ubicado estratégicamente junto al salón de residentes, con ventanas ocultas, para que mientras los pequeños juegan, los papas puedan verlos y disfrutar de un momento de paz y tranquilidad para ellos.<br/>La Amada cuenta con un salón totalmente equipado con barra, cocina y baños, que se puede integrar a una de las albercas para hacer eventos cerrados con capacidad para 50 personas.

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