import React, { Component } from 'react';
import '../styles/IntroSection.css';
import profilephoto from '../resources/profilephoto.png';

class IntroSection extends Component {
  render() {
    return (
      <div className="intro-section-container">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        <div className="profile-photo-container">
            <img src={profilephoto} className="profile-photo"/>
        </div>
        <div className="intro-text-container">
            <h1 className="intro-title">Zachary Bys<span className="intro-highlight">.</span></h1>
            <div className="intro-line"></div>
            <h2 className="intro-subtext">Student Developer</h2>
            <h2 className="intro-subtext">Hackathon Enthusiast</h2>
        </div>
      </div>
    );
  }
}

export default IntroSection;