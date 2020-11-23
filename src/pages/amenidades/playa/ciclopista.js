import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'


let playaSlider =[ <HandleImages name="ludotecaH1"/>, <HandleImages name="ludotecaH2"/>, <HandleImages name="ludotecaH3"/> ]



const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
            <div className="icon-wrapper">
 
 
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 165.1 130.9" enable-background="new 0 0 165.1 130.9"  >
<g>
	<path fill="#FFFFFF" d="M99.7,61.4c-0.9-0.8-2.3-0.7-3,0.2l-7.7,9.1c-1.6-0.9-3.4-1.4-5.3-1.4c-0.3,0-0.6,0-0.9,0l-1.5,0.1
		L66.4,35.4H68c4.4,0,8-3.6,8-8c0-2.7-2.2-4.9-5-4.9H55.7c-2.7,0-5,2.2-5,4.9c0,4.4,3.6,8,8,8h3l4.1,9.3l-12.2,12
		c-4.4-2.9-9.7-4.6-15.4-4.6c-15.5,0-28.1,12.6-28.1,28.1s12.6,28.1,28.1,28.1c12.2,0,22.5-7.8,26.5-18.6l18.9,1.4
		c6,0,10.9-4.9,10.9-10.9c0-2.5-0.9-4.9-2.3-6.8l7.7-9.1C100.7,63.5,100.6,62.2,99.7,61.4L99.7,61.4z M58.7,31.1
		c-2,0-3.7-1.6-3.7-3.7c0-0.4,0.3-0.6,0.7-0.6H71c0.4,0,0.7,0.3,0.7,0.6c0,2-1.7,3.7-3.7,3.7H58.7z M54,62.4
		c2.7,2.4,4.8,5.3,6.2,8.7l-16.3,1.2L54,62.4z M38.2,104.1c-13.1,0-23.8-10.7-23.8-23.8s10.7-23.8,23.8-23.8c4.5,0,8.6,1.2,12.2,3.4
		L37.3,72.7c-3.7,0.5-6.6,3.7-6.6,7.5c0,4,3.1,7.3,7.1,7.6l22.4,1.7C56.6,98,48.1,104.1,38.2,104.1L38.2,104.1z M41.5,80.2
		c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3c0-1.8,1.5-3.3,3.3-3.3C40,77,41.5,78.4,41.5,80.2z M61.5,85.2L44.8,84
		c0.6-1.1,1-2.4,1-3.7s-0.4-2.6-1-3.7l16.7-1.2c0.3,1.6,0.5,3.3,0.5,5S61.9,83.6,61.5,85.2L61.5,85.2z M74.4,86.2l-8.6-0.6
		c0.3-1.7,0.5-3.5,0.5-5.3s-0.2-3.6-0.5-5.3l8.6-0.6c-1.1,1.7-1.8,3.7-1.8,5.9S73.3,84.5,74.4,86.2z M64.7,70.7
		c-1.6-4.4-4.2-8.3-7.7-11.4L67.6,49l9.1,20.9L64.7,70.7z M83.6,86.9c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6c0.9,0,1.7,0.2,2.4,0.5
		L82,78.9c-0.8,0.9-0.7,2.3,0.2,3c0.4,0.3,0.9,0.5,1.4,0.5c0.6,0,1.2-0.3,1.6-0.8l4.1-4.8c0.6,1,0.9,2.1,0.9,3.4
		C90.2,83.9,87.3,86.9,83.6,86.9z"/>
	<path fill="#FFFFFF" d="M129,52.1c-2.9,0-5.7,0.4-8.4,1.3l-10.4-26.6h12.2c0.4,0,0.7,0.3,0.7,0.6c0,2-1.7,3.7-3.7,3.7
		c-1.2,0-2.2,1-2.2,2.2c0,1.2,1,2.2,2.2,2.2c4.4,0,8-3.6,8-8c0-2.7-2.2-4.9-5-4.9h-15.3c-0.7,0-1.4,0.4-1.8,0.9
		c-0.4,0.6-0.5,1.3-0.2,2l7,18.1l-8.9,10.4c-0.8,0.9-0.7,2.3,0.2,3c0.4,0.3,0.9,0.5,1.4,0.5c0.6,0,1.2-0.3,1.6-0.8l7.4-8.7l2.7,6.9
		c-9.3,4.6-15.8,14.2-15.8,25.3c0,15.5,12.6,28.1,28.1,28.1s28.1-12.6,28.1-28.1S144.5,52.1,129,52.1z M129,104.1
		c-13.1,0-23.8-10.7-23.8-23.8c0-9.3,5.3-17.3,13-21.2l6,15.4c-1.7,1.4-2.8,3.5-2.8,5.9c0,4.2,3.4,7.6,7.6,7.6s7.6-3.4,7.6-7.6
		s-3.4-7.6-7.6-7.6c-0.3,0-0.6,0-0.8,0l-6-15.3c2.2-0.6,4.4-1,6.8-1c13.1,0,23.8,10.7,23.8,23.8S142.1,104.1,129,104.1L129,104.1z
		 M125.7,80.2c0-1.8,1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3S125.7,82.1,125.7,80.2z"/>
</g>
</svg>
 
 
                 
                 <span>
                     
                 Bike & Running Path
                     
                     </span></div> 
                     <span className="ciclopista-pre"></span>
                    <HandleImages classes="ciclopista" name="bikeH1"/>
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        Bike & Running Path
                    
                    <br /><span className="sub">
                        
                    2.4 mile bike and running path surrounded by nature
                        
                        </span></> : <>
                        
                        Ciclopista 

                    <br /><span className="sub">
                        
                 Pedalea, corre o camina rodeado de naturaleza.
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
                For those who have active lifestyles, our 2.4 mile bike and running path winds through the whole complex in an environment surrounded by nature, and most importantly, is totally safe so that you can relax knowing that you and your family are in a closed and controlled area. 






                </>
                :
                
                <>
                
                Para los que gustan de una vida activa, la ciclopista de 3.8 km recorre todo el complejo en un entorno rodeado de naturaleza, pero sobre todo seguro, para que tengas la tranquilidad absoluta de que tú y tu familia están en un lugar cerrado y controlado.

                </>
                }


                </p>

                <Link to="/amenidades/playa"  ><button className="back"><span><span className="arrow-back"></span></span><br />{props.eng ? "Back" : "Regresar"}</button></Link>
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