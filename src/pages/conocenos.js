import React from 'react'


import Layout from '../components/Layout'


import ScrollWrapper from "../components/scrollwrapper"
import { HandleImages } from "../components/handleImages"
import SimpleSlider from "../components/simpleSlider"
import promecap from "../img/conocenos/PROMECAP-LOGO.svg"
import hamak from "../img/conocenos/HAMAK-LOGO.svg"
import sonneil from "../img/conocenos/logo-soneil.png"

import { Link } from 'gatsby'




let slider =[ <HandleImages name="equipo"/>, <HandleImages name="conocenos1"/>]



const ConocenosHero = (props)=>{
return(
    <div className="conocenos-hero bg-sand">
        <div>
        <SimpleSlider slides={slider}/>
           

            <div>
                <span className="">
                {props.eng==true?<h1><span style={{ fontSize: "1.5em", fontWeight: "200", letterSpacing: ".1em" }}>Our</span><br /><span style={{ marginLeft: "1.5em" }} className="script">Team</span></h1>:<h1><span style={{ fontSize: "1.5em", fontWeight: "200", letterSpacing: ".1em" }}>NUESTRO</span><br /><span style={{ marginLeft: "1.5em" }} className="script">equipo</span></h1>}
                    </span>
                    {props.eng==true?
                      <p>Meet those in charge <br/>of giving life and promotion<br/> to our project.             </p>
                      :  <p>Conoce a los encargados<br/> de darle vida y promoción<br/> a nuestro proyecto</p>}
                  
                    </div>
                   
        </div>
    </div>
)    
}


