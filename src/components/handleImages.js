
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

depas:file(relativePath: { eq: "FOTO-HEADER-HOME.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

amenidadesH1:file(relativePath: { eq: "AMENIDADES/LA AMADA/AMENIDADES-HEADER-1.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesH2:file(relativePath: { eq: "AMENIDADES/LA AMADA/AMENIDADES-HEADER-2.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesH3:file(relativePath: { eq: "AMENIDADES/LA AMADA/AMENIDADES-HEADER-3.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}


amenidadesA1:file(relativePath: { eq: "AMENIDADES/LA AMADA/AREAS-VERDES.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

amenidadesA2:file(relativePath: { eq: "AMENIDADES/LA AMADA/BEACHCLUB-RESTAURANT.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA3:file(relativePath: { eq: "AMENIDADES/LA AMADA/BEACHCLUB.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA4:file(relativePath: { eq: "AMENIDADES/LA AMADA/CANCHAS.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA5:file(relativePath: { eq: "AMENIDADES/LA AMADA/GYM.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA6:file(relativePath: { eq: "AMENIDADES/LA AMADA/LOBBY.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA7:file(relativePath: { eq: "AMENIDADES/LA AMADA/ludoteca.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA8:file(relativePath: { eq: "AMENIDADES/LA AMADA/MARKET-DELI.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA9:file(relativePath: { eq: "AMENIDADES/LA AMADA/PLAYA.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA10:file(relativePath: { eq: "AMENIDADES/LA AMADA/ROOFTOPS-ALBERCAS.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA11:file(relativePath: { eq: "AMENIDADES/LA AMADA/SALON-DE-YOGA.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

amenidadesA1Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/AREAS-VERDES-ICON.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

amenidadesA3Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/BEACHCLUB-REST-ICON.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA2Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/BEACHCLUB-ICON.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA4Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/CANCHAS-ICON.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA5Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/GYM-ICON.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA6Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/LOBBY-CONCIERGE-MOTTORLOBBY-ICON.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA7Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/LUDOTECA-ICON.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA8Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/MARKET-DELI-ICONO.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA9Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/icono-playa.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA10Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/ROOFTOPS-ALBERCAS-ICON.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesA11Icon:file(relativePath: { eq: "AMENIDADES/LA AMADA/ICONOS/SALON-DE-YOGA-ICON.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}







playa:file(relativePath: { eq: "AMENIDADES/HEADER-AMENIDADES.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}


tenis:file(relativePath: { eq: "AMENIDADES/LA.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}


bicis:file(relativePath: { eq: "AMENIDADES/PM.jpg" }) {
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
     
    playa: <Img alt="La Amada" fluid={data.playa.childImageSharp.fluid} />,
       
    depas: <Img alt="La Amada" fluid={data.depas.childImageSharp.fluid} />,
    tenis: <Img alt="Tenis" fluid={data.tenis.childImageSharp.fluid} />,
    bicis: <Img alt="Bicicletas" fluid={data.bicis.childImageSharp.fluid} />,

amenidadesH1:<Img alt="Amenidades" fluid={data.amenidadesA1.childImageSharp.fluid} />,
amenidadesH2:<Img alt="Amenidades" fluid={data.amenidadesA2.childImageSharp.fluid} />,
amenidadesH3:<Img alt="Amenidades" fluid={data.amenidadesA3.childImageSharp.fluid} />,

    amenidadesA1:<Img alt="Amenidades" fluid={data.amenidadesA1.childImageSharp.fluid} />,
    amenidadesA2:<Img alt="Amenidades" fluid={data.amenidadesA2.childImageSharp.fluid} />,
    amenidadesA3:<Img alt="Amenidades" fluid={data.amenidadesA3.childImageSharp.fluid} />,
    amenidadesA4:<Img alt="Amenidades" fluid={data.amenidadesA4.childImageSharp.fluid} />,
    amenidadesA5:<Img alt="Amenidades" fluid={data.amenidadesA5.childImageSharp.fluid} />,
    amenidadesA6:<Img alt="Amenidades" fluid={data.amenidadesA6.childImageSharp.fluid} />,
    amenidadesA7:<Img alt="Amenidades" fluid={data.amenidadesA7.childImageSharp.fluid} />,
    amenidadesA8:<Img alt="Amenidades" fluid={data.amenidadesA8.childImageSharp.fluid} />,
    amenidadesA9:<Img alt="Amenidades" fluid={data.amenidadesA9.childImageSharp.fluid} />,
    amenidadesA10:<Img alt="Amenidades" fluid={data.amenidadesA10.childImageSharp.fluid} />,
    amenidadesA11:<Img alt="Amenidades" fluid={data.amenidadesA11.childImageSharp.fluid} />,

amenidadesA1Icon:<Img alt="Amenidades" fluid={data.amenidadesA1Icon.childImageSharp.fluid} />,
amenidadesA2Icon:<Img alt="Amenidades" fluid={data.amenidadesA2Icon.childImageSharp.fluid} />,
amenidadesA3Icon:<Img alt="Amenidades" fluid={data.amenidadesA3Icon.childImageSharp.fluid} />,
amenidadesA4Icon:<Img alt="Amenidades" fluid={data.amenidadesA4Icon.childImageSharp.fluid} />,
amenidadesA5Icon:<Img alt="Amenidades" fluid={data.amenidadesA5Icon.childImageSharp.fluid} />,
amenidadesA6Icon:<Img alt="Amenidades" fluid={data.amenidadesA6Icon.childImageSharp.fluid} />,
amenidadesA7Icon:<Img alt="Amenidades" fluid={data.amenidadesA7Icon.childImageSharp.fluid} />,
amenidadesA8Icon:<Img alt="Amenidades" fluid={data.amenidadesA8Icon.childImageSharp.fluid} />,
amenidadesA9Icon:<Img alt="Amenidades" fluid={data.amenidadesA9Icon.childImageSharp.fluid} />,
amenidadesA10Icon:<Img alt="Amenidades" fluid={data.amenidadesA10Icon.childImageSharp.fluid} />,
amenidadesA11Icon:<Img alt="Amenidades" fluid={data.amenidadesA11Icon.childImageSharp.fluid} />,
        

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
 