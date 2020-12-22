import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'


  
let bigSlider =[ <HandleImages name="roofH1"/>, <HandleImages name="roofH2"/>, <HandleImages name="roofH3"/>]
 

const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
            <div className="amenidades-top">
                    <Link to="/amenidades/la-amada/beachclub"  ><button className="back"><span><span className="arrow-back"></span></span><br />PREV</button></Link>
            <div className="icon-wrapper">
 
 
 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
      viewBox="0 0 150 150" enable-background="new 0 0 150 150" >
<g>
	<path fill="#F6F4F2" d="M21.7,33.5c-7,9-10.8,20.3-10.6,31.7c0,0.5,0.2,0.8,0.3,1.1l5.7,8.4c1.1,1.6,3.1,2.3,4.9,1.8l19.2-5.1
		c1.9-0.5,3.2-2.1,3.3-4.1l0.3-4.5l2.5,3.7c1.1,1.6,3.1,2.3,4.9,1.8l7.7-2.1l10.6,39.5l-15.8,0h0c-0.9,0-1.7-0.4-2.3-1L38.7,91
		c-3.9-3.9-9.7-5.3-14.9-3.6l-5.9,2c-1.9,0.6-2.5,3.1-1.1,4.5l25.4,25.6L36,133c-0.6,1.4-0.7,3-0.2,4.4H17.6c-1.1,0-1.9,0.9-1.9,1.9
		s0.9,1.9,1.9,1.9H137c1.1,0,1.9-0.9,1.9-1.9s-0.9-1.9-1.9-1.9h-10.3c0.5-1.4,0.5-2.9-0.2-4.4l-4-8.8h4.7c1.5,0,2.7-1.2,2.7-2.7
		c0-4.4-0.7-8.7-3.9-11.8c-2.5-2.5-5.8-3.9-9.4-3.9l-14.9,0.1c-1.1,0-1.9,0.9-1.9,1.9c0,1.1,0.9,1.9,1.9,1.9h0l14.9-0.1h0
		c2.5,0,4.8,1,6.6,2.7c2.1,2.1,2.9,5,2.7,7.9H50.9c-1.5,0-3-0.6-4.1-1.7L20.8,92.5l4.2-1.4c3.8-1.3,8.1-0.2,10.9,2.6l13.7,14
		c1.3,1.4,3.2,2.1,5.1,2.1h0l38-0.1c1.1,0,1.9-0.9,1.9-1.9c0-1.1-0.9-1.9-1.9-1.9h0l-18.1,0.1L63.7,65.4l7.7-2.1
		c1.9-0.5,3.2-2.1,3.3-4.1l0.3-4.5l2.5,3.7c1.1,1.6,3.1,2.3,4.9,1.8l19.2-5.1c1.9-0.5,3.2-2.1,3.3-4.1l0.7-10.1
		c0-0.5-0.1-0.8-0.3-1.1C94.3,20.1,71.2,10.1,49.3,15.5l-2-5.5c-0.4-1-1.5-1.5-2.5-1.2c-1,0.4-1.5,1.5-1.2,2.5l1.9,5.3
		c-6.4,2.2-12.3,5.5-17.4,10c-0.8,0.7-0.9,1.9-0.2,2.7c0.7,0.8,1.9,0.9,2.7,0.2c3.1-2.7,6.5-5,10.2-6.8c-0.6,4-1,8.1-1.1,12.1
		c-0.2,7,0.2,14,1.3,20.9l-26.1,7c0.4-9.7,3.8-19.1,9.8-26.8c0.7-0.8,0.5-2.1-0.3-2.7S22.4,32.7,21.7,33.5L21.7,33.5z M121.2,137.3
		c-0.8,0-1.5-0.4-1.8-1.1l-5.5-12h4.3l4.7,10.4c0.4,1,0,2.1-1,2.6C121.7,137.3,121.5,137.3,121.2,137.3L121.2,137.3z M79.4,124.2
		h30.3l6,13.2H83L79.4,124.2z M46.8,137.3l6-13.2h22.6l3.5,13.2H46.8z M45.1,122.3c1.1,0.8,2.3,1.3,3.5,1.6l-5.6,12.3
		c-0.3,0.7-1,1.1-1.8,1.1c-0.3,0-0.5-0.1-0.8-0.2c-1-0.4-1.4-1.6-1-2.6L45.1,122.3z M76.6,50.2l25-6.7l-0.5,7.4
		c0,0.3-0.2,0.5-0.5,0.6l-19.2,5.1c-0.3,0.1-0.6,0-0.7-0.3L76.6,50.2z M74.7,46.7c-2.4-6.4-5.4-12.4-9.2-18
		c-2.5-3.7-5.2-7.2-8.3-10.5c17.2-1.5,34.1,6.7,43.5,21.6L74.7,46.7L74.7,46.7z M46.4,58.3l25-6.7L70.8,59c0,0.3-0.2,0.5-0.5,0.6
		l-19.2,5.1c-0.3,0.1-0.6,0-0.7-0.3L46.4,58.3z M44.8,54.7c-1-6.5-1.4-13.2-1.2-19.7c0.2-4.7,0.7-9.4,1.4-14.1
		c2.4-0.9,4.9-1.6,7.4-2.1c3.6,3.7,6.9,7.7,9.7,12c3.5,5.3,6.4,10.9,8.7,16.9L44.8,54.7L44.8,54.7z M16.1,66.4l25-6.7l-0.5,7.4
		c0,0.3-0.2,0.5-0.5,0.6L21,72.8c-0.3,0.1-0.6,0-0.7-0.3L16.1,66.4z"/>
</g>
 </svg>
 
 
                 
                 <span>
                     
                     ROOFTOPS & POOLS
                     
                     </span></div> 


                     <Link to="/amenidades/la-amada/yoga"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>
                     <SimpleSlider slides={bigSlider}/>
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>ROOFTOPS & POOLS<br /><span className="sub">Ideal spot to get away</span></> : <>Lujo en albercas <br /><span className="sub">Conoce nuestras exclusivas áreas de albercas</span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                "We have two rooftops located in different buildings. Each one has a pool, Jacuzzi, chaise lounges, hammock area, lounge, and grills where you can make the most of the amazing views of the Caribbean Sea, the Marina and the ecologic reserve as well as astonishing sunsets. This is the ideal spot to get away, read a book, chill and relax on your own or with your family or friends."
                :
                
                "Contamos con dos rooftops situados en diferentes edificios, cada uno con alberca y jacuzzi, camastros, área de hamacas, salas y asadores; donde podrás disfrutar increíbles vistas al mar Caribe, la marina y la reserva ecológica, así como, espectaculares atardeceres. Sin duda un lugar ideal para desconectarte un momento, para leer un libro, escaparse a descansar u organizar reuniones familiares y disfrutar con amigos. "
                }


                </p>

                <Link to="/amenidades/la-amada"  ><button className="back"><span><span className="arrow-back"></span></span><br />{props.eng ? "LA AMADA Amenities" : "AMENIDADES LA AMADA"}</button></Link>
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