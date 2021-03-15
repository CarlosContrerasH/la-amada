import React from 'react'


import Layout from '../components/Layout'
import BlogRoll from "../components/BlogRoll"



  const Tester = (props) =>{
    return(  <div className="residencias-buttons-wrapper bg-sand">
      {props.eng?"eng":"span"}
      
      </div>)
  }

class Test extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
     
        }


    }


 componentDidMount(){
    console.log("test")
 }


    render() {

        return (

            <Layout>

<div className="bg-sand editorial">
<h1>Editorial</h1>
<BlogRoll />
</div>

                

            </Layout>)
    }



}

export default Test