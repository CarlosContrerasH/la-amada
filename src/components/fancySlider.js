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
            position: 0,
            prevpos: 0

        }
this.handleScroll = this.handleScroll.bind(this);
    }

    handlePrev() {
        var temp = parseInt(document.getElementsByClassName('in-screen')[0].id, 10);

        var element = document.getElementById((temp - 1).toString())
   
        
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "end" });
            this.setState({
                active:temp-1
            })
        }
        console.log(this.state.active)
    }

    handleNext() {
        var temp = parseInt(document.getElementsByClassName('in-screen')[0].id, 10);

        var element = document.getElementById((temp + 1).toString())

   
    

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            this.setState({
                active:temp+1
            })
        }
        console.log(this.state.active)
    }


    handleScroll(){
var temp =0;
        if(document.getElementsByClassName('in-screen')[0]){
           temp = parseInt(document.getElementsByClassName('in-screen')[0].id, 10);
           
        }

        this.setState(
            { active:temp},()=>{console.log("scroll",this.state.active)}
         )
       
    }
componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}
componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
}

    render() {
        return (
            <>
                <button  className='prev' onClick={() => { this.handlePrev() }}>prev</button>   <button   className='next' onClick={() => { this.handleNext() }}>next</button>
                <div className="fancy-wrapper">

                    {this.props.slides.map((slide, index) => {

                        return <ScrollWrapper id={index}><div key={index} className="fancy-slide"  >{slide}<h3 className="fancy-title"> {this.props.titles[index]}</h3>  </div>
                        
                        
                        <button className="flat-button sand-button centered-button"  >Ver Mas</button></ScrollWrapper>;
                    })}





                </div>   </>
        )
    }
}

export default SimpleSlider

