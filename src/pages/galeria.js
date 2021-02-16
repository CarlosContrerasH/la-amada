import React from 'react'


import Layout from '../components/Layout'


import Swipe from 'react-easy-swipe';
import { HandleImages } from "../components/handleImages"


let bigSlider =[ <HandleImages name="invierteHeader"/>,
<HandleImages name="invierte1"/>,
<HandleImages name="invierte2"/>,
<HandleImages name="invierte3"/>,
<HandleImages name="beach"/>,
<HandleImages name="playa"/>,
<HandleImages name="depas"/>,
<HandleImages name="tenis"/>,
<HandleImages name="bicis"/>,
/*<HandleImages name="persona1"/>,
<HandleImages name="persona2"/>,*/
<HandleImages name="ubicacionHeader"/>,
/*
<HandleImages name="recomendacion1"/>,
<HandleImages name="recomendacion2"/>,
<HandleImages name="recomendacion3"/>,
<HandleImages name="recomendacion4"/>,
<HandleImages name="recomendacion5"/>,
<HandleImages name="recomendacion6"/>,
<HandleImages name="recomendacion7"/>,
<HandleImages name="recomendacion8"/>,
<HandleImages name="recomendacion9"/>,*/
<HandleImages name="amenidadesH1"/>,
<HandleImages name="amenidadesH2"/>,
<HandleImages name="amenidadesH3"/>,
<HandleImages name="amenidadespH1"/>,
<HandleImages name="amenidadespH2"/>,
<HandleImages name="amenidadespH3"/>,

/*
<HandleImages name="map"/>,
<HandleImages name="floorPlan1"/>,
<HandleImages name="floorPlan1h"/>,
<HandleImages name="floorPlan2"/>,
<HandleImages name="floorPlan2h"/>,
<HandleImages name="floorPlan3"/>,
<HandleImages name="floorPlan3h"/>,
<HandleImages name="floorPlan4"/>,
<HandleImages name="floorPlan4h"/>,*/



<HandleImages name="playaH1"/>,
<HandleImages name="playaH2"/>,
<HandleImages name="playaH3"/>,
<HandleImages name="playaH4"/>,

<HandleImages name="resH1"/>,
<HandleImages name="resH2"/>,
<HandleImages name="resH3"/>,

<HandleImages name="beachH1"/>,
<HandleImages name="beachH2"/>,
<HandleImages name="beachH3"/>,
<HandleImages name="beachH4"/>,

<HandleImages name="roofH1"/>,
<HandleImages name="roofH2"/>,
<HandleImages name="roofH3"/>,

<HandleImages name="yogaH1"/>,
<HandleImages name="yogaH2"/>,
<HandleImages name="yogaH3"/>,

<HandleImages name="canchaH1"/>,
<HandleImages name="canchaH2"/>,
<HandleImages name="canchaH3"/>,

<HandleImages name="marketH1"/>,
<HandleImages name="marketH2"/>,
<HandleImages name="marketH3"/>,

<HandleImages name="ludotecaH1"/>,
<HandleImages name="ludotecaH2"/>,
<HandleImages name="ludotecaH3"/>,

<HandleImages name="gymH1"/>,
<HandleImages name="gymH2"/>,
<HandleImages name="gymH3"/>,


<HandleImages name="bikeH1"/>,
<HandleImages name="golfH1"/>,
<HandleImages name="marinaH1"/>,
<HandleImages name="seguridadH1"/>,
<HandleImages name="helipuertoH1"/>,

<HandleImages name="delfinesH1"/>,
<HandleImages name="vecinosH1"/>,
<HandleImages name="spaH1"/>,



<HandleImages name="amenidadesA1"/>,
<HandleImages name="amenidadesA2"/>,
<HandleImages name="amenidadesA3"/>,
<HandleImages name="amenidadesA4"/>,
<HandleImages name="amenidadesA5"/>,
<HandleImages name="amenidadesA6"/>,
<HandleImages name="amenidadesA7"/>,
<HandleImages name="amenidadesA8"/>,
<HandleImages name="amenidadesA9"/>,
<HandleImages name="amenidadesA10"/>,
<HandleImages name="amenidadesA11"/>,


<HandleImages name="amenidadesP1"/>,
<HandleImages name="amenidadesP2"/>,
<HandleImages name="amenidadesP3"/>,
<HandleImages name="amenidadesP4"/>,
<HandleImages name="amenidadesP5"/>,
<HandleImages name="amenidadesP6"/>,
<HandleImages name="amenidadesP7"/>,
<HandleImages name="amenidadesP8"/>,


/*
<HandleImages name="logopm"/>,
<HandleImages name="logopmb"/>,*/

<HandleImages name="residencesGal1"/>,
<HandleImages name="residencesGal2"/>,
<HandleImages name="residencesGal3"/>,


<HandleImages name="playaGal1"/>,
<HandleImages name="playaGal2"/>,
 
<HandleImages name="homeGal1"/>,
<HandleImages name="homeGal2"/>,
<HandleImages name="homeGal3"/>,


<HandleImages name="conocenos1"/>,


<HandleImages name="conocenos2"/>,
<HandleImages name="unaRecamara"/>,
<HandleImages name="unaRecamara1"/>,
<HandleImages name="unaRecamara2"/>,
<HandleImages name="unaRecamara3"/>,
<HandleImages name="unaRecamara4"/>,
<HandleImages name="dosRecamaras"/>,
<HandleImages name="dosRecamaras1"/>,
<HandleImages name="dosRecamaras2"/>,
<HandleImages name="dosRecamaras3"/>,
<HandleImages name="dosRecamaras4"/>,
<HandleImages name="dosRecamaras5"/>,
<HandleImages name="tresRecamaras"/>,
<HandleImages name="tresRecamaras1"/>,
<HandleImages name="tresRecamaras2"/>,
<HandleImages name="tresRecamaras3"/>,
<HandleImages name="tresRecamaras4"/>,
<HandleImages name="tresRecamaras5"/>,
<HandleImages name="tresRecamaras6"/>,



<HandleImages name="cuatroRecamaras"/>,
<HandleImages name="cuatroRecamaras1"/>,
<HandleImages name="cuatroRecamaras2"/>,
<HandleImages name="cuatroRecamaras3"/>,
<HandleImages name="cuatroRecamaras4"/>,
<HandleImages name="cuatroRecamaras5"/>,

]

