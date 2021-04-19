import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import { HandleImages } from "../components/handleImages"
import Swipe from 'react-easy-swipe';

import { useScrollPercentage } from 'react-scroll-percentage'

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
        var temp = document.getElementsByClassName('in-screen')[0]?parseInt(document.getElementsByClassName('in-screen')[0].id, 10):undefined;


        if (temp !==undefined){
        var element = document.getElementById((temp - 1).toString())
   
        
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "end" });
            this.setState({
                active:temp-1
            })
        }
    }
    }

    handleNext() {
        var temp = document.getElementsByClassName('in-screen')[0]?parseInt(document.getElementsByClassName('in-screen')[0].id, 10):undefined;


if (temp  !==undefined){
        var element = document.getElementById((temp + 1).toString())

   
    

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            this.setState({
                active:temp+1
            })
        }
         
}


    }


    handleScroll(){
var temp =0;
        if(document.getElementsByClassName('in-screen')[0]){
           temp = parseInt(document.getElementsByClassName('in-screen')[0].id, 10);
           
        }

        this.setState(
            { active:temp}
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

                        return <ScrollWrapper id={index} key={index}  > <div  className="fancy-slide"  >   <Link style={{textDecoration:"none"}} to={this.props.links[index]}> {slide}<h3 className="fancy-title"> {this.props.titles[index]}</h3> </Link> </div>
                        
                        
                       <Link style={{textDecoration:"none"}} to={this.props.links[index]}> <button className="flat-button sand-button centered-button mas"  >{this.props.eng==true?"View":"Ver Mas"}</button></Link></ScrollWrapper>;
                    })}





                </div>   </>
        )
    }
}

export default SimpleSlider

