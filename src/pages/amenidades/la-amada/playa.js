import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"

 
import { Link } from 'gatsby'

let playaSlider =[<HandleImages name="amenidadesA9"/>, <HandleImages name="playaH1"/>, <HandleImages name="playaH2"/>, <HandleImages name="playaH3"/>, <HandleImages name="playaH4"/> ]


const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
<div className="amenidades-top">
            <Link to="/amenidades/la-amada/areas-verdes"  ><button className="back"><span><span className="arrow-back"></span></span><br />{props.eng ? "Back to Amenities" : "Volver a Amenidades"}</button></Link>
            <div className="icon-wrapper">
 
 
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
	 viewBox="0 0 150 150" 
enableBackground="new 0 0 150 150"  ß>
<g>
	<g>
		<g>
			<path fill="#FFFFFF" d="M131.9,110.9L131.9,110.9c-1.8-1.2-3.3-2.7-4.6-4.5c-3.1-3.5-7-7.8-14.2-7.8c-7.2,0-11,4.2-14.2,7.9
				c-3.2,3.8-5.3,6-10,6s-7.1-2.6-10-6c-2.9-3.3-6.8-7.9-14.2-7.9c-7.4,0-11,4.2-14.2,7.9c-3.2,3.8-5.3,6-10,6s-7.1-2.6-10-6
				c-2-2.6-4.5-4.8-7.4-6.4c-1.4-0.7-3.1-0.1-3.8,1.3c-0.7,1.4-0.1,3.1,1.3,3.8c2.2,1.3,4.1,3,5.7,5c3.2,3.8,7,7.9,14.2,7.9
				s11-4.2,14.2-7.9c3.2-3.8,5.3-6,10-6c4.7,0,7.1,2.6,10,6c2.9,3.3,6.8,7.9,14.2,7.9s11-4.2,14.2-7.9c3.2-3.8,5.3-6,10-6
				c4.7,0,7.1,2.6,10,6c1.6,2.1,3.5,3.9,5.7,5.4c1.3,0.8,3.1,0.5,3.9-0.8C133.6,113.5,133.2,111.8,131.9,110.9z"/>
			<path fill="#FFFFFF" d="M131.9,90.1L131.9,90.1c-1.8-1.2-3.3-2.7-4.6-4.5c-3.1-3.5-7-7.8-14.2-7.8c-7.2,0-11,4.2-14.2,7.9
				c-3.2,3.8-5.3,6-10,6s-7.1-2.6-10-6c-2.9-3.3-6.8-7.9-14.2-7.9c-7.4,0-11,4.2-14.2,7.9c-3.2,3.8-5.3,6-10,6s-7.1-2.6-10-6
				c-2-2.6-4.5-4.8-7.4-6.4c-1.4-0.7-3.1-0.1-3.8,1.3c-0.7,1.4-0.1,3.1,1.3,3.8c2.2,1.3,4.1,3,5.7,5c3.2,3.8,7,7.9,14.2,7.9
				s11-4.2,14.2-7.9c3.2-3.8,5.3-6,10-6c4.7,0,7.1,2.6,10,6c2.9,3.3,6.8,7.9,14.2,7.9s11-4.2,14.2-7.9c3.2-3.8,5.3-6,10-6
				c4.7,0,7.1,2.6,10,6c1.6,2.1,3.5,3.9,5.7,5.4c1.3,0.8,3.1,0.5,3.9-0.8C133.6,92.6,133.2,90.9,131.9,90.1z"/>
			<path fill="#FFFFFF" d="M131.9,67.8L131.9,67.8c-1.8-1.2-3.3-2.7-4.6-4.5c-3.1-3.5-7-7.8-14.2-7.8c-7.2,0-11,4.2-14.2,7.9
				c-3.2,3.8-5.3,6-10,6s-7.1-2.6-10-6c-2.9-3.3-6.8-7.9-14.2-7.9c-7.4,0-11,4.2-14.2,7.9c-3.2,3.8-5.3,6-10,6s-7.1-2.6-10-6
				c-2-2.6-4.5-4.8-7.4-6.4c-1.4-0.7-3.1-0.1-3.8,1.3c-0.7,1.4-0.1,3.1,1.3,3.8c2.2,1.3,4.1,3,5.7,5c3.2,3.8,7,7.9,14.2,7.9
				s11-4.2,14.2-7.9c3.2-3.8,5.3-6,10-6c4.7,0,7.1,2.6,10,6c2.9,3.3,6.8,7.9,14.2,7.9s11-4.2,14.2-7.9c3.2-3.8,5.3-6,10-6
				c4.7,0,7.1,2.6,10,6c1.6,2.1,3.5,3.9,5.7,5.4c1.3,0.8,3.1,0.5,3.9-0.8C133.6,70.4,133.2,68.6,131.9,67.8z"/>
			<path fill="#FFFFFF" d="M20.5,41.2c2.2,1.3,4.1,3,5.7,5c3.2,3.8,7,7.9,14.2,7.9s11-4.2,14.2-7.9c3.2-3.8,5.3-6,10-6
				c4.7,0,7.1,2.6,10,6c2.9,3.3,6.8,7.9,14.2,7.9s11-4.2,14.2-7.9c3.2-3.8,5.3-6,10-6c4.7,0,7.1,2.6,10,6c1.6,2.1,3.5,3.9,5.7,5.4
				c1.3,0.8,3.1,0.5,3.9-0.8c0.8-1.3,0.5-3.1-0.8-3.9l0,0c-1.8-1.2-3.3-2.7-4.6-4.5c-3.1-3.5-7-7.8-14.2-7.8c-7.2,0-11,4.2-14.2,7.9
				c-3.2,3.8-5.3,6-10,6c-4.7,0-7.1-2.6-10-6c-2.9-3.3-6.8-7.9-14.2-7.9s-11,4.2-14.2,7.9c-3.2,3.8-5.3,6-10,6s-7.1-2.6-10-6
				c-2-2.6-4.5-4.8-7.4-6.4c-1.4-0.7-3.1-0.1-3.8,1.3C18.6,38.8,19.2,40.5,20.5,41.2z"/>
		</g>
	</g>
</g>
</svg>


                
                <span>Playa</span></div>             <Link to="/amenidades/la-amada/beachclub-restaurant"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>
                <SimpleSlider slides={playaSlider}/>
                <span className="wrapped-header playa">
                    <h1> {props.eng == true ? <>Exclusive Beach<br /><span className="sub">275 linear yards of white sandy beach</span></> : <>250 metros lineales de frente de playa<br /><span className="sub">Residencias Frente a Playa</span></>}</h1>
                </span>
                <p>

                {props.eng == true ?
                
                "275 linear yards of white sandy beach of La Amada, turquoise tranquil sea, and the marina breakwater make this a perfect spot for over 2 mile walks on the private beach of Playa Mujeres. Enjoy, play, and spend time with your family in a natural environment that is spacious, private, exclusive, and has a spectacular view of Isla Mujeres."
                :
                
                "Con sus 250 metros lineales de frente de playa de arena blanca, con mar turquesa y rematando con la escollera de la marina, hace un lugar único para realizar caminatas por la playa de más de 3.5 km, disfrutar, convivir y jugar con tu familia en un ambiente natural lleno de amplitud y privacidad con espectaculares vistas a Isla Mujeres."
                }


                </p>

                <button className="back" onClick={()=>window.history.back()}><span><span className="arrow-back"></span></span><br />{props.eng ? "Back to Green Areas" : "Volver a Areas Verdes"}</button>
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