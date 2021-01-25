import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'


let playaSlider =[ <HandleImages name="ludotecaH3"/> ,<HandleImages name="ludotecaH1"/>, <HandleImages name="ludotecaH2"/>, ]



const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
            <div className="amenidades-top">
                    <Link to="/amenidades/la-amada/market"  ><button className="back"><span><span className="arrow-back"></span></span><br />PREV</button></Link>

            <div className="icon-wrapper">
 
 
 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
      viewBox="0 0 150 150" enable-background="new 0 0 150 150" >

<g>
	<g>
		<path fill="#FFFFFF" d="M92.5,44.2c-5.3-5.1-12.2-7.7-19.5-7.4c-14.1,0.6-25.5,12.5-25.6,26.5c0,6.2,2.2,12.3,6.2,17.1
			c5.8,6.9,8.9,15.7,8.9,24.6c0,0-0.6,4.1,2.3,4.1h18.4c3,0,2.3-4.1,2.3-4.1c0-8.8,3.2-17.4,9.3-25.1c3.8-4.8,5.8-10.5,5.8-16.6
			C100.6,56.1,97.7,49.3,92.5,44.2L92.5,44.2z M91.2,77.1c-6.6,8.3-10.2,17.8-10.3,27.4H67.1c-0.1-9.9-3.7-19.4-10-27.1
			c-3.3-4-5.1-9-5.1-14.1c0-11.6,9.5-21.4,21.1-21.9c6.1-0.2,11.8,1.9,16.1,6.1c4.4,4.2,6.8,9.8,6.8,15.8
			C96,68.4,94.3,73.2,91.2,77.1z"/>
		<path fill="#FFFFFF" d="M104.7,28.9c-0.9-0.9-2.4-0.9-3.3,0l-5.7,5.7c-0.9,0.9-0.9,2.4,0,3.3c0.9,0.9,2.4,0.9,3.3,0l5.7-5.7
			C105.6,31.3,105.6,29.9,104.7,28.9z"/>
		<path fill="#FFFFFF" d="M83.3,112.3H64.7c-1.3,0-2.3,1.1-2.3,2.3c0,1.3,1.1,2.3,2.3,2.3h18.6c1.3,0,2.3-1.1,2.3-2.3
			C85.6,113.4,84.6,112.3,83.3,112.3z"/>
		<path fill="#FFFFFF" d="M79.8,121.1H68.2c-1.3,0-2.3,1.1-2.3,2.3c0,1.3,1.1,2.3,2.3,2.3h11.6c1.3,0,2.3-1.1,2.3-2.3
			C82.1,122.2,81.1,121.1,79.8,121.1z"/>
		<path fill="#FFFFFF" d="M74,28.9c1.3,0,2.3-1.1,2.3-2.3v-8c0-1.3-1.1-2.3-2.3-2.3s-2.3,1.1-2.3,2.3v8C71.7,27.9,72.7,28.9,74,28.9
			z"/>
		<path fill="#FFFFFF" d="M52.3,37.9c0.9-0.9,0.9-2.4,0-3.3L46.6,29c-0.9-0.9-2.4-0.9-3.3,0c-0.9,0.9-0.9,2.4,0,3.3l5.7,5.7
			C49.9,38.8,51.4,38.8,52.3,37.9z"/>
		<path fill="#FFFFFF" d="M115,57.3h-8c-1.3,0-2.3,1.1-2.3,2.3c0,1.3,1.1,2.3,2.3,2.3h8c1.3,0,2.3-1.1,2.3-2.3
			C117.4,58.3,116.3,57.3,115,57.3z"/>
		<path fill="#FFFFFF" d="M41,57.3h-8c-1.3,0-2.3,1.1-2.3,2.3c0,1.3,1.1,2.3,2.3,2.3h8c1.3,0,2.3-1.1,2.3-2.3
			C43.3,58.3,42.3,57.3,41,57.3z"/>
	</g>
</g>
 </svg>
 
 
                 
                 <span>
                     
                Ludoteca y Kids Club 
                     
                     </span></div> 

                     <Link to="/amenidades/la-amada/gym"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>

                     <SimpleSlider slides={playaSlider}/>
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        Kids Club 
                    
                    <br /><span className="sub">
                        
                    & Play Center Let's have a nice time with friends & neighbors 
                        
                        </span></> : <>
                        
                        Kidsclub y salón de residentes 

                    <br /><span className="sub">
                        
                    Un lugar seguro y tranquilo para hacer reuniones 
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
                An elegant and quiet space set up so you can have a good time with your friends or neighbors, where you can play board games, watch a movie or football game while feeling right at home. In this room you can also host work meetings if required.<br/>Created exclusively for the little ones, we can guarantee fun and entertainment with activities that stimulate their physical and mental development.<br/>This space is strategically located next to the Residents’ Lounge, with hidden windows, so that while the kids play, their parents can observe them while enjoying their own peace and quiet. 

                </>
                :
                
                <>
                
                Espacio tranquilo y elegante, ambientado para convivir con tus amigos o vecinos, donde te desconectes con juegos, puedas ver una película o un buen partido sintiéndote en la comodidad de tu hogar. En este espacio también podrás tener reuniones de trabajo si así lo requieres.<br/>Creado exclusivamente para los más pequeños del hogar, garantizando la diversión y entretenimiento con actividades infantiles que estimulan su desarrollo físico y mental.<br/>Este espacio está ubicado estratégicamente junto al salón de residentes, con ventanas ocultas, para que mientras los pequeños juegan, los papas puedan verlos y disfrutar de un momento de paz y tranquilidad para ellos.<br/>La Amada cuenta con un salón totalmente equipado con barra, cocina y baños, que se puede integrar a una de las albercas para hacer eventos cerrados con capacidad para 50 personas.

                </>
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