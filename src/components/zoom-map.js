import React from 'react'

import ReactImageZoom from "react-image-zoom";
import {mapa} from '../img/UBICACION/MAPA.jpg'

const props = {
  
  img: '/img/MAPA.jpg',
  width: 500,  zoomWidth: 500,
}
 
 

const Footer = class extends React.Component {
  render() {
    return (
        <ReactImageZoom {...props} />
    )
  }
}

export default Footer
