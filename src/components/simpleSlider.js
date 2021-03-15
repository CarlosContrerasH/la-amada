import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import { HandleImages } from "../components/handleImages"
import Swipe from 'react-easy-swipe';

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
                <div className="slides-wrapper">

                    {this.props.slides.map((slide, index) => {

                        return <div key={"b"+index} className="slide" id={index == this.state.active ? "active" : ""}>{slide}</div>;
                    })}



                    <div className="slider-buttons">
                        {this.props.slides.map((slide, index) => {
                           
                            return <button key={"a"+index} onClick={(event) => { this.handleButtonClick(event.target.id) }} id={index} className={index == this.state.active ? "active" : ""}></button>;
                        })}
                    </div>

                </div>  </Swipe>
        )
    }
}

export default SimpleSlider

