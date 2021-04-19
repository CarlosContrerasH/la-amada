import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'

  
let bigSlider =[ <HandleImages name="yogaH1"/>, <HandleImages name="yogaH2"/>, <HandleImages name="yogaH3"/>]
 



const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
            <div className="amenidades-top">
                    <Link to="/amenidades/la-amada/rooftop-albercas"  ><button className="back"><span><span className="arrow-back"></span></span><br />PREV</button></Link>
            <div className="icon-wrapper">
 
 
 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
      viewBox="0 0 150 150" 
enableBackground="new 0 0 150 150" >
<path fill="#FFFFFF" d="M133.2,102.1L133.2,102.1c-3.4-3.4-7.3-6.2-11.6-8.3c8-8.8,11.2-19.4,11.2-21.1c0-1.7-1.1-3.1-2.7-3.4
	c-5.7-1.5-11.7-2-17.6-1.4c0.2-1.1,0.4-2.2,0.6-3.3c0.9-6.8,0.4-13.6-1.3-20.2c-0.5-2-2.5-3-4.3-2.5c-6.7,1.8-12.9,4.9-18.3,9.1
	c-3.6-10-9.2-16.4-12.5-19.7c-0.7-0.7-1.6-1-2.5-1s-1.8,0.4-2.5,1c-3.3,3.3-8.9,9.7-12.5,19.7c-5.4-4.2-11.7-7.3-18.3-9.1
	c-1.9-0.5-3.8,0.6-4.3,2.5c-1.2,4.6-2.9,13-0.8,23.6c-5.9-0.6-11.9-0.2-17.6,1.4c-1.6,0.4-2.7,1.8-2.7,3.4c0,1.3,2.8,11.9,11.2,21.1
	c-4.3,2.1-8.2,4.9-11.6,8.3c-0.7,0.7-1,1.6-1,2.5c0,0.9,0.4,1.8,1,2.5c8.2,8.2,19.2,12.8,30.9,12.8c10.5,0,20.5-3.7,28.4-10.5
	c7.9,6.8,17.8,10.5,28.4,10.5c11.6,0,22.6-4.5,30.8-12.7c0.7-0.6,1.1-1.6,1.1-2.6C134.3,103.6,133.9,102.7,133.2,102.1L133.2,102.1z
	 M110.4,75.3c4.7-0.8,9.6-0.8,14.3,0c-3.3,9.2-9.7,16.8-18.3,21.7c-5.8,3.3-12.1,5.2-18.6,5.5c10.4-6.1,15.9-14.2,18.6-18.8
	C108.1,81.1,109.4,78.2,110.4,75.3L110.4,75.3z M23.2,75.3c4.7-0.8,9.6-0.8,14.3,0c1.1,2.9,2.4,5.8,3.9,8.5
	c2.7,4.6,8.2,12.7,18.6,18.8c-6.5-0.3-12.8-2.2-18.6-5.5C33,92.1,26.6,84.5,23.2,75.3L23.2,75.3z M45.6,112.8
	c-8.5,0-16.6-2.9-23.1-8.2c2.9-2.3,6-4.2,9.4-5.6c1.9,1.5,3.9,2.9,6,4.1c4.1,2.4,11.9,6.1,22.6,6.5
	C55.9,111.7,50.9,112.8,45.6,112.8L45.6,112.8z M47.6,80.2c-2.5-4.3-8-15.6-5.3-30.5c5.3,1.9,10.3,4.8,14.6,8.6
	c-0.7,3.6-1.1,7.2-1.1,10.8c0,5.6,0.9,15.9,7.2,26.9C54.5,90.8,49.9,84.1,47.6,80.2z M74,99.4c-10.2-12-11.2-25-11.2-30.3
	c0-5.2,0.9-18.3,11.2-30.3c10.2,12,11.2,25,11.2,30.3C85.2,74.4,84.2,87.4,74,99.4z M92.2,69.1c0-3.6-0.4-7.3-1.1-10.8
	c4.3-3.8,9.2-6.7,14.6-8.6c2.7,14.9-2.8,26.2-5.3,30.5c-2.2,3.9-6.9,10.6-15.4,15.8C91.3,85.1,92.2,74.8,92.2,69.1L92.2,69.1z
	 M102.4,112.8c-5.2,0-10.3-1.1-15-3.2c10.7-0.4,18.5-4.1,22.6-6.5c2.1-1.2,4.1-2.6,6-4.1c3.4,1.4,6.6,3.2,9.4,5.6
	C119,109.9,110.9,112.8,102.4,112.8z"/>
 </svg>
 
 
                 
                 <span>
                     
                    YOGA
                     
                     </span></div> 


                     <Link to="/amenidades/la-amada/canchas"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>
                     <SimpleSlider slides={bigSlider}/>
                <span className="wrapped-header playa">
                    <h1> {props.eng == true ? <>Namaste<br /><span className="sub"> Yoga & Multipurpose Exercise Room  </span></> : <>Namasté<br /><span className="sub">Salón de Yoga y usos múltiples.</span></>}</h1>
                </span>
                <p>

                {props.eng == true ?
                
                "Because we know how important it is to keep your mind, body, and soul balanced, we have created a comfortable and functional space to obtain harmony within ourselves, while working our body, releasing stress, and feeling the calm and peace that we all need."
                :
                
                "Basados en la importancia de mantener el equilibrio del cuerpo, mente y alma, creamos un espacio cómodo y funcional para obtener la armonía en todo nuestro ser, trabajando el cuerpo, liberando el estrés, obteniendo la calma y paz mental que todos necesitamos."
                }


                </p>

                <button className="back" onClick={()=>window.history.back()}><span><span className="arrow-back"></span></span><br />{props.eng ? "LA AMADA Amenities" : "AMENIDADES LA AMADA"}</button>
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