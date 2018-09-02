import React, { Component } from 'react';
import '../styles/LinkSection.css';
import Github from '../resources/github-logo.svg';
import CvIcon from '../resources/cv-icon.png';
import Instagram from '../resources/instagram-logo.png';

class LinkSection extends Component {
  render() {
    return (
      <div className="link-section-container">
        <table className="link-section-table">
            <tr>
                <td><img src={Github} className="link-section-icon"/></td>
                <td><img src={CvIcon} className="link-section-icon"/></td>
                <td><img src={Instagram} className="link-section-icon"/></td>
            </tr>
        </table>
      </div>
    );
  }
}

export default LinkSection;
