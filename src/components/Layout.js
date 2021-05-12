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
    

    }
    
  }

  handleLanguageChange=()=> {
    this.setState({
      eng: !this.state.eng
    },()=> {console.log(this.state.eng);localStorage.setItem('eng', this.state.eng)})
  }

  componentDidMount(){


    if(window.localStorage.eng===undefined){
      console.log('if')
     
      this.setState({
        eng: (window.localStorage.eng == 'true')
      },()=> {localStorage.setItem('eng', this.state.eng);console.log('if',this.state.eng,window.localStorage.eng)})

    }
    else{

    
      this.setState({eng: (window.localStorage.eng == 'true')},()=>  console.log('else',this.state.eng,window.localStorage.eng))
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
        <Footer eng={this.state.eng}/>
      </div>
    )
  }
}

export default Layout