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


            <div className="icon-wrapper">
 
 
 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
      viewBox="0 0 150 150" enable-background="new 0 0 150 150" >
 
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



                <HandleImages name="amenidadesA6" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        Motor Lobby, LOBBY & Concierge  
                    
                    <br /><span className="sub">
                        
                    Premium service for residents only
                        
                        </span></> : <>
                        
                        Motor Lobby, LOBBY & Concierge  
                    <br /><span className="sub">
                        
         Servicio premium para residentes
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
             
                "Located in building E, this space was made to receive residents or guests, when considering vacation rentals. It allows for better control and offers a specific location for vehicle arrivals, in line with the appearance and quality of our complex.<br/>  

We have given great thought to meeting your every need, which is why we offer an area that functions as a reception, where you can receive your guests with an elite service that gives support regardless of the activity, whether inside or outside the complex. This way you, your family, and friends can enjoy all the experiences that the destination has to offer.<br/>  <br/><br/>

<strong>Property Management</strong> <br/><br/>

La Amada takes everyone into consideration, and if you do not live here permanently, we can help you keep your property in the best condition. We take care of all the expenses and fees making your life easier, so that when you come back, everything will be working perfectly in a safe and professional way.   <br/><br/><br/>

<strong>Vacation Rental Management</strong><br/><br/>

For those who see La Amada as an investment, we have an expert hospitality team that controls the quality of units and their equipment, in order to rent them in an orderly fashion while guaranteeing the best rates and proper usage of your property and amenities, offering your guests a quality hotel service. "
             
                    </>
                :
                
                <>
             
             
             Situado en el edifico E, este espacio pensado para recibir a los invitados o huéspedes en caso de las rentas vacacionales, permite que se lleve un mejor control y que los vehículos de las transportadoras tengan un lugar específico donde llegar con la presencia y calidad de nuestro desarrollo. <br/><br/>
<strong>Lobby y Concierge</strong>

Pensando en que vivas con todas las comodidades resueltas, en el centro de todas las amenidades ponemos tu disposición un espacio que funge como recepción, donde podrás recibir a tus huéspedes con un servicio élite para apoyarte en cualquier actividad, tanto dentro del desarrollo como fuera de él, para que tú y tu familia o invitados gocen de todas las experiencias que ofrece el destino. <br/><br/><br/>
<strong>Administración de propiedades</strong><br/><br/>

La Amada piensa en todos, por eso para los que buscan segunda casa te ayudamos a mantener tu propiedad en las mejores condiciones y realizamos el pago de todos los gastos y cuotas derivadas de la misma, haciéndote la vida más fácil y cuando uses la propiedad todo funcione al 100% de una forma segura y profesional. <br/><br/><br/>

<strong>Administración de renta vacacional</strong><br/><br/>

Para los que piensan en La Amada como una inversión, tenemos un equipo experto en hospitalidad quien controla la calidad y equipamiento de las unidades, para poderlas rentar ordenadamente, garantizando las mejores tarifas por noche y sobre todo el buen uso tanto de la propiedad como de sus amenidades, manteniendo el orden y dando a sus huéspedes un servicio hotelero de calidad. 

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