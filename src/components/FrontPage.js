import React, { Component } from 'react';
import '../styles/FrontPage.css';
import IntroSection from './IntroSection';
import Timeline from './Timeline';
import LinkSection from './LinkSection';
import Project from './Project';

class FrontPage extends Component {
  render() {
    return (
      <div className="frontpage-background">
        <IntroSection/>
        <LinkSection/>
        <Timeline/>
        <Project title="New Project" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
        <br/><br/>
        <br/><br/>
      </div>
    );
  }
}

export default FrontPage;
