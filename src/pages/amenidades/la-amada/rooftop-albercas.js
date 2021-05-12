import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'


  
let bigSlider =[<HandleImages name="amenidadesA10"/>, <HandleImages name="rooftop"/>, <HandleImages name="roofH2"/>, <HandleImages name="roofH3"/>]
 

const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
            <div className="amenidades-top">
                    <Link to="/amenidades/la-amada/beachclub"  ><button className="back"><span><span className="arrow-back"></span></span><br />Volver a Amenidades</button></Link>
            <div className="icon-wrapper">
 
 
            <svg version="1.1" id="Layer_1"   x="0px" y="0px"
	 viewBox="0 0 150 150" 
enableBackground="new 0 0 150 150"  >
<g>
	<g>
		<g>
			<path fill="#FFFFFF" d="M108.5,15.6c-10.1,0-18.4,8.2-18.4,18.4v9.7H46.5V34c0-7.4,6-13.4,13.4-13.4s13.4,6,13.4,13.4
				c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5c0-10.1-8.2-18.4-18.4-18.4S41.6,23.8,41.6,34v62.4C41.4,97.8,42.7,99,44,99
				s2.5-1.1,2.5-2.5v-6.2h43.7v6.2c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5V34c0-7.4,6-13.4,13.4-13.4c7.4,0,13.3,6,13.3,13.4
				c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5C126.9,23.8,118.6,15.6,108.5,15.6z M90.2,85.1H46.5v-8.8h43.7V85.1z M90.2,71.4
				H46.5v-8.8h43.7V71.4z M90.2,57.4H46.5v-8.8h43.7V57.4z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#FFFFFF" d="M120.7,108.6c-0.5-1.2-2.1-1.9-3.3-1.2c-12.3,5.3-18.4,2.7-24.8,0c-6.6-2.7-13.3-5.6-25.2,0
				c-12.3,5.3-18.4,2.7-24.8,0c-6.6-2.7-13.4-5.6-25.4,0c-1.2,0.5-1.8,2.1-1.2,3.3c0.5,1.2,2.1,1.8,3.3,1.2
				c10-4.7,15.2-2.5,21.3,0.1c4,1.6,8.2,3.4,13.9,3.4c4.1,0,8.9-1,14.9-3.6c10-4.7,15.2-2.5,21.3,0.1c4,1.6,8.2,3.4,13.9,3.4
				c4.1,0,8.9-1,14.9-3.6C120.6,111.3,121.2,109.8,120.7,108.6z"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="#FFFFFF" d="M120.6,127.5c-0.5-1.2-2.1-1.9-3.3-1.2c-12.3,5.3-18.4,2.7-24.8,0c-6.6-2.7-13.3-5.6-25.2,0
				c-12.3,5.3-18.4,2.7-24.8,0c-6.6-2.7-13.3-5.6-25.4,0c-1.2,0.5-1.8,2.1-1.2,3.3c0.7,1.2,2.2,1.8,3.4,1.2
				c10-4.7,15.2-2.5,21.3,0.1c4,1.6,8.2,3.4,13.9,3.4c4.1,0,8.9-1,14.9-3.6c10-4.7,15.2-2.5,21.3,0.1c4,1.6,8.2,3.4,13.9,3.4
				c4.1,0,8.9-1,14.9-3.6C120.6,130.3,121.2,128.8,120.6,127.5z"/>
		</g>
	</g>
</g>
</svg>
 
 
                 
                 <span>
                     
                     ROOFTOPS & POOLS
                     
                     </span></div> 


                     <Link to="/amenidades/la-amada/yoga"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>
                     <SimpleSlider slides={bigSlider}/>
                <span className="wrapped-header playa">
                    <h1> {props.eng == true ? <>ROOFTOPS & POOLS<br /><span className="sub">Ideal spot to get away</span></> : <>Lujo en albercas <br /><span className="sub">Conoce nuestras exclusivas áreas de albercas</span></>}</h1>
                </span>
                <p>

                {props.eng == true ?
                
                "Each of our two separate rooftops are fitted with a swimming pool, a jacuzzi, hammocks, lawn chairs, lounge rooms and barbecues where you can enjoy spectacular views of the Caribbean Sea, the marine and the neighbouring natural reserve, and the breathtaking sunsets that only the Riviera Maya offers. It is the perfect place to take in the sea breeze, break away from everything, read a good book, enjoy quality time with your friends and family, and ultimately relax. "
                :
                
                "Contamos con dos rooftops situados en diferentes edificios; cada uno equipados con alberca, jacuzzi, camastros, área de hamacas, salas y asadores; donde podrás disfrutar increíbles vistas al Mar Caribe, la marina y la reserva ecológica; así como, espectaculares atardeceres. Sin duda un lugar ideal para desconectarse un momento, leer un libro, escaparse a descansar u organizar reuniones familiares y disfrutar con amigos.  "
                }


                </p>

                <button className="back" onClick={()=>window.history.back()}><span><span className="arrow-back"></span></span><br />{props.eng ? "Back to Beach Club" : "Volver a Club de Playa"}</button>
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