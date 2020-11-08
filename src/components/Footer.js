import React from 'react'
import { Link } from 'gatsby'

import pin from "../img/location-pin.svg"
import phone from "../img/phone.svg"
import mail from "../img/mail.svg"
import social from "../img/social.svg"

const Footer = class extends React.Component {
  render() {
    return (
      <footer  >

        <div>
          <div >
            <span className="row">  <img
              src={pin}
              alt="Location"
              style={{ width: '2em', height: '2em' }}
            /> CALLE VIALIDAD, ISLA MUJERES MZA. 1, 1
77400 CANCÚN, QUINTANA ROO.
MÉXICO</span>
          </div>
          <div >
            <a title="facebook" href="https://facebook.com">
              <span className="row">       <img
                src={phone}
                alt="Phone"
                style={{ width: '2em', height: '2em' }}
              />998 313 3667</span>
            </a>

            <a title="instagram" href="https://instagram.com">
              <span className="row">  <img
                src={mail}
                alt="Mail"
                style={{ width: '2em', height: '2em' }}
              />ventas@laamada.com </span>
            </a>

            <a title="instagram" href="https://instagram.com">
              <span className="row">  <img
                src={social}
                alt="Social Media"
                style={{ width: '2em', height: '2em' }}
              />@laamada_residences</span>
            </a>
          </div>
          <div >
            <ul className="menu-list">
              <li>
                <Link to="/" className="navbar-item">
                  Home
                      </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/about">
                  About
                      </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/products">
                  Products
                      </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/contact/examples">
                  Form Examples
                      </Link>
              </li>
              <li>
                <a
                  className="navbar-item"
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admin
                      </a>
              </li>
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
