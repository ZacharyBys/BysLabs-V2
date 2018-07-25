import React, { Component } from 'react';
import '../styles/NavBar.css';
import Logo from '../resources/byslabs.png';
import Github from '../resources/github-logo.svg';
import Instagram from '../resources/instagram-logo.png';

class NavBar extends Component {
  render() {
    return (
        <div className="navbar-container">
            <img src={Logo} alt="Z" className="navbar-logo"/>
            <div className="navbar-about">
                about
            </div>
            <div className="navbar-experience">
                experience
            </div>
            <div className="navbar-projects">
                projects
            </div>
            <img src={Github} alt="G" className="navbar-github"/>
            <img src={Instagram} alt="I" className="navbar-instagram"/>
        </div>
    );
  }
}

export default NavBar;