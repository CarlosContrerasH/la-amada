import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'

let playaSlider =[    <HandleImages name="amenidadesA6" class="centerLeft" />]


const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>

            <div className="amenidades-top">
                    <Link to="/amenidades/la-amada"  ><button className="back"><span><span className="arrow-back"></span></span><br />Volver a Amenidades</button></Link>
            <div className="icon-wrapper">
 
 
 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
      viewBox="0 0 150 150" 
enableBackground="new 0 0 150 150" >
 
<g>
	<path fill="#FFFFFF" d="M131.1,123.3l-7.3-21.9h-15.1v-7.5h14.9V77.4c0-13.6-3.9-23-11.8-28.8c-6-4.3-14-6.5-25.5-6.9v-7.5h-7.5
		v-7.5h14.9v-7.5H56.3v7.5h14.9v7.5h-7.5v7.5c-11.4,0.4-19.5,2.6-25.4,6.9c-8,5.8-11.9,15.2-11.9,28.8v16.6h14.9v7.5H26.2l-7.3,21.9
		h-7.4v7.5h127.1v-7.5L131.1,123.3L131.1,123.3z M33.9,77.4c0-11,2.9-18.5,8.8-22.8c5.2-3.8,13.1-5.5,24.8-5.5h3.7v-7.5h7.5v7.5h3.7
		c11.8,0,19.7,1.8,24.9,5.5c5.9,4.3,8.7,11.7,8.7,22.8v9.1H33.9V77.4z M48.8,93.9h52.3v7.5H48.8V93.9z M31.6,108.9h86.8l4.8,14.5
		H26.8L31.6,108.9z"/>
</g>
 
 </svg>
                 
                 <span>
                     
                 Concierge
                     
                     </span></div> 

                     <Link to="/amenidades/la-amada/areas-verdes"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>
                <SimpleSlider slides={playaSlider}/>
              
                <span className="wrapped-header playa">
                    <h1> {props.eng == true ? <>
                    
                        Motor Lobby, LOBBY & Concierge  
                    
                    <br /><span className="sub">
                        
                    Premium service for residents only
                        
                        </span></> : <>
                        
                        Motor Lobby, LOBBY & Concierge  
                    <br /><span className="sub">
                        
         Servicio premium para residentes
                        
                        </span></>}</h1>
                </span>
                <p>

                {props.eng == true ?
                
                <>
          Located in building E, this space was specifically designed to entertain guests including holiday rentals. The space allows a better control of vehicles and transport, giving them a specific space to arrive meeting the highest standards of La Amada.  
Our reception and main lounge are located at the centre of our facilities. These areas can be used as a main venue reception for your guests where they will be greeted with the highest customer service. La Amada is here to help you with any event, both within and outside of our facilities, so you, your family and your guests can fully enjoy the experience this amazing destination offers.                    </>
                :
                
                <>
             
             Situado en el edifico E, este espacio pensado para recibir a los 
invitados o huéspedes en caso de las rentas vacacionales, permite que se
 lleve un mejor control y que los vehículos de las transportadoras 
tengan un lugar específico donde llegar con la presencia y calidad de 
nuestro desarrollo. 
<br/><br/>
Pensando en que vivas con todas las comodidades resueltas, en el centro de todas 
las amenidades ponemos tu disposición un espacio que funge como 
recepción, donde podrás recibir a tus huéspedes con un servicio premium
para apoyarte en cualquier actividad, tanto dentro del desarrollo como 
fuera de él, para que tú y tu familia o invitados gocen de todas las 
experiencias que ofrece el destino. 
                </>
                }


                </p>
                <Link to="/amenidades/la-amada/gym"  >
                <button className="back"  ><span><span className="arrow-back"></span></span><br />{props.eng ?  "Back to Gym" : "Volver a Gym"}</button>
          </Link>  </div>
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