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
                <HandleImages name="amenidadesA8" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        MARKET DELI
                    
                    <br /><span className="sub">
                        
                        Subtitle
                        
                        </span></> : <>
                        
                        MARKET DELI

                    <br /><span className="sub">
                        
                        Residencias Frente a Playa
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                "Taking La Amada's residents’ comfort into consideration, we have built a mini grocery store inside the complex to fulfil your basic needs, as well as snacks, prepared food, a good old Starbucks coffee, or a variety of wines from La Europea Express."
                :
                
                "Pensando en la comodidad de los residentes de La Amada, dentro del desarrollo contamos con un minisúper para cubrir tus necesidades básicas, así como snacks, comida preparada, un buen café de Starbucks o la variedad de vinos de la Europea Express."
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