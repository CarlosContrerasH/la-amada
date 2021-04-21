import React from 'react'


import Layout from '../components/Layout'
import BlogRoll from "../components/BlogRoll"

 

  const Wrapper = (props) =>{
  
    return(  

  
      <div className="bg-sand editorial">
      <h1>Editorial</h1>
      <BlogRoll />
     
      </div>
      
      
    )
  }




class Test extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
     
        }


    }


 

    render() {

        return (

            <Layout>
            
 <Wrapper/>

                

            </Layout>)
    }



}

export default Test