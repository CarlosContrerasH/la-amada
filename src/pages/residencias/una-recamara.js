import React from 'react'

import { Link } from 'gatsby'

import { HandleImages } from "../../components/handleImages"
import Layout from '../../components/Layout'

import { useScrollPercentage } from 'react-scroll-percentage'
import FancySlider from "../../components/fancySlider"
import lock from "../../img/RESIDENCIAS/features/LOCK-OFF.svg"
import mar from "../../img/RESIDENCIAS/features/VISTA-MARINA.svg"
import playa from "../../img/RESIDENCIAS/features/VISTA-PLAYA.svg"
import reserva from "../../img/RESIDENCIAS/features/VISTA-RESERVA.svg"

import cocina from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/COCINA.svg"
import lavado from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/CUARTO-LAVADO.svg"
import dorm2 from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/DORMITORIO-2.svg"
import dorm3 from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/DORMITORIO-3.svg"
import dormP from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/DORMITORIO-PRINCIPAL.svg"
import terraza from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/METROS-CUADRADOS-TERRAZA.svg"
import vivienda from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/METROS-CUADRADOS.svg"
import salaComedor from "../../img/RESIDENCIAS/1 RECAMARA/ICONOS-CARACTERISTICAS/SALA-COMEDOR.svg"











const Detalle = (props) => {
    return (<div className={"residencia-accordeon expanded detalle"}>

        <h2>Una Recámara</h2>
        <div className="content">
            <h3>Desde 570,000 USD</h3>
            <h3>Unidades disponibles de entrega inmediata con caracteristicas:</h3>


            <div className="icons-wrapper">

                <div>
                    <img alt="lock" src={lock} />
                    <span>Lock-off</span></div>

                <div><img alt="lock" src={mar} /><span>Vista<br /> al mar</span></div>

                <div><img alt="lock" src={playa} /><span>Marinafront residences</span></div>

                <div><img alt="lock" src={reserva} /><span>Vista<br /> a la reserve</span></div>

            </div>




        </div>
    </div>)
}



const FloorPlan = (props) => {
    return (<div className="bg-sand floor-plan">

        <HandleImages name="floorPlan1" />
    </div>)
}


const Features = (props) => {
    return (<div className="features">
        <div className="wrapper">
            <div className="col">
                <div className="feature">
                    <h4>Sala Comedor</h4>
                    <div><img alt="Sala Comedor" src={salaComedor} /><span>54M<sup>2</sup></span><span>581FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                    <h4>Cocina</h4>
                    <div><img alt="Sala Comedor" src={cocina} /><span>54M<sup>2</sup></span><span>581FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                    <h4>Dormitorio Principal</h4>
                    <div><img alt="Sala Comedor" src={dormP} /><span>54M<sup>2</sup></span><span>581FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                    <h4>Dormitorio 2</h4>
                    <div><img alt="Sala Comedor" src={dorm2} /><span>54M<sup>2</sup></span><span>581FT<sup>2</sup></span></div>
                </div>
            </div>

            <div className="col">
            <div className="feature">
                    <h4>Dormitorio 3</h4>
                    <div><img alt="Sala Comedor" src={dorm3} /><span>54M<sup>2</sup></span><span>581FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                    <h4>Habitación de Servicio</h4>
                    <div><img alt="Sala Comedor" src={lavado} /><span>54M<sup>2</sup></span><span>581FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                    <h4>M<sup>2</sup> Vivienda</h4>
                    <div><img alt="Sala Comedor" src={vivienda} /><span>54M<sup>2</sup></span><span>581FT<sup>2</sup></span></div>
                </div>
                <div className="feature">
                <h4>M<sup>2</sup> Terraza</h4>
                    <div><img alt="Sala Comedor" src={salaComedor} /><span>54M<sup>2</sup></span><span>581FT<sup>2</sup></span></div>
                </div>
            </div>
     
        </div>
        <div className="buttons">
                <button name="Descargar Plano" className="flat-button sand-button centered-button" style={{ margin: "2em" }}>Decargar Plano PDF</button>

                <button name="Tour Virtual" className="flat-button sand-button centered-button" style={{ margin: "2em" }}>Tour Virtual</button>

            </div>

    </div>)
}





