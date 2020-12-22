import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'


 


const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div><div className="amenidades-top">
                    <Link to="/amenidades/playa/seguridad"  ><button className="back"><span><span className="arrow-back"></span></span><br />PREV</button></Link>
            <div className="icon-wrapper">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 165.1 130.9" enable-background="new 0 0 165.1 130.9" >
<g>
	<g>
		<g>
			<path fill="#4A7871" d="M20.4,42.9c-6.8,0-12.4,5.5-12.4,12.4s5.5,12.4,12.4,12.4s12.4-5.5,12.4-12.4S27.3,42.9,20.4,42.9z
				 M20.4,61.4c-3.4,0-6.2-2.8-6.2-6.2s2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2S23.9,61.4,20.4,61.4z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#4A7871" d="M108.9,49.1l-5.3-10.7c-0.5-1-1.6-1.7-2.8-1.7h-9.3c-0.8,0-1.6,0.3-2.2,0.9L77.9,49.1H29.7
				c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3,3.1c-1.5,0-2.8,1.1-3,2.6c-0.3,1.7,0.9,3.3,2.5,3.6c11.3,1.9,30.6,6.5,35,11.1l0.2,0.4
				c5.8,11.4,13.1,25.6,27.1,25.6h43.3c12.3,0,21.6-6.6,21.6-15.4C156.4,73.7,135.5,50.2,108.9,49.1z M134.8,92.3H91.5
				c-10.2,0-16.2-11.8-21.6-22.3l-0.4-0.8c-0.1-0.2-0.2-0.4-0.4-0.6c-6.7-7.8-35.6-12.9-38.9-13.4c-0.1,0-0.3,0-0.5,0h49.4
				c0.8,0,1.6-0.3,2.2-0.9l11.5-11.5h6.1l5.3,10.7c0.5,1,1.6,1.7,2.8,1.7c25.3,0,43.3,23.2,43.3,27.8
				C150.2,88.2,143.3,92.3,134.8,92.3z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#4A7871" d="M150.2,80h-24.8c-4.1,0-7.7-2.7-8.9-6.6l-6.6-22.1c-0.5-1.6-2.2-2.6-3.8-2.1c-1.6,0.5-2.6,2.2-2.1,3.8
				l6.6,22.1c2,6.6,7.9,11,14.8,11h24.8c1.7,0,3.1-1.4,3.1-3.1C153.3,81.3,151.9,80,150.2,80z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#4A7871" d="M26.4,45l-6.2-12.4c-0.7-1.5-2.5-2.1-4-1.5l-6.3,2.7c-1.5,0.6-2.2,2.3-1.7,3.8l3.1,9.3
				c0.6,1.6,2.3,2.5,3.9,2c1.6-0.5,2.5-2.3,2-3.9L15,38.4l1-0.4l4.9,9.8c0.5,1.1,1.6,1.7,2.8,1.7c0.5,0,0.9-0.1,1.4-0.3
				C26.5,48.4,27.2,46.5,26.4,45z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#4A7871" d="M24.9,61.7c-1.5-0.7-3.4-0.1-4.1,1.4l-0.4,0.8c-0.3-1.4-1.5-2.5-3-2.5c-1.7,0-3.1,1.4-3.1,3.1v6.2
				c0,1.7,1.4,3.1,3.1,3.1h3.1c1.2,0,2.2-0.7,2.8-1.7l3.1-6.2C27.1,64.4,26.4,62.5,24.9,61.7z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#4A7871" d="M97.7,18.2c-1.7,0-3.1,1.4-3.1,3.1v3.1c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1v-3.1
				C100.8,19.6,99.4,18.2,97.7,18.2z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#4A7871" d="M153.3,24.4H97.7c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1h55.6c1.7,0,3.1-1.4,3.1-3.1
				S155,24.4,153.3,24.4z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#4A7871" d="M97.7,24.4H42.1c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1h55.6c1.7,0,3.1-1.4,3.1-3.1
				S99.4,24.4,97.7,24.4z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#4A7871" d="M110,92.3c-1.7,0-3.1,1.4-3.1,3.1v12.4c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1V95.4
				C113.1,93.7,111.7,92.3,110,92.3z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#4A7871" d="M134.8,92.3c-1.7,0-3.1,1.4-3.1,3.1v12.4c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1V95.4
				C137.8,93.7,136.5,92.3,134.8,92.3z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#4A7871" d="M154.8,98.9c-1.5-0.8-3.4-0.3-4.2,1.2c-1.5,2.6-7.4,4.2-9.7,4.6H79.1c-1.7,0-3.1,1.4-3.1,3.1
				s1.4,3.1,3.1,3.1l62.2,0c1.1-0.2,11.3-1.7,14.6-7.7C156.8,101.6,156.3,99.7,154.8,98.9z"/>
		</g>
	</g>
</g>
</svg>

 
 
                 
                 <span>
                     
                 Heliport
                     
                     </span></div> 
					                          
                     <Link to="/amenidades/playa/delfinario"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>
                     <HandleImages name="helipuertoH1"/>
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        Heliport
                    
                    <br /><span className="sub">
                        
               
                     El lugar de los grandes empresarios
                        
                        </span></> : <>
                        
                        Helipuerto  

                    <br /><span className="sub">
                        
                    
               El lugar de los grandes empresarios
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
--



                </>
                :
                
                <>
           --    </>
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