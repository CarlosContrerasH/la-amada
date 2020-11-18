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
                <HandleImages name="amenidadesA1" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        GREEN AREAS
                    
                    <br /><span className="sub">
                        
                    subtitles
                        
                        </span></> : <>
                        
                        ÁREAS VERDES

                    <br /><span className="sub">
                        
                    subtitulo
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
            <strong>  MORE THAN A PLACE TO LIVE</strong>  <br/><br/>

Go deep into a natural world where the mundane becomes extraordinary, time stops and each moment is worth treasuring. 
<br/><br/>
In this space of natural connection, harmony with the environment will lead you to love life and truly live the La Amada experience.
             
                    </>
                :
                
                <>
             
             
             <strong>    MAS QUE UN LUGAR PARA VIVIR </strong>  Adéntrate en un mundo natural donde lo cotidiano se vuelve extraordinario, el tiempo se detiene y atesoras cada momento de tu día.  Un espacio de conexión natural donde la armonía con el entorno te lleva a amar la vida y vivir La Amada.
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