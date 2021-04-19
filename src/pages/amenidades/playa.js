import React from 'react'


import Layout from '../../components/Layout'

 
import ScrollWrapper from "../../components/scrollwrapper"
import { HandleImages } from "../../components/handleImages"
import SimpleSlider from "../../components/simpleSlider"
 
import Logo from "../../components/logo"

import ciclopista from "../../img/AMENIDADES/PLAYA/ICONOS/BICI-BLANCO.svg"
import golf from "../../img/AMENIDADES/PLAYA/ICONOS/GOLF-BLANCO-01.svg"
import marina from "../../img/AMENIDADES/PLAYA/ICONOS/MARINA-BLANCO-01.svg"
import seguridad from "../../img/AMENIDADES/PLAYA/ICONOS/SEGURIDAD-BLANCO-01.svg"
import helipuerto from "../../img/AMENIDADES/PLAYA/ICONOS/HELIPUERTO-BLANCO.svg"
import delfinario from "../../img/AMENIDADES/PLAYA/ICONOS/DELFINARIO-BLANCO-01.svg"
import vecinos from "../../img/AMENIDADES/PLAYA/ICONOS/VECINOS-BLANCO-01.svg"
import spa from "../../img/AMENIDADES/PLAYA/ICONOS/SPA-BLANCO-01.svg"

import { Link } from 'gatsby'




let bigSlider = [<HandleImages name="amenidadespH1" />,
<HandleImages name="amenidadespH2" />,
<HandleImages name="amenidadespH3" />,]



const Slider = (props) => {


  return (


    <ScrollWrapper classes="   amenidades-header">


      <SimpleSlider slides={bigSlider} />

    </ScrollWrapper>



  )
}


const Blurb = (props) => {


  return (


    <ScrollWrapper  >


      <div className="centered">

      <div style={{display:"none"}}>
         {props.eng?<h1>Playa Mujeres Amenities</h1>:
         <h1>Amenidades Playa Mujeres</h1>}
       </div>
        {props.eng == true ?
          <><p>While Cancun is a place visited by millions, Playa Mujeres is what fortunate locals and savvy expats have discovered for themselves. This highly livable community offers privacy and security in a beautiful natural environment. When you arrive at Playa Mujeres, it is easy to forget that we are 15 mins away from Cancun. The Laguna de Chacmochuc Preserve acts as a natural buffer between ourselves and the outside world. While the tension and challenges of the outside world are easy to leave at the secure gates of our community, necessities and conveniences are never far away.      </p>
            <p> Playa Mujeres has 930 private acres, making it the most exclusive touristic residential community. It is located north of Cancun where the white sand beaches extend for 3.5km. Here nature comes first. The deep respect we have for nature will make you bathe in the magic of the Caribbean and feel its connectivity. Playa Mujeres encircles a variety of private residences, golf courses, a marina, bike paths, and some of the best hotels in the country.  Our resort offers unique experiences. Come submerge in them and make your stay one of the most memorable holidays.</p></>
          :
          <><p>Aun cuando Cancún es un destino que recibe millones de turistas al año, Playa Mujeres se mantiene como una joya escondida que solo algunos afortunados locales y expats han descubierto. Esta comunidad, rodeada del más magnífico entorno natural, garantiza privacidad y seguridad.
          Al llegar a Playa Mujeres, es muy fácil olvidarse que te encuentras a tan solo 15 minutos de Cancún Centro. La Laguna de Chacmochuc anidada a un costado del residencial, actúa como un filtro natural 
          entre La Amada y el mundo exterior. Aún cuando la presión y el estrés del mundo exterior se siente tan lejano al cruzar las puertas de nuestra comunidad, las necesidades y amenidades de ciudad nunca están lejos.</p>
            <p>
            Playa Mujeres es una la más exclusiva comunidad turística residencial cerrada de 376 hectáreas, ubicada al norte de la ciudad de Cancún, con 3.5 kilómetros de playas de arena blanca donde el cuidado y el respeto por la naturaleza del entorno hacen de este desarrollo un lugar mágico que permite la convivencia, privacidad y conectividad que tanto deseas. Alberga residencias privadas, un campo de golf, una marina, ciclopista y varios de los mejores hoteles del país. Las amenidades que lo componen ofrecen experiencias únicas de un resort, que te esperan para hacer cada uno de tus días momentos memorables que perdurarán por siempre. </p></>

        }



      </div>

    </ScrollWrapper>



  )
}