const Map = (props) => {
    return (
        <div className="map-wrapper bg-sand">
          
          <div className={"map active"+props.active}>
<HandleImages name="map"/>
       
 

 



 
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"   viewBox="0 0 764.4 1107.9" >
<defs>
    <radialGradient id="myGradient">
      <stop offset="50%" stop-color="#ffffffff" />
      <stop offset="100%" stop-color="#ffffff00" />
    </radialGradient>
  </defs>
<g>
	<path d="M310.4,431.7c0,20.8-16.7,37.5-37.5,37.5s-37.5-16.7-37.5-37.5s16.7-37.5,37.5-37.5C293.7,394.2,310.4,410.9,310.4,431.7"
		/>
	<path d="M289.7,431.7c0,9.3-7.5,16.8-16.8,16.8s-16.8-7.5-16.8-16.8s7.5-16.8,16.8-16.8C282.2,414.9,289.7,422.4,289.7,431.7"/>
	<path d="M269,423.5l3.7,14.2h-2.6l-0.8-3.3h-3.7l-0.8,3.3h-2.6l3.8-14.2H269z M268.7,432.3l-1.3-6.1l-1.3,6.1H268.7z"/>
	<path d="M279.6,431.3c-0.3,0.3-0.7,0.6-1,0.9c-0.4,0.3-0.7,0.6-1,0.9s-0.5,0.7-0.7,1c-0.2,0.4-0.3,0.8-0.3,1.3h5.4v2.3h-8v-1.3
		c0-0.7,0-1.3,0.1-1.9c0.1-0.5,0.2-1,0.5-1.5c0.2-0.4,0.5-0.9,0.9-1.3s0.8-0.9,1.4-1.3c0.4-0.3,0.7-0.6,1-0.8
		c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.2,0.4-0.5,0.5-0.7c0.1-0.3,0.2-0.6,0.2-1c0-0.6-0.2-1.1-0.5-1.3c-0.3-0.2-0.8-0.4-1.3-0.4
		c-0.2,0-0.5,0.1-0.7,0.2s-0.4,0.3-0.6,0.4s-0.4,0.3-0.5,0.5c-0.2,0.2-0.3,0.4-0.4,0.5l-1.7-1.6c0.4-0.7,1-1.2,1.8-1.7
		c0.7-0.4,1.6-0.6,2.6-0.6c1.3,0,2.3,0.3,2.9,1c0.7,0.6,1,1.5,1,2.5c0,0.5,0,0.9-0.1,1.3s-0.2,0.7-0.4,1.1c-0.2,0.3-0.4,0.7-0.7,1
		C280.4,430.5,280.1,430.9,279.6,431.3"/>
</g>
<g>
	<path d="M545.2,417.4c0,20.8-16.9,37.5-37.5,37.5c-20.8,0-37.5-16.9-37.5-37.5c0-20.8,16.9-37.5,37.5-37.5
		C528.3,379.7,545.2,396.6,545.2,417.4"/>
	<path d="M525,417.4c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3C517.2,400,525,407.8,525,417.4"
		/>
	<path d="M505.7,409.1l3.7,14.2h-2.6L506,420h-3.7l-0.8,3.3h-2.6l3.8-14.2H505.7z M505.4,417.8l-1.3-6.1l-1.3,6.1H505.4z"/>
	<polygon points="512.5,411.4 510,411.4 510,409.1 515.1,409.1 515.1,423.2 512.5,423.2 	"/>
</g>
<g>
	<path d="M464.4,477.5c0,20.8-16.9,37.5-37.5,37.5c-20.8,0-37.5-16.9-37.5-37.5c0-20.8,16.9-37.5,37.5-37.5
		C447.5,439.8,464.4,456.7,464.4,477.5"/>
	<path d="M444.2,477.5c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C436.4,460.1,444.2,467.9,444.2,477.5"/>
	<path d="M422.7,469.2l3.8,14.2h-2.6l-0.8-3.3h-3.7l-0.8,3.4H416l3.7-14.2L422.7,469.2z M422.4,478l-1.3-6.1l-1.3,6.1H422.4z"/>
	<path d="M435.6,473.9c0,0.5-0.2,0.9-0.5,1.3c-0.4,0.4-0.8,0.6-1.2,0.9c0.2,0.1,0.5,0.3,0.7,0.4c0.2,0.2,0.4,0.3,0.6,0.5
		s0.3,0.4,0.4,0.6s0.2,0.4,0.2,0.7v1.9c0,0.6-0.1,1.1-0.3,1.5c-0.2,0.4-0.5,0.8-0.9,1c-0.4,0.3-0.8,0.5-1.3,0.6s-1,0.2-1.6,0.2
		c-0.5,0-1-0.1-1.4-0.2c-0.5-0.1-0.9-0.3-1.2-0.5c-0.4-0.2-0.7-0.5-1-0.9s-0.5-0.8-0.6-1.3l2.1-0.9c0.1,0.2,0.2,0.4,0.3,0.6
		c0.1,0.2,0.3,0.3,0.5,0.5c0.2,0.1,0.4,0.3,0.6,0.3s0.4,0.1,0.6,0.1s0.5,0,0.7,0s0.4-0.1,0.6-0.2s0.3-0.2,0.4-0.3
		c0.1-0.1,0.1-0.3,0.1-0.6v-1.9c0-0.2,0-0.4-0.1-0.5s-0.2-0.2-0.4-0.3c-0.2-0.1-0.4-0.1-0.6-0.2c-0.2,0-0.4-0.1-0.6-0.1h-1.5V475
		h1.5c0.2,0,0.4,0,0.6,0s0.4-0.1,0.6-0.2s0.3-0.2,0.4-0.3c0.1-0.1,0.1-0.3,0.1-0.6v-1.5c0-0.5-0.2-0.8-0.5-0.9s-0.7-0.2-1.2-0.2
		c-0.4,0-0.8,0.1-1.2,0.4c-0.4,0.3-0.6,0.6-0.8,1l-1.9-1.1c0.1-0.4,0.3-0.8,0.6-1.1c0.3-0.3,0.6-0.6,0.9-0.8
		c0.4-0.2,0.7-0.4,1.2-0.5c0.4-0.1,0.8-0.2,1.3-0.2c0.6,0,1.1,0.1,1.6,0.2s0.9,0.3,1.3,0.6c0.4,0.3,0.7,0.6,0.9,1.1
		c0.2,0.4,0.3,0.9,0.3,1.5v1.5H435.6z"/>
</g>
<g>
	<path d="M358.6,513c0,20.8-16.9,37.5-37.5,37.5c-20.8,0-37.5-16.9-37.5-37.5c0-20.8,16.9-37.5,37.5-37.5
		C341.7,475.3,358.6,492.2,358.6,513"/>
	<path d="M338.4,513c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C330.6,495.6,338.4,503.4,338.4,513"/>
	<path d="M317.7,505l3.7,14.2h-2.6l-0.8-3.3h-3.7l-0.8,3.3h-2.6l3.8-14.2H317.7z M317.4,513.8l-1.3-6.1l-1.3,6.1H317.4z"/>
	<path d="M329.6,513.1h1.8v2.3h-1.8v3.8H327v-3.8h-5v-1.7l3.8-8.6h3.8L329.6,513.1L329.6,513.1z M327,507.3h-0.1l-2.1,5.8h2.2V507.3
		z"/>
</g>
<g>
	<path d="M368.1,595.4c0,20.8-16.9,37.5-37.5,37.5c-20.8,0-37.5-16.9-37.5-37.5c0-20.8,16.9-37.5,37.5-37.5
		C351.4,557.9,368.1,574.6,368.1,595.4"/>
	<path d="M347.9,595.4c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C340.2,578.1,347.9,585.8,347.9,595.4"/>
	<path d="M328.5,587.5l3.7,14.2h-2.6l-0.8-3.3H325l-0.8,3.3h-2.6l3.8-14.2H328.5z M328.2,596.2l-1.3-6.1l-1.3,6.1H328.2z"/>
	<polygon points="332.2,587.5 340.5,587.5 336.5,601.6 333.8,601.6 337.2,589.8 332.2,589.8 	"/>
</g>
<g>
	<path d="M504.3,550.9c0,20.8-16.9,37.5-37.5,37.5c-20.8,0-37.5-16.9-37.5-37.5c0-20.8,16.9-37.5,37.5-37.5
		C487.4,513.4,504.3,530.1,504.3,550.9"/>
	<path d="M484.1,550.9c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3
		C476.3,533.6,484.1,541.3,484.1,550.9"/>
	<path d="M463.6,543.3l3.7,14.2h-2.6l-0.8-3.3h-3.7l-0.8,3.3h-2.6l3.8-14.2H463.6z M463.3,552.1L462,546l-1.3,6.1H463.3z"/>
	<path d="M473.1,548.1c1.2,0,2,0.3,2.6,0.8s0.9,1.4,0.9,2.7v2.5c0,0.6-0.1,1.1-0.3,1.6c-0.2,0.4-0.5,0.8-0.9,1.1s-0.8,0.5-1.3,0.7
		c-0.5,0.1-1.1,0.2-1.7,0.2s-1.1-0.1-1.6-0.2c-0.5-0.1-0.9-0.4-1.3-0.7s-0.6-0.7-0.8-1.1c-0.2-0.4-0.3-1-0.3-1.6v-7.6
		c0-0.6,0.1-1,0.3-1.4c0.2-0.4,0.5-0.7,0.9-1s0.8-0.5,1.3-0.6s1-0.2,1.6-0.2c0.4,0,0.7,0,1,0.1c0.3,0,0.6,0.1,0.8,0.2
		c0.2,0.1,0.5,0.3,0.7,0.5s0.5,0.4,0.8,0.7l-1.4,1.7c-0.2-0.3-0.5-0.5-0.8-0.7s-0.7-0.3-1-0.3c-0.4,0-0.8,0.1-1.1,0.2
		c-0.3,0.1-0.5,0.4-0.5,0.8v2.6c0.4-0.4,0.7-0.6,1.1-0.8C472.4,548.2,472.7,548.1,473.1,548.1 M474.1,551.9c0-0.5-0.1-0.8-0.3-1
		c-0.2-0.2-0.6-0.3-1-0.3c-0.5,0-0.9,0.1-1.3,0.4c-0.4,0.3-0.5,0.7-0.5,1.1v1.9c0,0.5,0.1,0.8,0.4,1s0.7,0.3,1.1,0.3
		c0.5,0,0.9-0.1,1.2-0.3c0.3-0.2,0.4-0.5,0.4-1L474.1,551.9L474.1,551.9z"/>
</g>
<g>
	<path d="M582.3,498.8c0,20.8-16.9,37.5-37.5,37.5c-20.8,0-37.5-16.9-37.5-37.5c0-20.8,16.9-37.5,37.5-37.5S582.3,478,582.3,498.8"
		/>
	<path d="M562.1,498.8c0,9.6-7.8,17.3-17.3,17.3c-9.6,0-17.3-7.8-17.3-17.3c0-9.6,7.8-17.3,17.3-17.3S562.1,489.2,562.1,498.8"/>
	<path d="M541.2,490.8l3.7,14.2h-2.6l-0.8-3.3h-3.7L537,505h-2.6l3.8-14.2H541.2z M541,499.6l-1.3-6.1l-1.3,6.1H541z"/>
	<path d="M550.2,496.1c1.2,0,2.2,0.3,2.9,0.9s1.1,1.5,1.1,2.7v1.8c0,0.6-0.1,1.1-0.3,1.6s-0.5,0.8-0.9,1.1c-0.4,0.3-0.8,0.5-1.3,0.7
		c-0.5,0.1-1.1,0.2-1.7,0.2c-0.5,0-0.9-0.1-1.4-0.2s-0.9-0.3-1.2-0.6c-0.4-0.3-0.7-0.6-0.9-1c-0.3-0.4-0.4-0.9-0.5-1.4l2.5-0.7
		c0,0.1,0.1,0.2,0.2,0.4c0.1,0.2,0.2,0.4,0.3,0.6s0.3,0.4,0.6,0.5c0.2,0.1,0.5,0.2,0.9,0.2c0.5,0,0.9-0.1,1.1-0.3
		c0.2-0.2,0.3-0.5,0.3-1v-1.8c0-0.5-0.1-0.8-0.4-1c-0.3-0.2-0.7-0.3-1.2-0.3h-3.6l0.6-7.5h6.5v2.3h-4.2l-0.2,3h0.8V496.1z"/>
</g>
<path d="M764.4,1107.9H0V0h764.4V1107.9z"/>
</svg>









</div>

<div className="map-content">
    <h4>Conoce la Ubicación Exacta de tu <span>Próximo Hogar</span></h4>
    <h5>Residencias en Edificio:</h5>
    <div>{console.log(props)}
    <span className="legend">A{props.active}</span><span>Vista al Mar<br/> Marinafront</span>
  
    
    </div>

    <button onClick={props.increase} name="Siguiente">⟶</button>
    <button onClick={props.decrease} name="Anterior">⟵</button>
</div>


        </div>
    )
}





