import React from 'react'


import Layout from '../../../components/Layout'


import ScrollWrapper from "../../../components/scrollwrapper"
import { HandleImages } from "../../../components/handleImages"
import SimpleSlider from "../../../components/simpleSlider"


import { Link } from 'gatsby'


 

let bigSlider =[  <HandleImages name="amenidadesP5" />,  <HandleImages name="marinaH1"/> ]


const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div> <div className="amenidades-top">
                    <Link to="/amenidades/playa"  ><button className="back"><span><span className="arrow-back"></span></span><br />Volver a Amenidades</button></Link>
            <div className="icon-wrapper">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 165.1 130.9" 
enableBackground="new 0 0 165.1 130.9" >
<g>
	<g>
		<g>
			<path fill="#4A7871" d="M156.1,86c-6.9-0.2-13.6,1.7-19.4,5.3c-1.1,0.6-2.2,1.2-3.3,1.8l24.1-29c1.3-1.5,1.6-3.6,0.7-5.4
				s-2.6-2.9-4.6-2.9h-21.8l-26.5-19.3L104,34c-2.5-5.1-7.8-8.4-13.5-8.3H64.6l-2.5-5h13.5c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5
				H48c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5h8.5l2.5,5H48c-4.2,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h3.5l-7.5,15.1h-2.2
				c-1.6,0-3.1,0.7-4,2l-6,8h-4.3c-0.9,0-1.7,0.4-2.1,1.2L13,86.1C12.1,86,11.3,86,10.3,86c-1.4,0-2.5,1.1-2.5,2.5S8.9,91,10.3,91
				c6-0.1,11.9,1.5,17,4.7c5.8,3.6,12.6,5.5,19.4,5.3c5.4,0.2,10.7-1,15.6-3.3l0,0c1.3-0.6,2.6-1.3,3.8-2c5.1-3.2,11-4.9,17-4.7
				c6-0.1,11.9,1.5,17,4.7c5.8,3.6,12.6,5.5,19.4,5.3c6.9,0.2,13.6-1.7,19.4-5.3c5.1-3.2,11-4.9,17-4.7c1.4,0,2.5-1.1,2.5-2.5
				S157.4,86,156.1,86z M102.5,40.7l6.9,5H80.7c-1.4,0-2.5-1.1-2.5-2.5v-2.5L102.5,40.7L102.5,40.7z M48,35.7
				c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5h42.5c3.6,0,6.9,1.9,8.7,5L48,35.7L48,35.7z M57.1,40.7h16v2.5
				c0,4.2,3.4,7.5,7.5,7.5h35.6l6.9,5H49.6L57.1,40.7z M41.7,60.8h51.5v2.5c0,1.4-1.1,2.5-2.5,2.5H38L41.7,60.8z M119.6,96
				c-6,0.1-11.9-1.5-17-4.7C96.8,87.7,90,85.8,83.2,86c-6.9-0.2-13.6,1.7-19.4,5.3c-5.1,3.2-11,4.9-17,4.7c-6,0.1-11.9-1.5-17-4.7
				c-3.5-2.1-7.3-3.6-11.2-4.5l10.2-15.9h62c4.2,0,7.5-3.4,7.5-7.5v-2.5h7.5v7.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5v-7.5
				h5v7.5c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5v-7.5h5v7.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5v-7.5h22.6l-29,34.8
				C122.9,95.9,121.3,96,119.6,96z"/>
			<path fill="#4A7871" d="M156.1,101c-6.9-0.2-13.6,1.7-19.4,5.3c-5.1,3.2-11,4.9-17,4.7c-6,0.1-11.9-1.5-17-4.7
				c-5.8-3.6-12.6-5.5-19.4-5.3c-6.9-0.2-13.6,1.7-19.4,5.3c-5.1,3.2-11,4.9-17,4.7c-6,0.1-11.9-1.5-17-4.7
				c-5.8-3.6-12.6-5.5-19.4-5.3c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c6-0.1,11.9,1.5,17,4.7c5.8,3.6,12.6,5.5,19.4,5.3
				c6.9,0.2,13.6-1.7,19.4-5.3c5.1-3.2,11-4.9,17-4.7c6-0.1,11.9,1.5,17,4.7c5.8,3.6,12.6,5.5,19.4,5.3c6.9,0.2,13.6-1.7,19.4-5.3
				c5.1-3.2,11-4.9,17-4.7c1.4,0,2.5-1.1,2.5-2.5C158.6,102.2,157.4,101,156.1,101z"/>
		</g>
	</g>
</g>
</svg>
 
 
                 
                 <span>
                     
               Marina  
                     
                     </span></div> 

                                     
                     <Link to="/amenidades/playa/seguridad"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>

                <SimpleSlider slides={bigSlider}/>
                    
                <span className="wrapped-header playa">
                    <h1> {props.eng == true ? <>
                    
                        V&V Marina  
                    
                    <br /><span className="sub">
                        
            The most luxurious and equipped marina at Cancun
                        
                        </span></> : <>
                        
                        V&V Marina  

                    <br /><span className="sub">
                        
                 La marina más lujosa y grande de Cancún
                        
                        </span></>}</h1>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
                "The V&V Marina has direct access to the Caribbean Sea, and is the largest yet in Cancún, offering 176 slips to receive luxurious super-yachts of up to 200 feet.
It is one of a kind in the area and has customs, immigration, and fuel services, as well as dry dock."




                </>
                :
                
                <>
               Con acceso directo al Mar Caribe se encuentra la marina V&V. La marina más grande de Cancún que ofrece 176 posiciones para recibir mega yates hasta de 200 pies; única en la zona, cuenta con servicio de aduana, migración, combustible y marina seca.
                </>
                }


                </p>
                <p><a href="https://www.marinavv.com/" target="_blank"> {props.eng == true ?"See More":"Conoce Más"}</a></p>
                <Link to="/amenidades/playa/golf"  >
                             <button className="back"  ><span><span className="arrow-back"></span></span><br />{props.eng ?  "Back to Golf Course" : "Volver a Campo de Golf"}</button>
           </Link> </div>
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