const Grid = (props) => {


  return (





    <div className="amenidades-grid playa">
      <ScrollWrapper classes="grid-element">    <Link to="/amenidades/playa/ciclopista" >     <div  >


        <div className="icon-wrapper"><img alt="Ciclopista" src={ciclopista} /><span>{props.eng == true ? "Bike & Running Path" : "CICLOPLISTA"}</span></div> <HandleImages name="amenidadesP2" />

      </div></Link></ScrollWrapper>

      <ScrollWrapper classes="grid-element big" >  <Link to="/amenidades/playa/golf" >    <div >
        <div className="icon-wrapper"><img alt="Campo de Golf" src={golf}  /><span>{props.eng == true ? "Golf Course" : "CAMPO DE GOLF"}</span></div> <HandleImages name="amenidadesP1" />
      </div></Link></ScrollWrapper>

      <ScrollWrapper classes="grid-element big" >  <Link to="/amenidades/playa/marina" >     <div >
        <div className="icon-wrapper"><img alt="Marina" src={marina} /><span>{props.eng == true ? "MARINA" : "MARINA"}</span></div> <HandleImages name="amenidadesP5" />
      </div></Link></ScrollWrapper>

      <ScrollWrapper classes="grid-element " >  <Link to="/amenidades/playa/seguridad" >    <div >
        <div className="icon-wrapper"><img alt="Doble Caseta de Seguridad" src={seguridad} /><span>{props.eng == true ? "Gated Community" : "DOBLE CASETA DE SEGURIDAD"}</span></div> <HandleImages name="caseta" />

      </div></Link></ScrollWrapper>

      <ScrollWrapper classes="grid-element ">  <Link to="/amenidades/playa/helipuerto" >    <div >
        <div className="icon-wrapper"><img alt="Helipuerto" src={helipuerto} /><span>{props.eng == true ? "HELIPORT" : "HELIPUERTO"}</span></div> <HandleImages name="amenidadesP4" />

      </div></Link></ScrollWrapper>

      <ScrollWrapper classes="grid-element big">  <Link to="/amenidades/playa/delfinario" >      <div >
        <div className="icon-wrapper"><img alt="Delfinario" src={delfinario} /><span>{props.eng == true ? "dolphinarium" : "DELFINARIO"}</span></div> <HandleImages name="amenidadesP3" />


      </div></Link></ScrollWrapper>

      <ScrollWrapper classes="grid-element big">  <Link to="/amenidades/playa/vecinos" >     <div >
        <div className="icon-wrapper"><img alt="Vecinos Galardonados" src={vecinos} /><span>{props.eng == true ? "Luxury Hotels as Neighbors" : "Nuestros vecinos, Hoteles de Lujo"}</span></div> <HandleImages name="amenidadesP8" />

      </div></Link></ScrollWrapper>

      <ScrollWrapper classes="grid-element " >  <Link to="/amenidades/playa/spa" >     <div >
        <div className="icon-wrapper"><img alt="Spa" src={spa} /><span>{props.eng == true ? "SPA" : "SPA"}</span></div> <HandleImages name="amenidadesP7" />

      </div></Link></ScrollWrapper>



    </div>



  )
}




const SingleCol = (props) => {


  return (

    <ScrollWrapper classes="single">

      <div className="col-wrapper amenidades">


        <Link to="/amenidades/la-amada"   >
          <div className="logo"> <Logo/></div>
          <div className="bg">
          <HandleImages name="amenidadesA10"/></div>
        </Link>

      
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
        <Blurb />
        <Grid />
        <SingleCol />
      </Layout>)
  }



}

export default Amenidades