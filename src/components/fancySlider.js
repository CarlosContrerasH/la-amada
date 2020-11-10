import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import { HandleImages } from "../components/handleImages"
import Swipe from 'react-easy-swipe';

import ScrollWrapper from "../components/scrollwrapper"
import pin from "../img/location-pin.svg"
import Logo from "./logo"
const SimpleSlider = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            position:0,
            prevpos:0

        }
        this.onSwipeMove = this.onSwipeMove.bind(this);
        this.onSwipeEnd = this.onSwipeEnd.bind(this)
    }


    handleIncrease() {
        this.setState({
            active: this.state.active + 1
        })
    }
    handleDecrease() {
        this.setState({
            active: this.state.active - 1
        })
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
           
            position:position.x,

        })


        // console.log(`Moved ${position.x} pixels horizontally`, event);
        // console.log(`Moved ${position.y} pixels vertically`, event);
    }

    onSwipeEnd(event) {
        if(this.state.position<0&&this.state.active<this.props.slides.length-1){
            this.handleIncrease();
            
            this.setState({
                position:0
            })

         }
    if(this.state.position>0 && this.state.active >0){
        this.handleDecrease();
      
        this.setState({
            position:0
        })
    
    }
    }

    render() {
        return (
            <Swipe
                onSwipeStart={this.onSwipeStart}
                onSwipeMove={this.onSwipeMove}
                onSwipeEnd={this.onSwipeEnd}>
                <div className="fancy-wrapper">

                    {this.props.slides.map((slide, index) => {

                    return <ScrollWrapper><div key={index} className="fancy-slide" id={index == this.state.active ? "active" : ""}>{slide}<h3 className="fancy-title"> {this.props.titles[index]}</h3></div></ScrollWrapper>;
                    })}



                 

                </div>  </Swipe>
        )
    }
}

export default SimpleSlider

