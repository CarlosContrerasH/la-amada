import React from 'react'
import { Link } from 'gatsby'

import pin from "../img/location-pin.svg"
import phone from "../img/phone.svg"
import mail from "../img/mail.svg"
import social from "../img/social.svg"

const Footer = class extends React.Component {
  render() {
    return (
      <footer >

        <div>
          <div >
            <span className="row">  <img
              src={pin}
              alt="Location"
              style={{ width: '2em', height: '2em' }}
              
            /> Paseo Mujeres SM 3 Mza. 1 Lote 10.  <br/>   C.P. 77400 Cancún  <br/>           Quintana Roo, México.</span>
          </div>
          <div >
            <a title="llamada" href="tel:998 313 3667">
              <span className="row">       <img
                src={phone}
                alt="Phone"
                style={{ width: '2em', height: '2em' }}
              />998 313 3667</span>
            </a>

            <a title="ventas" href="mailto:ventas@laamada.com">
              <span className="row">  <img
                src={mail}
                alt="Mail"
                style={{ width: '2em', height: '2em' }}
              />ventas@laamada.com </span>
            </a>

            <span >
              <span className="row">  <img
                src={social}
                alt="Social Media"
                style={{ width: '2em', height: '2em' }}
              />@laamada_residences</span>
            </span>
          </div>
          <div >
            <ul className="menu-list">
            <li>   <Link to="/amenidades">{this.props.eng ?"Amenities":"AMENIDADES"} </Link></li>
             <li> <Link to="/residencias">{this.props.eng ?"Residences ":"RESIDENCIAS"} </Link></li>
             <li> <Link to="/ubicacion">{this.props.eng ?"Location":"UBICACIÓN"} </Link></li>
             <li> <Link to="/galeria">{this.props.eng ?"Gallery":"Galeria"} </Link></li>
             <li> <Link to="/conocenos">{this.props.eng ?"Our Team":"Conócenos"} </Link></li>
             <li> <Link to="/invierte"> {this.props.eng ?"Investment":"inversión"} </Link></li>
             <li> <Link to="/blog"> EDITORIAL </Link></li>
            </ul>
          </div>

        </div>
        <div className="last" >
          <span> LA AMADA RESIDENCES {new Date().getFullYear()}, <a href="#">AVISO DE PRIVACIDAD</a></span>
        </div>
      </footer>
    )
  }
}

export default Footer
