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


        {props.eng == true ?
          <><p>An exclusive 930 acres residential tourist community located in the north of Cancún, where the respect and care for the environment and nature makes it a magical residential and hotel community that allows for the kind of cohabitation, privacy, and connectivity that you have been yearning. </p>
            <p>Its amenities offer unique resort experiences that will transform each one of your days into unforgettable moments that will last forever.</p></>
          :
          <><p>Playa Mujeres es una exclusiva comunidad turístico residencial cerrada de 376 hectáreas ubicada al norte de la ciudad de Cancún, donde el cuidado y el respeto por la naturaleza del entorno hacen de este desarrollo un lugar mágico que permite la convivencia, privacidad y conectividad que tanto deseas.</p>
            <p>Las amenidades que lo componen ofrecen experiencias únicas de un resort, que te esperan para hacer cada uno de tus días momentos memorables que perdurarán por siempre.</p></>

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
        <div className="icon-wrapper"><img alt="Doble Caseta de Seguridad" src={seguridad} /><span>{props.eng == true ? "Gated Community" : "DOBLE CASETA DE SEGURIDAD"}</span></div> <HandleImages name="amenidadesP6" />

      </div></Link></ScrollWrapper>

      <ScrollWrapper classes="grid-element ">  <Link to="/amenidades/playa/helipuerto" >    <div >
        <div className="icon-wrapper"><img alt="Helipuerto" src={helipuerto} /><span>{props.eng == true ? "HELIPORT" : "HELIPUERTO"}</span></div> <HandleImages name="amenidadesP4" />

      </div></Link></ScrollWrapper>

      <ScrollWrapper classes="grid-element big">  <Link to="/amenidades/playa/delfinario" >      <div >
        <div className="icon-wrapper"><img alt="Delfinario" src={delfinario} /><span>{props.eng == true ? "dolphinarium" : "DELFINARIO"}</span></div> <HandleImages name="amenidadesP3" />


      </div></Link></ScrollWrapper>

      <ScrollWrapper classes="grid-element big">  <Link to="/amenidades/playa/vecinos" >     <div >
        <div className="icon-wrapper"><img alt="Vecinos Galardonados" src={vecinos} /><span>{props.eng == true ? "VECINOS GALARDONADOS" : "VECINOS GALARDONADOS"}</span></div> <HandleImages name="amenidadesP8" />

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
          <HandleImages name="tenis"/></div>
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