import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'
  
let bigSlider =[<HandleImages name="amenidadesA4" class="rightCenter"/>, <HandleImages name="canchaH1"/>, <HandleImages name="canchaH2"/>, <HandleImages name="canchaH3"/>]
 



const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>

            <div className="amenidades-top">
                    <Link to="/amenidades/la-amada/yoga"  ><button className="back"><span><span className="arrow-back"></span></span><br />Volver a Amenidades</button></Link>

            <div className="icon-wrapper">
 
 
 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
      viewBox="0 0 150 150" 
enableBackground="new 0 0 150 150" >


<g>
	<g>
		<path fill="#FFFFFF" d="M70.7,36.8c-22.8,0-41.2,18.4-41.2,41.2s18.4,41.2,41.2,41.2s41.2-18.4,41.2-41.2S93.4,36.8,70.7,36.8z
			 M44.9,52.9C53,58.7,57.8,68,57.8,78c0,10-4.8,19.3-12.9,25.1C31.3,89.1,31.3,66.9,44.9,52.9z M70.7,114c-7.9,0-15.6-2.6-21.9-7.4
			C57.8,99.8,63,89.2,63,78c0-11.2-5.2-21.8-14.2-28.6c12.9-10,30.9-10,43.8,0C76.8,61.5,73.8,84.2,85.9,100
			c1.9,2.5,4.2,4.8,6.7,6.7C86.3,111.5,78.6,114.1,70.7,114z M96.4,103.1L96.4,103.1C82.6,93.2,79.3,74,89.2,60.2
			c2-2.8,4.4-5.3,7.3-7.3C110.1,66.9,110.1,89.2,96.4,103.1z"/>
	</g>
</g>
 </svg>
 
 
                 
                 <span>
                     
                 {props.eng == true ?  'Multipurpose Courts':'Canchas'}
                     
                     </span></div> 
                     <Link to="/amenidades/la-amada/market"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>

                     <SimpleSlider slides={bigSlider}/>
                <span className="wrapped-header playa">
                    <h1> {props.eng == true ? <>
                    
                    Multipurpose courts
                    
                    <br /><span className="sub">
                        
                    Paddel, Tennis, BasketBall
                        
                        </span></> : <>
                        
                        CANCHAS 

                    <br /><span className="sub">
                        
                    Paddel, Tennis, BasketBall y más
                        
                        </span></>}</h1>
                </span>
                <p>

                {props.eng == true ?
                
                "You and your children can train or just play in any of our tennis, padel and multi-purpose courts which offer fun when playing football, soccer, basketball, volleyball, or any other activity that can be enjoyed with friends. La Amada also offers extensive green areas and playground so that the little ones can have fun in an outdoor and healthy environment."
                :
                
                "Para que tú y tus hijos entrenen o simplemente jueguen en cualquiera de nuestras canchas de tenis, pádel y la multicancha, que ofrece diversión jugando futbol, basquetbol, voleibol o cualquier otra actividad para pasar con amigos. También La Amada cuenta con amplias áreas verdes y juegos infantiles para que los niños más pequeños se distraigan en un ambiente sano al aire libre."
                }


                </p>

                <button className="back" onClick={()=>window.history.back()}><span><span className="arrow-back"></span></span><br />{props.eng ?  "Back to Yoga and Multipurpose Excercise Room" : "Volver a Salón de Yoga y Usos Múltiples"}</button>
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