const Equipo = (props)=>{
  return(   <ScrollWrapper classes="equipo">
      <span className="wrapped-header playa">
    <h2>

    {props.eng==true?
                   <> La Amada's<br/>Team</>
                      :  <> Equipo<br/>La Amada</>}
    
    
    
    <br /><span className="sub" style={{fontStyle:"italic",fontWeight:"200",letterSpacing:".1em"}}>
    {props.eng==true?
                  "Only the best in our team!"
                      :  "¡Un equipo construido por los mejores!"}

        
        </span></h2>
        
</span>
{props.eng==true?
                 <p>Our residential complex is well known for its privileged location and luxurious amenities, but none of this would be possible without the work of our passionate team who are behind this project. Come meet the people in charge of our sales and admin department. They make us proud every day!
                 </p>
                      :  <p>Nuestro residencial se caracteriza por su privilegiada ubicación y por sus lujosas amenidades, pero esto no sería posible sin el grandioso equipo que está detrás de este proyecto. Conoce los responsables del trabajo en el área de ventas y administración de proyecto, un equipo que sin lugar a dudas estamos orgullosos de formar parte de él.</p>}


<div className="personas-wrapper">
    <div className="persona">
   <div className="mug"><HandleImages name="persona1"/></div> 
    <div><span>HORACIO MARTINEZ </span><br/>
    <span>{props.eng==true?" Commercial Director":"Director Comercial" }</span></div>
    </div>
 
    <div className="persona">
    <div className="mug"><HandleImages name="persona2"/></div> 
   <div><span>MARISA MARTINEZ</span><br/>
    <span>{props.eng==true?"Broker":"Asesora Inmobiliario" } </span></div> 
    </div>

    <div className="persona">
   <div className="mug"><HandleImages name="persona3"/></div> 
   <div><span>YAEL R. ALONSO </span><br/>
    <span>{props.eng==true?"Broker":"Asesor Inmobiliario" } </span></div> 
    </div>

    <div className="persona">
   <div className="mug"><HandleImages name="persona4"/></div> 
   <div><span>Estefanía Azuara </span><br/>
    <span>{props.eng==true?"Broker":"Asesora Inmobiliario" } </span></div> 
    </div>

    <div className="persona">
   <div className="mug"><HandleImages name="persona5"/></div> 
   <div><span>Angélica Hernándes  </span><br/>
    <span>{props.eng==true?" Assistant":"Asistente" }</span></div> 
    </div>
</div>
</ScrollWrapper>)
}

 const Asociados =(props)=>{
   return( 

    <ScrollWrapper classes="asociados bg-sand ">
    <span className="wrapped-header asociados">
  <h2>
  {props.eng==true?
                  "Associates "
                      :  "Equipo"}

  
  <br /><span className="sub" style={{fontStyle:"italic",fontWeight:"200",letterSpacing:".1em"}}>
  {props.eng==true?
                  "Our pillars of growth and positioning are supported by two great Mexican companies: "
                      :  "  Nuestros pilares de crecimiento y posicionamiento están sustentados por dos grandes empresas mexicanas: "}
      </span></h2>
      
</span>
<div className="asociado">
<a href="https://www.promecapac.com/" target="_blank"><div className="logo"><img src={promecap}/></div> </a>

{props.eng==true?
                    <p>Hotelera Marina, S.A. de C.V. is the developer at La Amada. Hotelera Marina is an affiliate of Promecap Capital de Desarrollo, S.A. de C.V.  Promecap discovers value and manages investments for private and institutional clients in Mexico and abroad. Through its affiliation with Hotelera Marina, Promecap is able to provide stable guidance and a long-term vision to the community at La Amada.
                    </p>
                      :   <p>Hotelera Marina, S.A. de C.V. es el desarrollador de La Amada y es socio de Promecap Capital de Desarrollo, S.A. de C.V. Esta última se dedica a descubrir valor y administrar inversiones para clientes privados e instituciones en México y el extranjero. A través de su afiliación con Hotelera Marina, Promecap otorga una dirección estable y visión a largo plazo para la comunidad de La Amada.</p>}
  
</div>
<div className="asociado">
<a href="https://www.hamakhotels.com/home" target="_blank"><div className="logo"><img src={hamak}/></div> </a>

{props.eng==true?
                    <p>Hamak Hotels is an expert at creating lifelong memories. Hamak manages the renovation and amenity improvements at the La Amada Residences.  Hamak designs and operates some of the premier hotel and resort experiences in Latin America. Whether designing new resorts or managing existing hotel operations, Hamak focuses on top tier quality guest experiences.
                    </p>
                      :   <p>Hamak Hotels es experto creando recuerdos para toda la vida. Hamak administra la renovación, así como las mejoras de las instalaciones del residencial La Amada. Hamak diseña y opera varios hoteles Premier y experiencias tipo resort en Latinoamérica. Tanto en el diseño de nuevos resorts como en la administración de hoteles. El enfoque de Hamak está en brindar experiencias de lujo. 
                      </p>}
</div>

<div className="asociado">
<a href="https://www.sonneil.com/" target="_blank"><div className="logo"><img src={sonneil}/></div> </a>

{props.eng==true?
                    <p>Sonneil con presencia en México y en España, es una proptech inmobiliaria especializada en lograr la mejor experiencia de compra para nuestros clientes a través del uso intensivo de la tecnología y del marketing online; nuestra principal preocupación es agilizar el proceso de compra, brindando seguridad y confianza a nuestros clientes.   Comprometidos con el servicio al cliente y con la transparencia, Sonneil esta regulado por la institución internacional independiente más prestigiosa del sector inmobiliario, que vela por fomentar las mejores prácticas en la industria, entre ellas transparencia, seguridad, profesionalidad y servicio; la Royal Institution of Chartered Surveyors con sus siglas RICS.
                    </p>
                      :   <p>Sonneil con presencia en México y en España, es una proptech inmobiliaria especializada en lograr la mejor experiencia de compra para nuestros clientes a través del uso intensivo de la tecnología y del marketing online; nuestra principal preocupación es agilizar el proceso de compra, brindando seguridad y confianza a nuestros clientes.   Comprometidos con el servicio al cliente y con la transparencia, Sonneil esta regulado por la institución internacional independiente más prestigiosa del sector inmobiliario, que vela por fomentar las mejores prácticas en la industria, entre ellas transparencia, seguridad, profesionalidad y servicio; la Royal Institution of Chartered Surveyors con sus siglas RICS.
                      </p>}
</div>


</ScrollWrapper>
   )
 }

 const FullImage=()=>{
     return(
         <HandleImages name="conocenos"/>
     )
 }

class Conocenos extends React.Component {



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
<Asociados/>
<FullImage/>
            </Layout>)
    }



}

export default Conocenos