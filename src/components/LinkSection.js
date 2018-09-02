import React, { Component } from 'react';
import '../styles/LinkSection.css';
import Github from '../resources/github-logo.svg';
import CvIcon from '../resources/cv-icon.png';
import Instagram from '../resources/instagram-logo.png';
import Linkedin from '../resources/Linkedin-icon.png';

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
      </div>
    );
  }
}

export default LinkSection;
