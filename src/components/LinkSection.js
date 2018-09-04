import React, { Component } from 'react';
import '../styles/LinkSection.css';
import Github from '../resources/github-logo.svg';
import CvIcon from '../resources/cv-icon.png';
import Instagram from '../resources/instagram-logo.png';
import Linkedin from '../resources/Linkedin-icon.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class LinkSection extends Component {
  render() {
    return (
      <div className="link-section-container">
        <table className="link-section-table">
            <tr>
                <td><a href="../resources/zacharybys_cv.pdf" target="_blank"><img src={CvIcon} className="link-section-icon"/></a></td>
                <td><a href="https://github.com/zacharybys" target="_blank"><img src={Github} className="link-section-icon"/></a></td>
                <td><a href="https://linkedin.com/in/zacharybys" target="_blank"><img src={Linkedin} className="link-section-icon"/></a></td>
                <td><a href="https://www.instagram.com/biggbys/" target="_blank"><img src={Instagram} className="link-section-icon"/></a></td>
            </tr>
        </table>
        <div className="link-section-navbar">
          <p><AnchorLink offset="50" href="#link-projects">Projects</AnchorLink> • <AnchorLink offset="50" href="#link-timeline">Experience</AnchorLink></p>
        </div>
      </div>
    );
  }
}

export default LinkSection;
