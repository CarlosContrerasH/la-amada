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
                <HandleImages name="amenidadesA5" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        Motor Lobby
                    
                    <br /><span className="sub">
                        
                    LOBBY & Concierge
                        
                        </span></> : <>
                        
                        Motor Lobby

                    <br /><span className="sub">
                        
                    LOBBY & Concierge
                        
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