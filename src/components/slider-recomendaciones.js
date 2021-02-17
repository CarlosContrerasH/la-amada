import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import ScrollWrapper from "../components/scrollwrapper"

import { HandleImages } from "../components/handleImages"
import Swipe from 'react-easy-swipe';

import pin from "../img/location-pin.svg"
import Logo from "./logo"
const SimpleSlider = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            position: 0,
            prevpos: 0

        }
        this.onSwipeMove = this.onSwipeMove.bind(this);
        this.onSwipeEnd = this.onSwipeEnd.bind(this)
    }


    handleIncrease() {

        if(this.state.active==this.props.slides.length-1){
            this.setState({
                active: 0
            })
        }
        else{
        this.setState({
            active: this.state.active + 1
        })}
    }
    handleDecrease() {

        if(this.state.active==0){
            this.setState({
                active: this.props.slides.length - 1
            })
        }
        else{
        this.setState({
            active: this.state.active - 1
        })}
    }

    handleButtonClick(e) {

        this.setState({
            active: e
        })
    }

    onSwipeStart(event) {
        // console.log('Start swiping...', event);
    }

    onSwipeMove(position, event) {

        this.setState({

            position: position.x,

        })


        // console.log(`Moved ${position.x} pixels horizontally`, event);
        // console.log(`Moved ${position.y} pixels vertically`, event);
    }

    onSwipeEnd(event) {
        if (this.state.position < 0 && this.state.active < this.props.slides.length - 1) {
            this.handleIncrease();

            this.setState({
                position: 0
            })

        }
        if (this.state.position > 0 && this.state.active > 0) {
            this.handleDecrease();

            this.setState({
                position: 0
            })

        }
    }

    render() {
        return (
            <ScrollWrapper>



                <div className="col-wrapper recomendaciones">
                    <div className="recomendacion left-col">
                        <Swipe
                            onSwipeStart={this.onSwipeStart}
                            onSwipeMove={this.onSwipeMove}
                            onSwipeEnd={this.onSwipeEnd}>
                            <div className="slides-wrapper">

                                {this.props.slides.map((slide, index) => {

                                    return <div key={index} className="slide" id={index == this.state.active ? "active" : ""}>{slide}</div>;
                                })}



                                <div className="slider-buttons recomendaciones">
                                    {this.props.slides.map((slide, index) => {

                                        return <button key={index} onClick={(event) => { this.handleButtonClick(event.target.id) }} id={index} className={index == this.state.active ? "active" : ""}></button>;
                                    })}
                                </div>

                            </div>  </Swipe>
                    </div>
                    <div className="recomendacion right-col">
<div >
                





                    {this.state.active == 0 ? <>
                        <span className="wrapped-header ubicacion" style={{ marginLeft: "0" }}>
                            <h2> {this.props.eng == true ? <>Explora los arrecifes de coral</> : <>Explora los arrecifes de coral</>}</h2>
                        </span>
                        {this.props.eng == true ? <> <p>Whether you are a novice or a seasoned diver, the coast off La Amada offers many ideal snorkeling locations. Explore vibrant coral reefs in the warm Caribbean waters and spot sea turtles, playful dolphins and gentle whale sharks. Our nearby beaches and lagoons are ideal for snorkeling, but you can also head for offshore reefs in guided boat tours, some of which leave directly from our marina.</p><p>
                            For many aspiring divers, the Cancun area offers the perfect training grounds to achieve their first dive certification. Six PADI certified dive shops in the region introduce divers to the warm and clear Caribbean waters, where divers enjoy excellent visibility and the opportunity to spot a diverse range of colorful aquatic life.  For more experienced divers, our coastline offers unique dive attractions and the challenge of freshwater cenote diving.
</p></> : <> <p>Explora los arrecifes de coral en las cálidas aguas caribeñas, podrás ver tortugas, delfines y dóciles tiburones ballena. Aún cuando muchas playas y lagunas cercanas son ideales para esnorquelear, muchos prefieren la emoción de tomar un excursión guiada a los arrecifes en aguas más lejanas de la costa. Muchas de estas excursiones se pueden encontrar directamente en la Marina V&V.  </p><p>
Para muchos buzos principiantes, Cancún es ideal para adquirir su primera certificación. Seis tiendas de buceo certificadas por PADI ofrecen excursiones a las cristalinas aguas caribeñas para observar la gran variedad y colorida vida marina. Para los más experimentados, están las atracciones únicas de la costa, y el reto de bucear en un cenote.
</p></>
                        }
                    </> : ""}


                    {this.state.active == 1 ? <>
                        <span className="wrapped-header ubicacion" style={{ marginLeft: "0" }}>
                            <h2> {this.props.eng == true ? <>Golf</> : <>Golf</>}</h2>
                        </span>
                        {this.props.eng == true ? <p>Beyond our own Greg Norman Signature Golf Course, Quintana Roo also offers 16 other golf courses to explore.</p> : <p>Además de nuestro campo de golf Greg Norman, hay otros 16 campos a descubrir en Quintana Roo.</p>
                        }
                    </> : ""}


                    {this.state.active == 2 ? <>
                        <span className="wrapped-header ubicacion" style={{ marginLeft: "0" }}>
                            <h2> {this.props.eng == true ? <>Spa</> : <>Spa</>}</h2>
                        </span>
                        {this.props.eng == true ? <p>If pampered relaxation is your top priority, there are countless nearby spa options to choose from. We recommend the experience of a cenote spa. The surroundings of pure water and ancient limestone are the perfect complement to a massage treatment.</p> : <p>Si relajarte y consentirte es tu prioridad, existen incontables opciones. Recomendamos la experiencia del Spa en un cenote. Rodearse de agua pura y piedra caliza es el complemento perfecto para un masaje.</p>
                        }
                    </> : ""}






                    {this.state.active == 3 ? < >
                        <span className="wrapped-header ubicacion" style={{ marginLeft: "0" }}>
                            <h2> {this.props.eng == true ? <>Compras</> : <>Compras</>}</h2>
                        </span>
                        {this.props.eng == true ? <p>When you arrive at La Amada, it is easy to forget that Cancun is just 30 minutes away. Cancun is well served for cutting edge fashions and familiar conveniences, with no fewer than eight major shopping malls and many large scale North American retailers.For those who are looking for a more distinctly Mexican experience, bustling local markets sell mementos and artisan handicrafts to savvy purchasers and casual tourists alike.</p> : <p>Al llegar a La Amada, es fácil olvidar que Cancún Centro está a solo 12km. La ciudad cuenta con una gran variedad de tiendas de moda nacionales y extranjeras así como tiendas departamentales establecidas en ocho grandes centros comerciales. </p>
                        }
                    </ > : ""}


                    {this.state.active == 4 ? < >
                        <span className="wrapped-header ubicacion" style={{ marginLeft: "0" }}>
                            <h2> {this.props.eng == true ? <>ISLA MUJERES</> : <>ISLA MUJERES</>}</h2>
                        </span>
                        {this.props.eng == true ? <p>Isla Mujeres is an increasingly popular destination just 13km off the coast of Cancun.  This island features some beautiful beaches, swimming with whale sharks, and an underwater sculpture museum.  The ferry terminal to visit Isla Mujeres is a short 10 minute drive from La Amada.</p> : <p>Isla Mujeres es un destino cada vez más popular a solo 13km de la costa de Cancún. En esta isla puedes gozar de hermosas playas, nadar con el tiburón ballena, o visitar el museo submarino. La terminal de ferry hacia Isla Mujeres está a 10 minutos de La Amada.</p>
                        }
                    </> : ""}


             



                    {this.state.active == 5 ? <>
                        <span className="wrapped-header ubicacion" style={{ marginLeft: "0" }}>
                            <h2> {this.props.eng == true ? <>Cocina</> : <>Cocina</>}</h2>
                        </span>
                        {this.props.eng == true ? <p>Downtown & Zona Hotelera Cancun offers a contemporary dining scene, with high quality restaurants serving up global fare at a very competitive cost. For those seeking a more authentic local some of our local beachside eateries serve the freshest and most amazing local seafood. We recommend speaking to the front desk to arrange a reservation at that undiscovered local’s place, our favorite is Mar y Aroma, our <a href="/amenidades/la-amada/beachclub-restaurant">Beachclub Restaurant.</a> </p> : <p>El centro de Cancún y malecón de la Zona Hotelera, ofrece una variedad de restaurantes contemporáneos de la mejor calidad a precio razonable. Aquellos que buscan comida más local, podrán encontrar restaurantes en la playa que sirven los más frescos y deliciosos mariscos, sugerimos preguntes a nuestra concierge su recomendación para un restaurante local típico aunque sin lugar a duda nuestro favorito es Mar y Aroma, nuestro <a href="/amenidades/la-amada/beachclub-restaurant">Beachclub Restaurant.</a></p>
                        }
                    </> : ""}


                    {this.state.active == 6 ? <>
                        <span className="wrapped-header ubicacion" style={{ marginLeft: "0" }}>
                            <h2> {this.props.eng == true ? <>Pesca en alta mar</> : <>Pesca en alta mar</>}</h2>
                        </span>
                        {this.props.eng == true ? <p>Beyond the shallow coastal waters, experienced fishing guides are ready to take you on a deep sea fishing adventure. Local species include sailfish, bonita, tuna, and even record breaking blue and white marlin. After your fishing adventure, we recommend asking your guide to arrange a seaside restaurant reservation, where a chef will prepare your catch of the day in the finest local tradition. Charters are based all along the Costa Maya and may also depart from our marina.</p> : <p>El pez vela, bonita, atún, e incluso el marlín son algunas especies locales que podrás encontrar. Después de tu aventura, recomendamos pedirle a tu guía que haga los preparativos necesarios con un restaurante a la orilla del mar, para que el chef cocine tu pesca del día con el sazón local. Encontrarás muchos excursiones de este tipo a lo largo de toda la Costa Maya, con la opción de salir desde nuestra marina.</p>
                        }
                    </> : ""}



                    {this.state.active == 7? <>
                        <span className="wrapped-header ubicacion" style={{ marginLeft: "0" }}>
                            <h2> {this.props.eng == true ? <>PENÍNSULA DE YUCATÁN</> : <>PENÍNSULA DE YUCATÁN</>}</h2>
                        </span>
                        {this.props.eng == true ? <> <p>The magic of the Mayan culture continues north on the Yucatan Peninsula. Ride way to Mérida and on the way visit the magical towns of Izamal and Valladolid; making stops at the different cenotes and Mayan ceremonial centers.</p><p>
                            Explore the natural environment in many of the parks and preserved sites throughout the Yucatan peninsula. Tours and guided excursions offer some incredible local experiences. Explore La Ruta de los Cenotes, underground caves, zipline through the jungle canopy, or take self-driving ATV or 4X4 adventure through jungle roads.
</p></> : <> <p>La magia de la cultura Maya continúa al norte sobre la Península de Yucatán. Adéntrate camino a Mérida y en el trayecto visita los pueblos mágicos de Izamal y Valladolid; haciendo paradas en los diferentes cenotes y centros ceremoniales mayas. </p><p>
                                Explora la naturaleza en los diversos parques y reservas de la península de Yucatán. Vive increíbles experiencias locales con excursiones guiadas. Explora las Ruta de los Cenotes, lugar de cuevas subterráneas y ríos secretos; cruza la jungla en tirolesa, o conduce un vehículo todoterreno por los caminos de la selva.
</p></>
                        }
                    </ > : ""}




                    {this.state.active == 8 ? <>
                        <span className="wrapped-header ubicacion" style={{ marginLeft: "0" }}>
                            <h2> {this.props.eng == true ? <>Chichen Itza</> : <>Chichen Itza</>}</h2>
                        </span>
                        {this.props.eng == true ? <p>The ancient capital of the Mayan Empire is an easy day trip from La Amada. This UNESCO World Heritage site is perhaps Mexico’s most important archeological site. Here it is possible to tour the ancient ruins with your own archeologist as your guide.</p> : <p>Es fácil llegar a Antigua Capital del Imperio Maya desde La Amada. Este lugar, reconocido por la UNESCO como patrimonio de la humanidad y considerado el sitio arqueológico más importante de México. Puedes recorrer las antiguas ruinas con un arqueólogo, como guía personal.</p>
                        }
                    </> : ""}



                


                    </div>
                    <div className="rec-buttons">
                 
    <button onClick={()=>this.handleDecrease()} name="Anterior"></button>
    <button onClick={()=>this.handleIncrease()} name="Siguiente"></button>
    </div>
                    </div>
 
                    
                </div>


            </ScrollWrapper>
        )
    }
}

export default SimpleSlider


