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
import Scroll from "./scroll"
import Seo from "./seo" 

const Layout = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eng: false

    }
    
  }

  handleLanguageChange=()=> {
    this.setState({
      eng: !this.state.eng
    }, () => {
      // Save data to sessionStorage
     sessionStorage.setItem('eng', this.state.eng.toString);
    })
  }

  componentDidMount(){
   
    
    // Get saved data from sessionStorage
    let data = sessionStorage.getItem('eng');
  
    console.log("lay!!!!!",sessionStorage)

    if (data) {
      this.setState({
        eng: data=="true"?true:false
      }, () => {
        // Save data to sessionStorage
        sessionStorage.setItem('eng', data);
        
      })
    }
    else{
      sessionStorage.setItem('eng', false);
    }





  }


  render() {

    let elements = React.Children.toArray(this.props.children);

    var temp = [];
    for (var i = 0; i < elements.length; i++) {
      temp[i] = React.cloneElement(elements[i], { eng: this.state.eng })
    }


    return (
      <div>
<Seo title={this.props.title} description={this.props.description}/>
        <Navbar langToggle={this.handleLanguageChange} eng={this.state.eng} />
       { this.props.scroll==false?"":<Scroll/>}
  
        {temp}
       
        <Form eng={this.state.eng}/>
        <Footer />
      </div>
    )
  }
}

export default Layout