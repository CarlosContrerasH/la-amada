
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


  logopm: file(relativePath: { eq: "logo-playa-muejeres.png" }) {
    childImageSharp {
  
      fluid {
        ...GatsbyImageSharpFluid_withWebp }
    }
  }

 

  playaGal1: file(relativePath: { eq: "SLIDER PLAYA MUJERES/PLAYAMUJERES-1.png" }) {
    childImageSharp {
  
      fluid {
        ...GatsbyImageSharpFluid_withWebp }
    }
  }
 
  playaGal2: file(relativePath: { eq: "SLIDER PLAYA MUJERES/PLAYAMUJERES-2.png" }) {
    childImageSharp {
  
      fluid {
        ...GatsbyImageSharpFluid_withWebp }
    }
  }
 

 

  residencesGal1: file(relativePath: { eq: "SLIDER BANNER RESIDENCES/DOS-RECAMARAS.jpg" }) {
    childImageSharp {
  
      fluid {
        ...GatsbyImageSharpFluid_withWebp }
    }
  }


  residencesGal2: file(relativePath: { eq: "SLIDER BANNER RESIDENCES/TRES-RECAMARAS.jpg" }) {
    childImageSharp {
  
      fluid {
        ...GatsbyImageSharpFluid_withWebp }
    }
  }



  residencesGal3: file(relativePath: { eq: "SLIDER BANNER RESIDENCES/CUATRO-RECAMARAS.jpg" }) {
    childImageSharp {
  
      fluid {
        ...GatsbyImageSharpFluid_withWebp }
    }
  }






 
  homeGal1: file(relativePath: { eq: "SLIDER GALERIA/GALERIA-1.png" }) {
    childImageSharp {
  
      fluid {
        ...GatsbyImageSharpFluid_withWebp }
    }
  }

   
  homeGal2: file(relativePath: { eq: "SLIDER GALERIA/GALERIA-2.png" }) {
    childImageSharp {
  
      fluid {
        ...GatsbyImageSharpFluid_withWebp }
    }
  }

   
  homeGal3: file(relativePath: { eq: "SLIDER GALERIA/GALERIA-3.png" }) {
    childImageSharp {
  
      fluid {
        ...GatsbyImageSharpFluid_withWebp }
    }
  }



  }`)


   
  const images = {



    
    beach: <Img alt="Badge" fluid={data.beach.childImageSharp.fluid} />,

    logopm: <Img alt="Playa Mujeres" fluid={data.logopm.childImageSharp.fluid} />,

    residencesGal1: <Img alt="Dos Cuartos" fluid={data.residencesGal1.childImageSharp.fluid} />,
    residencesGal2: <Img alt="Dos Cuartos" fluid={data.residencesGal2.childImageSharp.fluid} />,
       residencesGal3: <Img alt="Dos Cuartos" fluid={data.residencesGal3.childImageSharp.fluid} />,
    

    playaGal1: <Img alt="Pool" fluid={data.playaGal1.childImageSharp.fluid} />,
    playaGal2: <Img alt="Pool" fluid={data.playaGal2.childImageSharp.fluid} />,
     
    homeGal1: <Img alt="Pool" fluid={data.homeGal1.childImageSharp.fluid} />,
    homeGal2: <Img alt="Badge" fluid={data.homeGal2.childImageSharp.fluid} />,
    homeGal3: <Img alt="Badge" fluid={data.homeGal3.childImageSharp.fluid} />
  
  
  }


    return images[name.name]
}
 