
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



amenidadespH1:file(relativePath: { eq: "AMENIDADES/PLAYA/HEADER/HEADER-AMENIDADES-PLAYAMUJERES.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

amenidadespH2:file(relativePath: { eq: "AMENIDADES/PLAYA/HEADER/HEADER-AMENIDADES-PLAYAMUJERES-2.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

amenidadespH3:file(relativePath: { eq: "AMENIDADES/PLAYA/HEADER/HEADER-AMENIDADES-PLAYAMUJERES-3.png" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}











playaH1:file(relativePath: { eq: "AMENIDADES/LA AMADA/SLIDERS/PLAYA/HEADER-PLAYA1.jpg"}) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

playaH2:file(relativePath: { eq: "AMENIDADES/LA AMADA/SLIDERS/PLAYA/HEADER-PLAYA2.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
playaH3:file(relativePath: { eq: "AMENIDADES/LA AMADA/SLIDERS/PLAYA/HEADER-PLAYA3.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

playaH4:file(relativePath: { eq: "AMENIDADES/LA AMADA/SLIDERS/PLAYA/BEACHCLUB-2.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}



resH1:file(relativePath: { eq: "AMENIDADES/LA AMADA/SLIDERS/RESTAURANT/RESTAURANTE.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}


resH2:file(relativePath: { eq: "AMENIDADES/LA AMADA/SLIDERS/RESTAURANT/RESTAURANTE-2.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

 
resH3:file(relativePath: { eq: "AMENIDADES/LA AMADA/SLIDERS/RESTAURANT/RESTAURANTE-3.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}


beachH1:file(relativePath: { eq: "AMENIDADES/LA AMADA/SLIDERS/BEACHCLUB/BEACHCLUB-3.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}


beachH2:file(relativePath: { eq:  "AMENIDADES/LA AMADA/SLIDERS/BEACHCLUB/BEACHCLUB-4.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

 
beachH3:file(relativePath: { eq:  "AMENIDADES/LA AMADA/SLIDERS/BEACHCLUB/BEACHCLUB-5.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

beachH4:file(relativePath: { eq:  "AMENIDADES/LA AMADA/SLIDERS/BEACHCLUB/BEACHCLUB-6.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}



roofH1:file(relativePath: { eq:  "AMENIDADES/LA AMADA/SLIDERS/ROOFTOPS-ALBERCAS/ROOFTOP-1.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}


roofH2:file(relativePath: { eq:  "AMENIDADES/LA AMADA/SLIDERS/ROOFTOPS-ALBERCAS/ROOFTOP-2.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
 

roofH3:file(relativePath: { eq:  "AMENIDADES/LA AMADA/SLIDERS/ROOFTOPS-ALBERCAS/ROOFTOP.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
 
yogaH1:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/SALON DE YOGA/YOGA-1.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

yogaH2:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/SALON DE YOGA/YOGA-2.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
 
yogaH3:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/SALON DE YOGA/YOGA-3.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
 

canchaH1:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/CANCHAS/CANCHAS-1.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

canchaH2:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/CANCHAS/CANCHAS-2.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

canchaH3:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/CANCHAS/CANCHAS-3.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}



marketH1:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/MARKET DELI/MARKET-DELI1.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

marketH2:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/MARKET DELI/MARKET-DELI2.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

marketH3:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/MARKET DELI/MARKET-DELI3.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}


ludotecaH1:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/LUDOTECA/LUDOTECA-1.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
ludotecaH2:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/LUDOTECA/LUDOTECA-2.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
ludotecaH3:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/LUDOTECA/KIDSCLUB-3.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}


gymH1:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/GYM/GYM-1.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
gymH2:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/GYM/GYM-3.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
gymH3:file(relativePath: { eq:   "AMENIDADES/LA AMADA/SLIDERS/GYM/GYM-3.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

bikeH1:file(relativePath: { eq:   "AMENIDADES/PLAYA/SLIDERS/CICLOPISTA/HEADER-CICLOPISTA.JPG" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

golfH1:file(relativePath: { eq:   "AMENIDADES/PLAYA/SLIDERS/CAMPO DE GOLF/HEADER-PCAMPO-DE-GOLF.JPG" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

marinaH1:file(relativePath: { eq:   "AMENIDADES/PLAYA/SLIDERS/MARINA/HEADER-MARINA.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}


seguridadH1:file(relativePath: { eq:   "AMENIDADES/PLAYA/SLIDERS/SEGURIDAD/SEGURIDAD.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}

helipuertoH1:file(relativePath: { eq:   "AMENIDADES/PLAYA/SLIDERS/HELIPUERTO/HELIPUERTO.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
delfinesH1:file(relativePath: { eq:   "AMENIDADES/PLAYA/SLIDERS/DELFINARIO/HEADER-DELFINARIO.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
vecinosH1:file(relativePath: { eq:   "AMENIDADES/PLAYA/SLIDERS/VECINOS/HEADER-VECINOS.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
spaH1:file(relativePath: { eq:   "AMENIDADES/PLAYA/SLIDERS/SPA/HEADER-SPA.jpg" }) {
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






amenidadesP1:file(relativePath: { eq: "AMENIDADES/PLAYA/CAMPO-DE-GOLF.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesP2:file(relativePath: { eq: "AMENIDADES/PLAYA/CICLOPISTA.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesP3:file(relativePath: { eq: "AMENIDADES/PLAYA/DELFINARIO.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesP4:file(relativePath: { eq: "AMENIDADES/PLAYA/HELIPUERTO.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesP5:file(relativePath: { eq: "AMENIDADES/PLAYA/MARINA.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesP6:file(relativePath: { eq: "AMENIDADES/PLAYA/SEGURIDAD.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesP7:file(relativePath: { eq: "AMENIDADES/PLAYA/SPA.jpg" }) {
  childImageSharp {

    fluid {
      ...GatsbyImageSharpFluid_withWebp }
  }
}
amenidadesP8:file(relativePath: { eq: "AMENIDADES/PLAYA/VECINOS-GALARDONADOS.jpg" }) {
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

amenidadesH1:<Img alt="Amenidades" fluid={data.amenidadesH1.childImageSharp.fluid} />,
amenidadesH2:<Img alt="Amenidades" fluid={data.amenidadesH2.childImageSharp.fluid} />,
amenidadesH3:<Img alt="Amenidades" fluid={data.amenidadesH3.childImageSharp.fluid} />,

amenidadespH1:<Img alt="Amenidades" fluid={data.amenidadespH1.childImageSharp.fluid} />,
amenidadespH2:<Img alt="Amenidades" fluid={data.amenidadespH2.childImageSharp.fluid} />,
amenidadespH3:<Img alt="Amenidades" fluid={data.amenidadespH3.childImageSharp.fluid} />,



playaH1:<Img alt="Amenidades" fluid={data.playaH1.childImageSharp.fluid} />,
playaH2:<Img alt="Amenidades" fluid={data.playaH2.childImageSharp.fluid} />,
playaH3:<Img alt="Amenidades" fluid={data.playaH3.childImageSharp.fluid} />,
playaH4:<Img alt="Amenidades" fluid={data.playaH4.childImageSharp.fluid} />,

resH1:<Img alt="Amenidades" fluid={data.resH1.childImageSharp.fluid} />,
resH2:<Img alt="Amenidades" fluid={data.resH2.childImageSharp.fluid} />,
resH3:<Img alt="Amenidades" fluid={data.resH3.childImageSharp.fluid} />,

beachH1:<Img alt="Amenidades" fluid={data.beachH1.childImageSharp.fluid} />,
beachH2:<Img alt="Amenidades" fluid={data.beachH2.childImageSharp.fluid} />,
beachH3:<Img alt="Amenidades" fluid={data.beachH3.childImageSharp.fluid} />,
beachH4:<Img alt="Amenidades" fluid={data.beachH4.childImageSharp.fluid} />,

roofH1:<Img alt="Amenidades" fluid={data.roofH1.childImageSharp.fluid} />,
roofH2:<Img alt="Amenidades" fluid={data.roofH2.childImageSharp.fluid} />,
roofH3:<Img alt="Amenidades" fluid={data.roofH3.childImageSharp.fluid} />,

yogaH1:<Img alt="Amenidades" fluid={data.yogaH1.childImageSharp.fluid} />,
yogaH2:<Img alt="Amenidades" fluid={data.yogaH2.childImageSharp.fluid} />,
yogaH3:<Img alt="Amenidades" fluid={data.yogaH3.childImageSharp.fluid} />,

canchaH1:<Img alt="Amenidades" fluid={data.canchaH1.childImageSharp.fluid} />,
canchaH2:<Img alt="Amenidades" fluid={data.canchaH2.childImageSharp.fluid} />,
canchaH3:<Img alt="Amenidades" fluid={data.canchaH3.childImageSharp.fluid} />,

marketH1:<Img alt="Amenidades" fluid={data.marketH1.childImageSharp.fluid} />,
marketH2:<Img alt="Amenidades" fluid={data.marketH2.childImageSharp.fluid} />,
marketH3:<Img alt="Amenidades" fluid={data.marketH3.childImageSharp.fluid} />,
 
ludotecaH1:<Img alt="Amenidades" fluid={data.ludotecaH1.childImageSharp.fluid} />,
ludotecaH2:<Img alt="Amenidades" fluid={data.ludotecaH2.childImageSharp.fluid} />,
ludotecaH3:<Img alt="Amenidades" fluid={data.ludotecaH3.childImageSharp.fluid} />,
 
gymH1:<Img alt="Amenidades" fluid={data.gymH1.childImageSharp.fluid} />,
gymH2:<Img alt="Amenidades" fluid={data.gymH2.childImageSharp.fluid} />,
gymH3:<Img alt="Amenidades" fluid={data.gymH3.childImageSharp.fluid} />,


 bikeH1:<Img alt="Amenidades" fluid={data.bikeH1.childImageSharp.fluid} />,
 golfH1:<Img alt="Amenidades" fluid={data.golfH1.childImageSharp.fluid} />,
 marinaH1:<Img alt="Amenidades" fluid={data.marinaH1.childImageSharp.fluid} />,
 seguridadH1:<Img alt="Amenidades" fluid={data.seguridadH1.childImageSharp.fluid} />,
helipuertoH1:<Img alt="Amenidades" fluid={data.helipuertoH1.childImageSharp.fluid} />,

delfinesH1:<Img alt="Amenidades" fluid={data.delfinesH1.childImageSharp.fluid} />,
vecinosH1:<Img alt="Amenidades" fluid={data.vecinosH1.childImageSharp.fluid} />,
spaH1:<Img alt="Amenidades" fluid={data.spaH1.childImageSharp.fluid} />,



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


    amenidadesP1:<Img alt="Amenidades" fluid={data.amenidadesP1.childImageSharp.fluid} />,
    amenidadesP2:<Img alt="Amenidades" fluid={data.amenidadesP2.childImageSharp.fluid} />,
    amenidadesP3:<Img alt="Amenidades" fluid={data.amenidadesP3.childImageSharp.fluid} />,
    amenidadesP4:<Img alt="Amenidades" fluid={data.amenidadesP4.childImageSharp.fluid} />,
    amenidadesP5:<Img alt="Amenidades" fluid={data.amenidadesP5.childImageSharp.fluid} />,
    amenidadesP6:<Img alt="Amenidades" fluid={data.amenidadesP6.childImageSharp.fluid} />,
    amenidadesP7:<Img alt="Amenidades" fluid={data.amenidadesP7.childImageSharp.fluid} />,
    amenidadesP8:<Img alt="Amenidades" fluid={data.amenidadesP8.childImageSharp.fluid} />,


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
 