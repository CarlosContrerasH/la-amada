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
                <HandleImages name="amenidadesA10" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>ROOFTOPS & POOLS<br /><span className="sub">Beachfront Residences</span></> : <>ROOFTOPS Y ALBERCAS<br /><span className="sub">Residencias Frente a Playa</span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                "We have two rooftops located in different buildings. Each one has a pool, Jacuzzi, chaise lounges, hammock area, lounge, and grills where you can make the most of the amazing views of the Caribbean Sea, the Marina and the ecologic reserve as well as astonishing sunsets. This is the ideal spot to get away, read a book, chill and relax on your own or with your family or friends."
                :
                
                "Contamos con dos rooftops situados en diferentes edificios, cada uno con alberca y jacuzzi, camastros, área de hamacas, salas y asadores; donde podrás disfrutar increíbles vistas al mar Caribe, la marina y la reserva ecológica, así como, espectaculares atardeceres. Sin duda un lugar ideal para desconectarte un momento, para leer un libro, escaparse a descansar u organizar reuniones familiares y disfrutar con amigos. "
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