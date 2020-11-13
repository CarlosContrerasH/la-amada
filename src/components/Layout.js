import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import './style.css'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { element } from 'prop-types'
import Form from "./contact-form"
const Layout = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    eng:false
      
    }
    this.handleLanguageChange=this.handleLanguageChange.bind(this)
  }

  handleLanguageChange(){
    this.setState({
      eng:!this.state.eng
    },()=>{
      console.log(this.state.eng)
    })
  }


  render() {

    let elements = React.Children.toArray(this.props.children);
   
var temp =[];
    for(var i =0;i<elements.length;i++){
      temp[i]=React.cloneElement(elements[i], { eng: this.state.eng })
    }

    console.log(temp)
    return (
    <div>
    
      <Navbar langToggle={this.handleLanguageChange} eng={this.state.eng}/>
      <div>{temp}</div>
      <Form/>
      <Footer />
    </div>
  )
}
}

export default Layout