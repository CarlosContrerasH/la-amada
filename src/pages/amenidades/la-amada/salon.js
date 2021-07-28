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
                    <Link to="/amenidades/la-amada"  ><button className="back"><span><span className="arrow-back"></span></span><br />Volver a Amenidades</button></Link>

            <div className="icon-wrapper">
 
 
   
<svg version="1.1" id="Layer_1"  x="0px" y="0px"
	 viewBox="0 0 150 150" >
 
<g>
	<path class="st0" d="M50,43.6c-2-2-5.3-1.2-6.3,1.4l-32.5,86.7c-1.2,3.1,1.9,6.1,4.9,4.9c4.4-1.6,83.2-31.2,86.7-32.5
		c2.6-1,3.3-4.3,1.4-6.3L50,43.6z M48.7,53.3L64.5,69c1.1,13.1,5.9,25.7,13.8,36.1l-16.4,6.1C49.7,98.5,43.4,80.7,45.1,63L48.7,53.3
		z M38.4,120.1c-3.8-4.3-6.9-9.1-9.4-14.3l9.2-24.7c2.3,12.6,8,23.9,15.9,33L38.4,120.1z M25.5,115.3c1.6,2.6,3.4,5.2,5.3,7.6
		l-9.5,3.6L25.5,115.3z M85.9,102.3c-5.7-7-9.9-15.2-12.1-24L94.5,99L85.9,102.3z"/>
	<g>
		<path class="st0" d="M99.9,77.7c1.5,1.5,3.9,1.5,5.4,0c14.4-14.4,28.4-10,28.6-9.9c2,0.7,4.2-0.4,4.8-2.4c0.7-2-0.4-4.2-2.4-4.8
			c-0.8-0.3-18.7-6-36.4,11.8C98.4,73.7,98.4,76.2,99.9,77.7z"/>
	</g>
	<path class="st0" d="M70.1,47.9c1.5,1.5,3.9,1.5,5.4,0c17.7-17.7,12-35.7,11.8-36.4c-0.7-2-2.8-3.1-4.8-2.4c-2,0.7-3.1,2.8-2.4,4.8
		c0,0.1,4.5,14.2-9.9,28.6C68.6,43.9,68.6,46.4,70.1,47.9L70.1,47.9z"/>
	<path class="st0" d="M83.6,56c-1.5,1.5-1.5,3.9,0,5.4c1.5,1.5,3.9,1.5,5.4,0c2-1,8.1,2.7,11.5-0.7c3.4-3.4-0.2-9.4,0.7-11.5
		c2.1-0.9,8.1,2.7,11.5-0.7c3.4-3.4-0.2-9.4,0.7-11.5c2.1-0.9,8.1,2.7,11.5-0.7c3.4-3.4-0.2-9.4,0.7-11.5c2.1-0.9,8.1,2.7,11.5-0.7
		c3.4-3.4-0.3-9.6,0.7-11.5c1.5-1.5,1.5-3.9,0-5.4c-1.5-1.5-3.9-1.5-5.4,0c-3,3-2.4,7.3-1.9,10.3c-3-0.6-7.3-1.2-10.3,1.9
		c-3,3-2.4,7.3-1.9,10.3c-3-0.6-7.3-1.2-10.3,1.9c-3,3-2.4,7.3-1.9,10.3c-3-0.6-7.3-1.2-10.3,1.9c-3,3-2.4,7.3-1.9,10.3
		C90.9,53.6,86.7,53,83.6,56L83.6,56z"/>
	<path class="st0" d="M105.3,23.5c1.5-1.5,1.5-3.9,0-5.4c-1.5-1.5-3.9-1.5-5.4,0c-1.5,1.5-1.5,3.9,0,5.4
		C101.4,25,103.8,25,105.3,23.5z"/>
	<circle class="st0" cx="129.7" cy="47.9" r="3.8"/>
	<path class="st0" d="M121.6,83.1c-1.5,1.5-1.5,3.9,0,5.4c1.5,1.5,3.9,1.5,5.4,0c1.5-1.5,1.5-3.9,0-5.4
		C125.5,81.6,123.1,81.6,121.6,83.1z"/>
	<path class="st0" d="M67.4,28.9c1.5-1.5,1.5-3.9,0-5.4c-1.5-1.5-3.9-1.5-5.4,0c-1.5,1.5-1.5,3.9,0,5.4
		C63.5,30.4,65.9,30.4,67.4,28.9z"/>
</g>
</svg>

 
 
                 
                 <span>
                     
                 Residential lounge
                     
                     </span></div> 

                     <Link to="/amenidades/la-amada/gym"  ><button className="back"><span><span className="arrow"></span></span><br />Next</button></Link>
                </div>

                <HandleImages name="ludotecaH2"/>
                <span className="wrapped-header playa">
                    <h1> {props.eng == true ? <>
                    
                        Residential lounge
                    
                    <br /><span className="sub">
                        
                    A safe and quiet place for your work meetings
                        
                        </span></> : <>
                        
                        Salón de Residentes

                    <br /><span className="sub">
                        
                    Un lugar seguro y tranquilo para hacer reuniones
                        
                        </span></>}</h1>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
                La Amada offers you a special lounge area that hosts up to 50 people. It can be closed off and is fitted with a bar, kitchen and restrooms and offers exclusive access to one of our swimming pools. Its elegant and peaceful ambiance make it the perfect place to unwind and relax for while. Here you can play videogames, watch movies or the latest sports games. If you would so like, this special lounge area can also be fitted to host work meetings. 
                </>
                :
                
                <>
       La Amada cuenta con un salón totalmente equipado con barra, cocina y baños, que se puede integrar a una de las albercas para hacer eventos cerrados con capacidad para 50 personas. Este tranquilo y elegante espacio está ambientado para convivir con tus amigos o vecinos, donde te desconectes con juegos, puedas ver una película o un buen partido sintiéndote en la comodidad de tu hogar. En este espacio también podrás tener reuniones de trabajo si así lo requieres.

                </>
                }


                </p>
                <Link to="/amenidades/la-amada/ludoteca"  >
                <button className="back"  ><span><span className="arrow-back"></span></span><br />{props.eng ?  "Back to Ludoteca y Kids Club" : "Volver a Ludoteca y Kids Club"}</button>
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