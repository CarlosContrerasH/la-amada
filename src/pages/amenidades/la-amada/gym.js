import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'


let playaSlider =[ <HandleImages name="gymH1"/>, <HandleImages name="gymH2"/>, <HandleImages name="gymH3"/> ]



const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
            <div className="icon-wrapper">
 
 
 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
      viewBox="0 0 150 150" enable-background="new 0 0 150 150" >

<g>
	<g>
		<path fill="#FFFFFF" d="M132.3,49.2h-5.7c-1,0-2,0.2-2.9,0.5v-9.1c0-4.7-3.9-8.6-8.6-8.6h-5.7c-4.7,0-8.6,3.9-8.6,8.6v20.1H49.2
			V40.6c0-4.7-3.9-8.6-8.6-8.6h-5.7c-4.7,0-8.6,3.9-8.6,8.6v9.1c-0.9-0.3-1.9-0.5-2.9-0.5h-5.7c-4.7,0-8.6,3.9-8.6,8.6v34.4
			c0,4.7,3.9,8.6,8.6,8.6h5.7c1,0,2-0.2,2.9-0.5v9.1c0,4.7,3.9,8.6,8.6,8.6h5.7c4.7,0,8.6-3.9,8.6-8.6V89.3h51.6v20.1
			c0,4.7,3.9,8.6,8.6,8.6h5.7c4.7,0,8.6-3.9,8.6-8.6v-9.1c0.9,0.3,1.9,0.5,2.9,0.5h5.7c4.7,0,8.6-3.9,8.6-8.6V57.8
			C140.9,53.1,137.1,49.2,132.3,49.2z M26.3,92.2c0,1.6-1.3,2.9-2.9,2.9h-5.7c-1.6,0-2.9-1.3-2.9-2.9V57.8c0-1.6,1.3-2.9,2.9-2.9
			h5.7c1.6,0,2.9,1.3,2.9,2.9V92.2z M43.5,109.4c0,1.6-1.3,2.9-2.9,2.9h-5.7c-1.6,0-2.9-1.3-2.9-2.9V92.2V57.8V40.6
			c0-1.6,1.3-2.9,2.9-2.9h5.7c1.6,0,2.9,1.3,2.9,2.9V109.4z M100.8,83.6H49.2V66.4h51.6V83.6z M118,57.8v34.4v17.2
			c0,1.6-1.3,2.9-2.9,2.9h-5.7c-1.6,0-2.9-1.3-2.9-2.9V40.6c0-1.6,1.3-2.9,2.9-2.9h5.7c1.6,0,2.9,1.3,2.9,2.9V57.8z M135.2,92.2
			c0,1.6-1.3,2.9-2.9,2.9h-5.7c-1.6,0-2.9-1.3-2.9-2.9V57.8c0-1.6,1.3-2.9,2.9-2.9h5.7c1.6,0,2.9,1.3,2.9,2.9V92.2z"/>
	</g>
</g>
 </svg>
 
 
                 
                 <span>
                     
                Gym
                     
                     </span></div> 
                     <SimpleSlider slides={playaSlider}/>
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        HEALTHCLUB
                    
                    <br /><span className="sub">
                        
                    subtitle
                        
                        </span></> : <>
                        
                        GYM

                    <br /><span className="sub">
                        
                  Único residencial con un equipamento de alto nivel
                        
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