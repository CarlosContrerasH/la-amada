import React from 'react'


import Layout from '../components/Layout'


import Swipe from 'react-easy-swipe';
import { HandleImages } from "../components/handleImages"


let bigSlider =[ <HandleImages name="unaRecamara1"/>, <HandleImages name="unaRecamara2"/>, <HandleImages name="unaRecamara3"/>, <HandleImages name="unaRecamara4"/>]

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

            <Layout>
                 <Swipe
                onSwipeStart={this.onSwipeStart}
                onSwipeMove={this.onSwipeMove}
                onSwipeEnd={this.onSwipeEnd}>
 <Galeria slides={bigSlider} prev={this.state.prev} active={this.state.active} next={this.state.next} handleNext={this.handleNext} handlePrev={this.handlePrev}/></Swipe>
            </Layout>)
    }



}

export default Conocenos