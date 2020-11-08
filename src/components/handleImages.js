
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

export function HandleImages(name){

  const data = useStaticQuery(graphql`
  query {
 
beach: file(relativePath: { eq: "beach.jpeg" }) {
    childImageSharp {
  
      fluid {
        ...GatsbyImageSharpFluid_withWebp }
    }
  }
  }`)


   
  const images = {



    
    beach: <Img alt="Badge" fluid={data.beach.childImageSharp.fluid} />,
    beach2: <Img alt="Badge" fluid={data.beach.childImageSharp.fluid} />}


    return images[name.name]
}
 