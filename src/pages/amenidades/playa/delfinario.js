import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'


 


const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div><div className="amenidades-top">
                    <Link to="/amenidades/playa/helipuerto"  ><button className="back"><span><span className="arrow-back"></span></span><br />PREV</button></Link>
            <div className="icon-wrapper">



            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 165.1 130.9" enable-background="new 0 0 165.1 130.9" >
<path fill="#FFFFFF" d="M133.8,39.8l-3.3-1.6c-1.2-3.2-4.8-10-13.9-13c-6.2-2.1-22.3-7.4-38.9-2.1c-7.7-6.1-13.5-6.5-25-5
	c-2.6,0.3-3.7,1.7-4.1,2.8c-1.8,5,6.8,7.2,8,15.8c-5.4,4.4-11.8,11.1-15.3,18c-8.2,16.5-5.9,30.8-4.4,36.5
	c-5.3,4.1-8.6,10.2-9.8,18.3c-0.4,2.8,2.5,4.8,5,3.6l15.8-7.9l12.3,6.2c2.1,1.1,4.7-0.3,5-2.6c1.2-8.6-0.6-15.6-9-19.3
	c-1.8-0.8-3.8,0-4.6,1.8c-0.8,1.8,0,3.8,1.8,4.6c3.2,1.4,4.8,3.5,5.1,7l-9.1-4.6c-1-0.5-2.1-0.5-3.1,0l-10.4,5.2
	c1.5-3.4,3.8-6,6.8-7.8c1.5-0.9,2.1-2.6,1.5-4.2c0,0-1.5-3.9-1.8-10c-0.4-8.1,1.3-16,5.1-23.6c3.3-6.5,10-13.1,14.8-16.8
	c0.9-0.7,1.4-1.7,1.4-2.8c-0.1-6.2-3-10.7-5.5-13.7c9.1-0.7,11.6,1,16.7,5.2c1,0.8,2.3,1,3.4,0.6c15-5.6,29.9-0.6,36.2,1.5
	c7.8,2.6,9.7,9.2,9.9,9.7c0.2,1,0.9,1.8,1.8,2.3l4.6,2.3c0.8,0.4,0.5,1.6-0.4,1.6c-4.6,0-17.2-0.5-34.8,4.6c-1.8-2-5.1-1.2-5.9,1.4
	c-1.8,6.2-5.1,10.2-10.2,12c2.2-4.7,3.1-9.8,3.1-12.8c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,0.1,0,0.2,0,0.3
	c-9.4,1.3-20.9,8.3-27.1,16.7c-1.7,2.3,0,5.5,2.8,5.5c1.1,0,2.1-0.5,2.8-1.4C59,67.2,67.4,62.2,74,60.4c-0.9,2.6-2.3,5.2-4.3,7.2
	c-2.2,2.2-0.6,5.9,2.5,5.9c10.6,0,18.5-4.7,22.7-14c15.8-5,29.2-5.1,29.4-5.1h6.1c2.1,0,4-0.8,5.5-2.3
	C139.5,48.5,138.5,42.2,133.8,39.8L133.8,39.8z"/>
</svg>


 
 
                 
                 <span>
                     
                 Delphinus Playa Mujeres   
                     
                     </span></div> 		                          
                     <Link to="/amenidades/playa/vecinos"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>
                     <HandleImages name="delfinesH1"/>
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        Delphinus Playa Mujeres 
                    
                    <br /><span className="sub">
                        
               
                     El lugar de los grandes empresarios
                        
                        </span></> : <>
                        
                        Delphinus 

                    <br /><span className="sub">
                        
                    
                    Playa Mujeres  Los seres más extraorinarios a unos pasos de casa
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                

                Located within the luxurious <a href="https://www.delphinusworld.com.mx/donde-nadar-con-delfines-en-cancun/delphinus-playa-mujeres" target="blank">Dreams Playa Mujeres Golf & Spa Resort.</a>  Surrounded by white beaches, the clear waters of the Caribbean Sea and the best facilities, this habitat offers the wonderful experience of  interacting with dolphins in a 100% natural habitat.  



                </>
                :
                
                <>
                Nuestro hábitat se encuentra en un área aun virgen y en pleno desarrollo, que forma parte del espacio continental del municipio de Isla Mujeres y se localiza dentro del lujoso hotel <a href="https://www.delphinusworld.com.mx/donde-nadar-con-delfines-en-cancun/delphinus-playa-mujeres" target="blank">Dreams Playa Mujeres Golf & Spa Resort.</a></>
                }


                </p>

                <Link to="/amenidades/playa"  ><button className="back"><span><span className="arrow-back"></span></span><br />{props.eng ? "LA AMADA Amenities" : "AMENIDADES LA AMADA"}</button></Link>
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