const Imagen = (props) => {
    return (
         
<div className="single-image">
            <HandleImages name="unaRecamara"/></div>
        
     )
}

const Buttons = (props) =>{
    return(  <div className="residencias-buttons-wrapper bg-sand">
      <Link to="/residencias/una-recamara">  <button  className="active" onClick={()=>{props.click("1");document.getElementById("r1").scrollIntoView();}}>
              <span>1</span>
              <span>Recámaras</span>
          </button></Link> 

          <Link to="/residencias/dos-recamaras">    <button onClick={()=>{props.click("2");document.getElementById("r2").scrollIntoView();}}>
              <span>2</span>
              <span>Recámaras</span>
          </button></Link> 

          <Link to="/residencias/tres-recamaras">      <button onClick={()=>{props.click("3");document.getElementById("r3").scrollIntoView();}}>
              <span>3</span>
              <span>Recámaras</span>
          </button></Link> 

          <Link to="/residencias/cuatro-recamara">    <button onClick={()=>{props.click("4");document.getElementById("r4").scrollIntoView();}}>
              <span>4</span>
              <span>Recámaras</span>
          </button></Link> 
      </div>)
  }




class Residencias extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
mapa:1
        }


    }


    increase = ()=>{
        this.setState({
            mapa:this.state.mapa==7?1:this.state.mapa+1
        })
    }


    decrease=()=>{
        this.setState({
            mapa:this.state.mapa==1?7:this.state.mapa-1
        })
    }






    render() {

        return (

            <Layout>
                <div className="detalle-hero"> <HandleImages name="unaRecamara" /></div>
                <Detalle />
                <FloorPlan />
                <Features />
                <Map active={this.state.mapa} increase={this.increase} decrease={this.decrease}/>
                <Imagen/>
                <Buttons/>
            </Layout>)
    }



}

export default Residencias