import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

import {HandleImages} from "../components/handleImages"
 
import pin from "../img/location-pin.svg"
import Logo from "./logo"
const SimpleSlider = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
       
    }
  }

 handleButtonClick(e){
this.setState({
    active:e
})
 }

  render() {
    return (
     
<div className="slides-wrapper">

{this.props.slides.map((slide, index)=> {
  
	return <div key={ index} className="slide" id={index==this.state.active?"active":""}>{slide}</div>;
})}



<div className="slider-buttons">
{this.props.slides.map((slide,index)=> {
      console.log(index)
	return <button  key={ index}  onClick={(event)=>{this.handleButtonClick(event.target.id)}} id={index} className={index==this.state.active?"active":""}></button>;
})}
</div>

</div>
    )
  }
}

export default SimpleSlider

 