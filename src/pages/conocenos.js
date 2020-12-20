import React from 'react'


import Layout from '../components/Layout'


import ScrollWrapper from "../components/scrollwrapper"
import { HandleImages } from "../components/handleImages"
import SimpleSlider from "../components/simpleSlider"


import { Link } from 'gatsby'




let playaSlider =[ <HandleImages name="ludotecaH1"/>, <HandleImages name="ludotecaH2"/>, <HandleImages name="ludotecaH3"/> ]



const ConocenosHero = ()=>{
return(
    <div className="conocenos-hero bg-sand">
        <div>

            <HandleImages name="amenidadesA1" />

            <div>
                <span className="">
                    <h1><span style={{ fontSize: "1.5em", fontWeight: "200", letterSpacing: ".1em" }}>NUESTRO</span><br /><span style={{ marginLeft: "1.5em" }} className="script">equipo</span></h1></span>
                    <p>Conoce a los encargados de darle vida y promoción a nuestro proyecto</p>
                    </div>
                   
        </div>
    </div>
)    
}


const Equipo = ()=>{
  return(   <ScrollWrapper classes="equipo">
      <span className="wrapped-header playa">
    <h2>
    
        Equipo<br/>La Amada
    
    <br /><span className="sub" style={{fontStyle:"italic",fontWeight:"200",letterSpacing:".1em"}}>
        
Un equipo contrsuido por los mejores
        
        </span></h2>
        
</span>

<p>Nuestro residencial se caracteriza por su privilegiada ubicaion..</p>
<div className="personas-wrapper">
    <div className="persona">
    <HandleImages name="ludotecaH2"/>
    <span>nombre</span><br/>
    <span>puesto</span>
    </div>
    <div className="persona">
    <HandleImages name="ludotecaH2"/>
    <span>nombre</span><br/>
    <span>puesto</span>
    </div>
    <div className="persona">
    <HandleImages name="ludotecaH2"/>
    <span>nombre</span><br/>
    <span>puesto</span>
    </div>
    <div className="persona">
    <HandleImages name="ludotecaH2"/>
    <span>nombre</span><br/>
    <span>puesto</span>
    </div>
</div>
</ScrollWrapper>)
}

const Slider = (props) => {


    return (


        <ScrollWrapper classes="bg-sand amenidad-detalle">

            <div>
            <div className="icon-wrapper">
 
 
 <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   x="0px" y="0px"
      viewBox="0 0 150 150" enable-background="new 0 0 150 150" >
 
 
 
<path fill="#FFFFFF" d="M109.9,33.2c-0.2-1.1-1.1-1.9-2.2-2c-10.8-1.3-20.8-1-29.6,0.9c-11.3,2.5-21,7.7-28.8,15.6
	c-12.2,12.2-12.2,32,0,44.2c1.2,1.2,2.4,2.2,3.7,3.2V117c0,1.4,1.2,2.6,2.6,2.6s2.6-1.2,2.6-2.6V98.1c4.1,1.9,8.5,2.9,13.1,2.9
	c8.4,0,16.2-3.2,22.1-9.1c9.2-9.2,7.3-21.9,6.7-29c-1-10.9-1.8-20.3,8.6-26.9C109.6,35.4,110.1,34.3,109.9,33.2z M52.9,51.4
	c9.2-9.2,21.2-14.4,35.7-15.5c-6.2,3-12.3,7.5-17.5,13C60.8,59.7,54.6,73.6,53.2,88.5C42.8,78.4,42.6,61.7,52.9,51.4L52.9,51.4z
	 M94.9,63.3c0.8,9.3,1.6,18.1-5.2,24.9c-4.9,4.9-11.4,7.6-18.4,7.6c-4.7,0-9.2-1.2-13.1-3.5c0.5-14.9,6.4-29,16.7-39.8
	c4.7-5,10.2-9.1,16-11.9c2.8-1.4,5.6-2.4,8.4-3.1c-2.1,2.6-3.4,5.6-4.2,9.1C93.9,51.9,94.4,57.7,94.9,63.3L94.9,63.3z"/>
 
 </svg>
                 
                 <span>
                     
                 GREEN AREAS
                     
                     </span></div> 

                <HandleImages name="amenidadesA1" />
                <span className="wrapped-header playa">
                    <h2> {props.eng == true ? <>
                    
                        Green areas
                    
                    <br /><span className="sub">
                        
                Disconnect in your own place
                        
                        </span></> : <>
                        
                        Áreas verdes   

                    <br /><span className="sub">
                        
                   Envueltos en la naturaleza y selva maya
                        
                        </span></>}</h2>
                </span>
                <p>

                {props.eng == true ?
                
                <>
                
            <strong>  MORE THAN A PLACE TO LIVE</strong>  <br/><br/>

Go deep into a natural world where the mundane becomes extraordinary, time stops and each moment is worth treasuring. 
<br/><br/>
In this space of natural connection, harmony with the environment will lead you to love life and truly live the La Amada experience.
             
                    </>
                :
                
                <>
             
             
             <strong>    MAS QUE UN LUGAR PARA VIVIR </strong>  Adéntrate en un mundo natural donde lo cotidiano se vuelve extraordinario, el tiempo se detiene y atesoras cada momento de tu día.  Un espacio de conexión natural donde la armonía con el entorno te lleva a amar la vida y vivir La Amada.
                </>
                }


                </p>

                <Link to="/amenidades/la-amada"  ><button className="back"><span><span className="arrow-back"></span></span><br />{props.eng ? "LA AMADA Amenities" : "AMENIDADES LA AMADA"}</button></Link>
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
             <ConocenosHero/>
             <Equipo/>

            </Layout>)
    }



}

export default Amenidades