import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import './style.css'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

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
    return (
    <div>
    
      <Navbar langToggle={this.handleLanguageChange} eng={this.state.eng}/>
      <div>{this.props.children}</div>
      <Footer />
    </div>
  )
}
}

export default Layout