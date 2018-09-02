import React, { Component } from 'react';
import '../styles/FrontPage.css';
import IntroSection from './IntroSection';
import Timeline from './Timeline';
import LinkSection from './LinkSection';

class FrontPage extends Component {
  render() {
    return (
      <div className="frontpage-background">
        <IntroSection/>
        <LinkSection/>
        <Timeline/>
      </div>
    );
  }
}

export default FrontPage;
