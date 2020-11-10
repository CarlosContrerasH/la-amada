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
       
    }

    handlePrev() {
        var temp = parseInt(document.getElementsByClassName('in-screen')[0].id,10);
         
        var element = document.getElementById((temp-1).toString())
        console.log(temp,element)
       if(element){ element.scrollIntoView({behavior: "smooth", block: "end"})
     }
     }
  
    handleNext() {
       var temp = parseInt(document.getElementsByClassName('in-screen')[0].id,10);
        
       var element = document.getElementById((temp+1).toString())
       console.log(temp, element)

      if(element){ element.scrollIntoView({behavior: "smooth"})
    }
    }
 

 

    render() {
        return (
            <>
            <button className='prev' onClick={()=>{this.handlePrev()}}>prev</button>   <button className='next' onClick={()=>{this.handleNext()}}>next</button>   
                <div className="fancy-wrapper">

                    {this.props.slides.map((slide, index) => {

                    return <ScrollWrapper id={index}><div key={index} className="fancy-slide"  >{slide}<h3 className="fancy-title"> {this.props.titles[index]}</h3>    <button className="flat-button sand-button centered-button"  >Ver Mas</button></div></ScrollWrapper>;
                    })}



                 

                </div>   </>
        )
    }
}

export default SimpleSlider

