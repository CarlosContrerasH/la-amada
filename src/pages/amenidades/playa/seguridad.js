import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'

let bigSlider =[ <HandleImages name="caseta" />, <HandleImages name="amenidadesP6" /> ]


 


const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
            <div className="amenidades-top">
                    <Link to="/amenidades/playa/marina"  ><button className="back"><span><span className="arrow-back"></span></span><br />PREV</button></Link>
            <div className="icon-wrapper">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
	 viewBox="0 0 165.1 130.9" 
enableBackground="new 0 0 165.1 130.9" >
<g>
	<path fill="#4A7871" d="M137.4,36.7l-50-20.6c-1.7-0.7-3.6-0.9-4.8-0.9c-1.3,0-3.1,0.1-4.8,0.9l-50,20.6c-3.6,1.5-5.5,5.6-4.3,9.4
		l8.7,26.6v10.9c0,8.2,0,16.6,7.1,22.8c7.3,6.4,20.7,9.2,43.4,9.2c22.8,0,36.2-2.8,43.4-9.2c7.1-6.2,7.1-14.6,7.1-22.8V72.7
		l8.7-26.6C143,42.3,141.1,38.2,137.4,36.7z M126.1,80.1h-87v-4.4h87V80.1z M121.4,101.1c-5.7,5-18.4,7.5-38.8,7.5
		c-20.4,0-33.1-2.4-38.8-7.5c-3.9-3.5-4.6-8.2-4.7-14.1h87C126,92.9,125.3,97.7,121.4,101.1z M135.1,43.9L127,68.7H38.1L30,43.9
		c-0.1-0.3,0.1-0.7,0.3-0.8l50-20.6c0.4-0.2,1.2-0.3,2.2-0.3c1,0,1.8,0.2,2.2,0.3l50,20.6C135,43.3,135.2,43.7,135.1,43.9
		L135.1,43.9z"/>
	<path fill="#4A7871" d="M82.6,26.9C72.9,26.9,66,38.7,65.3,40c-0.5,0.9-0.6,1.9-0.3,2.8c0.1,0.2,1.7,5.1,4.4,10.1
		c4.1,7.6,8.4,11.3,13.1,11.3c4.7,0,9-3.7,13.1-11.3c2.7-5,4.3-9.9,4.4-10.1c0.3-0.9,0.2-2-0.3-2.8C99.1,38.7,92.2,26.9,82.6,26.9
		L82.6,26.9z M89.5,49.7c-3.1,5.6-5.7,7.6-7,7.6s-3.9-2-7-7.6c-1.6-2.9-2.8-5.8-3.4-7.5c2-3.1,6.4-8.3,10.4-8.3
		c4.1,0,8.4,5.2,10.4,8.3C92.3,43.8,91.1,46.8,89.5,49.7z"/>
</g>
</svg>

 
 
                 
                 <span>
                     
                 Gated Community 
                     
                     </span></div> 
                                              
                     <Link to="/amenidades/playa/helipuerto"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>
                <SimpleSlider slides={bigSlider}/>
                    
                   
                <span className="wrapped-header playa">
                    <h1> {props.eng == false ? <>
                    
                        Seguridad máxima
                    
                    <br /><span className="sub">
                        
               
Único residencial con doble control de acceso
                        
                        </span></> : <>
                        
                        Gated Community 

                    <br /><span className="sub">
                        
                    
                    Both of these gates are actively guarded 24 hours per day, every day. 
                        
                        </span></>}</h1>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
                This is the only community in the area that has double-access control 
and first-class security active 24 hours, giving you the peace of mind and safety that 
you deserve. La Amada is a double gated property. An outer security gate controls 
access to the entire community. A second residents’ security gate 
ensures that only homeowners and their guests are able to access the La 
Amada Residence buildings and their amenities.



                </>
                :
                
                <>
            Única comunidad que cuenta con doble control de acceso al desarrollo y 
un sistema de seguridad de primera clase las 24 horas, logrando que vivas con la 
tranquilidad y seguridad que mereces.       </>
                }


                </p>

                             <button className="back" onClick={()=>window.history.back()}><span><span className="arrow-back"></span></span><br />{props.eng ? "Playa Mujeres Amenities" : "AMENIDADES Playa Mujeres"}</button>
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