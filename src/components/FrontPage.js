import React, { Component } from 'react';
import '../styles/FrontPage.css';
import IntroSection from './IntroSection';
import Timeline from './Timeline';

class FrontPage extends Component {
  render() {
    return (
      <div className="frontpage-background">
        <IntroSection/>
        <Timeline/>
      </div>
    );
  }
}

export default FrontPage;
