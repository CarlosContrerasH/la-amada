import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'


let playaSlider =[<HandleImages name="juegos"/>,<HandleImages name="amenidadesA7"/>, <HandleImages name="ludotecaH3"/> ,<HandleImages name="ludotecaH1"/>]

 {/*<HandleImages name="ludotecaH2"/>*/}

const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
            <div className="amenidades-top">
                    <Link to="/amenidades/la-amada/market"  ><button className="back"><span><span className="arrow-back"></span></span><br />Volver a Amenidades</button></Link>

            <div className="icon-wrapper">
 
 
            <svg version="1.1" id="Layer_1"   x="0px" y="0px"
	 viewBox="0 0 150 150"  >
 
<g>
	<path class="st0" d="M58.7,86.9c6.7,0,12.1-5.4,12.1-12.1c0-6.7-5.4-12.1-12.1-12.1S46.5,68,46.5,74.7C46.5,81.4,52,86.9,58.7,86.9
		z M58.7,66.5c4.5,0,8.2,3.7,8.2,8.2s-3.7,8.2-8.2,8.2c-4.5,0-8.2-3.7-8.2-8.2S54.1,66.5,58.7,66.5z"/>
	<path class="st0" d="M137.5,112.9h-6c-3,0-5.8-1.8-7.1-4.5l-13-27.6c-1.9-4.1-6.1-6.7-10.6-6.7H86.7V51c0,0,0,0,0-0.1
		c0,0,0,0,0-0.1c0-0.1,0-0.2,0-0.2c0,0,0,0,0,0c0-0.1,0-0.2-0.1-0.3c0,0,0,0,0,0c0-0.1-0.1-0.2-0.1-0.2c0,0,0,0,0,0
		c0-0.1-0.1-0.1-0.1-0.2c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.2v0L80.5,44l0,0l-13-12.9l0,0L61,24.6c-1.3-1.3-3.4-1.3-4.7,0l-25.1,25
		l0,0c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0,0,0C31,49.9,31,50,30.9,50.1c0,0,0,0,0,0c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0,0,0
		c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0,0,0c0,0.1,0,0.2,0,0.2c0,0,0,0,0,0.1c0,0,0,0,0,0.1v23.1H15.3c-4.6,0-8.3,3.7-8.3,8.3v45.9
		c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2v-5.4h19.8v3.8c0,1.8,1.5,3.3,3.3,3.3h10.8c1.8,0,3.3-1.5,3.3-3.3v-26.4h21.3v3.7v2.6v12.1v3.4
		v4.5c0,1.8,1.5,3.3,3.3,3.3h10.8c1.8,0,3.3-1.5,3.3-3.3V98.4v-6.3h1.7c3.1,0,5.9,1.8,7.1,4.6l12.2,26.7c1.9,4.2,6.1,6.9,10.7,6.9
		h19.1c1.8,0,3.3-1.5,3.3-3.3v-10.9C140.8,114.3,139.3,112.9,137.5,112.9z M30.7,119H10.9v-7.3h19.8V119z M30.7,107.7H10.9v-7.3
		h19.8V107.7z M30.7,96.5H10.9v-7.3h19.8V96.5z M30.7,85.2H10.9v-2.8c0-2.4,2-4.4,4.4-4.4h15.4V85.2z M58.7,27.8l6.8,6.8v0l9.5,9.5
		c0,0,0,0,0,0l5,5H37.4L58.7,27.8z M44.1,126.1h-9.5v-25.7h9.5V126.1z M82.7,126.1h-9.5v-3.9v-3.4v-12.1v-2.6v-3.7h9.5V126.1z
		 M82.7,76v14.2v6.3H71.3H46H34.6V52.9h48.1V76z M136.9,126.3L136.9,126.3h-18.5c-3.1,0-5.9-1.8-7.1-4.6L99.1,95.1
		c-1.9-4.2-6.1-6.9-10.7-6.9h-1.7V78h14.1c3,0,5.8,1.8,7.1,4.5l13,27.6c1.9,4.1,6.1,6.7,10.6,6.7h5.3V126.3z"/>
</g>
</svg>
 
 
                 
                 <span>
                     
                Ludoteca y Kids Club 
                     
                     </span></div> 

                     <Link to="/amenidades/la-amada/gym"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>

                     <SimpleSlider slides={playaSlider}/>
                <span className="wrapped-header playa">
                    <h1> {props.eng == true ? <>
                    
                        Kids Club 
                    
                    <br /><span className="sub">
                        
                    An exclusive space for the little ones.
                        
                        </span></> : <>
                        
                        Kidsclub y salón de residentes 

                    <br /><span className="sub">
                        
                    Un espacio exclusivo para los más pequeños. 
                        
                        </span></>}</h1>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
                Kidsclub is our play centre/ playroom exclusively created for the little ones! Children are guaranteed cheerful joy and entertainment with the carefully planned activities that aim to help in their intellectual and psychomotor development. This space is strategically located next to the residential lounge, with insulated windows that allow the parents to watch over their kids while they play, whilst offering moments of peace and tranquility. We also have an open air playground that your kids will love.
                </>
                :
                
                <>
              Nuestra Ludoteca - Kidsclub dentro de nuestro edificio E fué creado exclusivamente para los más pequeños del hogar, garantizando la diversión y entretenimiento con actividades infantiles que estimulan su desarrollo físico y mental.Este espacio está ubicado estratégicamente junto al salón de residentes, con ventanas ocultas, para que mientras los pequeños juegan, los padres y tutores puedan verlos y disfrutar de un momento de paz y tranquilidad para ellos.Además contamos con un área de juegos infantiles en el exterior. Tus hijos amarán nuestras áreas diseñadas para ellos. 

                </>
                }


                </p>

                <button className="back" onClick={()=>window.history.back()}><span><span className="arrow-back"></span></span><br />{props.eng ?  "Back to Market Deli" : "Volver a  Market Deli"}</button>
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