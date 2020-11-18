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
                <HandleImages name="amenidadesA2" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>Beachclub Restaurant<br /><span className="sub">Beachfront Residences</span></> : <>Beachclub Restaurant<br /><span className="sub">Residencias Frente a Playa</span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                "Eng"
                :
                
                "Nuestro restaurante Mar y Aroma a cargo del Chef Octavio Santiago, es el único restaurante operado por un Chef dentro de un residencial en Cancún. Nuestro menú incluye desde desayunos contemporaneos mexicanos, hasta pesca del día sazonada con especias y aromas de la región. El Chef O. Santiago ha sido galardonado en diferentes ocasiones por sus diferentes y únicas técnicas en la cocina. Cabe destacar que el Chef es también el responsable de la cocina del restaurante Kiosco Verde, primer restaurante en Cancún con mas de 45 años de trayectoria. Si algo acompaña a nuestro Chef es la tradición y gusto por el buen sabor y servicio. "
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