const Galeria = (props)=>{
return(
    <div className="galeria bg-sand">
    {console.log(props.prev)}
       <div className="prev" onClick={props.handlePrev}>{props.slides[props.prev]}</div>
       <div className="main">{props.slides[props.active]}</div>
       <div className="next" onClick={props.handleNext}>{props.slides[props.next]}</div>
    </div>
)    
}


class Conocenos extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
           prev:bigSlider.length - 1 ,
           active:0,
           next:1
        }



    }



    onSwipeMove=(position, event)=> {

        this.setState({
           
            position:position.x,

        })


        // console.log(`Moved ${position.x} pixels horizontally`, event);
        // console.log(`Moved ${position.y} pixels vertically`, event);
    }

    onSwipeEnd=(event)=> {
        if(this.state.position<0){
           
this.handleNext()
         }
    if(this.state.position>0 ){
        this.handlePrev()
    
    }
    }





    handleNext=()=>{
        if(this.state.active<bigSlider.length-1){
this.setState({
    prev:this.state.active,
    active:this.state.active+1,
    next:this.state.active==bigSlider.length-2?0:this.state.next+1
})
        }
        else{ this.setState({
            prev:bigSlider.length - 1 ,
           active:0,
           next:1
        })}
    }


    handlePrev=()=>{
        if(this.state.active>0){
this.setState({
    prev:this.state.active==1?bigSlider.length-1:this.state.prev-1,
    active:this.state.active-1,
    next:this.state.active
})
        }
        else{ this.setState({
            prev:bigSlider.length - 2 ,
           active:bigSlider.length - 1 ,
           next:0
        })}
    }
   

    render() {

        return (

            <Layout scroll={false}>
                 <Swipe
                onSwipeStart={this.onSwipeStart}
                onSwipeMove={this.onSwipeMove}
                onSwipeEnd={this.onSwipeEnd}>
 <Galeria slides={bigSlider} prev={this.state.prev} active={this.state.active} next={this.state.next} handleNext={this.handleNext} handlePrev={this.handlePrev}/></Swipe>
            </Layout>)
    }



}

export default Conocenos