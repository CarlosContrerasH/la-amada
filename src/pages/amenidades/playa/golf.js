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
            <div className="amenidades-top">
                    <Link to="/amenidades/playa/ciclopista"  ><button className="back"><span><span className="arrow-back"></span></span><br />PREV</button></Link>
            <div className="icon-wrapper">
 
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
	 viewBox="0 0 100.4 130.9" enable-background="new 0 0 100.4 130.9" >
<g>
	<g>
		<g>
			<path fill="#4A7871" d="M51.4,14.6c-18.6,0-33.7,15-33.7,33.6c0,11.4,5.7,22,15.3,28.2v10.2l9.2,6.1v13.7h-9.2v6.1h36.7v-6.1
				h-9.2V92.8l9.2-6.1V76.5c9.5-6.2,15.3-16.8,15.3-28.2C85.1,29.7,70,14.6,51.4,14.6z M63.6,83.4l-9.2,6.1v16.9h-6.1V89.5l-9.2-6.1
				v-3.8c7.9,3.1,16.6,3.1,24.5,0V83.4z M51.4,75.8c-15.2,0-27.5-12.3-27.5-27.5s12.3-27.5,27.5-27.5s27.5,12.3,27.5,27.5
				C78.9,63.5,66.6,75.8,51.4,75.8z"/>
			<path fill="#4A7871" d="M59.7,61.2l3.3,5.1c2-1.3,3.8-2.9,5.3-4.8l-4.8-3.8C62.4,59.1,61.1,60.2,59.7,61.2z"/>
			<path fill="#4A7871" d="M51.4,63.6c-0.5,0-1,0-1.5-0.1l-0.6,6.1c0.7,0.1,1.4,0.1,2.1,0.1c1.7,0,3.4-0.2,5-0.6L55,63.2
				C53.8,63.4,52.6,63.6,51.4,63.6z"/>
			<path fill="#4A7871" d="M66.7,48.3c0,1.7-0.3,3.4-0.8,5l5.8,2c0.8-2.3,1.2-4.6,1.2-7H66.7z"/>
			<rect x="20.8" y="106.4" fill="#4A7871" width="6.1" height="6.1"/>
			<rect x="75.9" y="106.4" fill="#4A7871" width="6.1" height="6.1"/>
		</g>
	</g>
</g>
</svg>
 
 
                 
                 <span>
                     
                 Golf Course  
                     
                     </span></div> 
                                     
                     <Link to="/amenidades/playa/marina"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>
                     <HandleImages name="golfH1"/>
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        Golf Course 
                    
                    <br /><span className="sub">
                        
                Playa Mujeres Golf Club
                        
                        </span></> : <>
                        
                        Campo de Golf   

                    <br /><span className="sub">
                        
                     Playa Mujeres Golf Club
                        
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

                <Link to="/amenidades/playa"  ><button className="back"><span><span className="arrow-back"></span></span><br />{props.eng ? "LA AMADA Amenities" : "AMENIDADES LA AMADA"}</button></Link>
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