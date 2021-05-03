import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'


let bigSlider =[ <HandleImages name="amenidadesP7" />,     <HandleImages name="spaH1"/> ]



const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div><div className="amenidades-top">
                    <Link to="/amenidades/playa/vecinos"  ><button className="back"><span><span className="arrow-back"></span></span><br />Volver a Amenidades</button></Link>
            <div className="icon-wrapper">



            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
	 viewBox="0 0 165.1 130.9" 
enableBackground="new 0 0 165.1 130.9"  >
<g>
	<path fill="#4A7871" d="M102.4,99.2c10.3,0,18.6,8.4,18.6,18.6c0,1.3,1,2.3,2.3,2.3s2.3-1,2.3-2.3c0-10.3,8.4-18.6,18.6-18.6
		c1.3,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3c-10.3,0-18.6-8.4-18.6-18.6c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3c0,10.3-8.4,18.6-18.6,18.6
		c-1.3,0-2.3,1-2.3,2.3S101.1,99.2,102.4,99.2z M123.4,86.1c2.3,4.7,6.1,8.5,10.8,10.8c-4.7,2.3-8.5,6.1-10.8,10.8
		c-2.3-4.7-6.1-8.5-10.8-10.8C117.2,94.6,121.1,90.8,123.4,86.1z"/>
	<path fill="#4A7871" d="M29.7,29.3c6.4,0,11.6,5.2,11.6,11.6c0,1.3,1,2.3,2.3,2.3c1.3,0,2.3-1,2.3-2.3c0-6.4,5.2-11.6,11.6-11.6
		c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3C51.3,24.7,46,19.5,46,13c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3
		c0,6.4-5.2,11.6-11.6,11.6c-1.3,0-2.3,1-2.3,2.3C27.4,28.3,28.5,29.3,29.7,29.3z M43.7,21.4c1.4,2.3,3.3,4.2,5.6,5.6
		c-2.3,1.4-4.2,3.3-5.6,5.6c-1.4-2.3-3.3-4.2-5.6-5.6C40.4,25.6,42.3,23.7,43.7,21.4z"/>
	<circle fill="#4A7871" cx="92.4" cy="74.3" r="2.3"/>
	<path fill="#4A7871" d="M98.6,69c0.7,1.1,2.1,1.5,3.2,0.8c6.1-3.6,13.1-5.5,20.2-5.5c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3
		c-21.8,0-39.6-17.8-39.6-39.6c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3c0,21.8-17.8,39.6-39.6,39.6c-1.3,0-2.3,1-2.3,2.3
		c0,1.3,1,2.3,2.3,2.3c21.8,0,39.6,17.8,39.6,39.6c0,1.3,1,2.3,2.3,2.3s2.3-1,2.3-2.3c0-7.1,1.9-14.1,5.5-20.2
		c0.7-1.1,0.3-2.5-0.8-3.2c-1.1-0.7-2.5-0.3-3.2,0.8C82.3,84,81,86.8,80,89.7c-4.4-13-14.7-23.3-27.7-27.7
		c13-4.4,23.3-14.7,27.7-27.7c4.4,13,14.7,23.3,27.7,27.7c-2.9,1-5.7,2.3-8.4,3.8C98.3,66.4,97.9,67.9,98.6,69L98.6,69z"/>
</g>
</svg>


 
 
                 
                 <span>
                     
                 Hotel Beloved Spa  
                     
                     </span></div> 
                     <Link to="/amenidades/playa/ciclopista"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>
                <SimpleSlider slides={bigSlider}/>
                <span className="wrapped-header playa">
                    <h1> {props.eng == true ? <>
                    
                        Hotel Beloved Spa 
                    
                    <br /><span className="sub">
                        
                    Relax and reactivate your senses 
                        
                        </span></> : <>
                        
                        Hotel Beloved Spa 
 
                    <br /><span className="sub">
                        
                    
                
Relaja y reactiva todos los sentidos
                        
                        </span></>}</h1>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                

 

Without a doubt this is a space of absolute wellness and unforgettable experiences, where you can relax and reactivate all your senses with an amazing variety of treatments. Operated by the Beloved Hotel and providing services for La Amada owners, this SPA, which is more than 30,000 sqf in size, has every single service for you to feel relaxed and pampered. From massage cabins with every imaginable massage style, to please even the most demanding customers, to hydrotherapy circuits that will bring you a day full of unique experiences. 
Screen reader support enabled.
 
 
 


                </>
                :
                
                <>
    Sin lugar a duda un espacio de bienestar absoluto, donde relajarse y reactivar todos los sentidos con la variedad de tratamientos que se ofrecen, son algunas de las inolvidables experiencias que forman parte de este magnífico lugar. Operado por el Hotel Beloved y con servicio a los propietarios de La Amada, el SPA de más de 3,000 m2, cuenta con todos los servicios para consentirte y relajarte, desde cabinas de masaje con todos los estilos para los más exigentes, hasta circuitos de hidroterapia que te harán pasar un día lleno de experiencias únicas.  </>
                }


                </p>
                <p><a href="https://www.belovedhotels.com/cancun/beloved-playa-mujeres/offers/category/spa/" target="_blank"> {props.eng == true ?"See More":"Conoce Más"}</a></p>

                             <button className="back" onClick={()=>window.history.back()}><span><span className="arrow-back"></span></span><br />{props.eng ?  "Back to Luxury Hotels as Neighbors" : "Volver a Nuestros Vecinos"}</button>
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