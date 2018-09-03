import React, { Component } from 'react';
import '../styles/FrontPage.css';
import IntroSection from './IntroSection';
import Timeline from './Timeline';
import LinkSection from './LinkSection';
import ProjectList from './ProjectList';

class FrontPage extends Component {
  render() {
    return (
      <div className="frontpage-background">
        <IntroSection/>
        <LinkSection/>
        <Timeline/>
        <ProjectList/>
        <br/><br/>
        <br/><br/>
      </div>
    );
  }
}

export default FrontPage;
