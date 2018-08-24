import React, { Component } from 'react';
import '../styles/FrontPage.css';
import IntroSection from './IntroSection';

class FrontPage extends Component {
  render() {
    return (
      <div className="frontpage-background">
        <IntroSection/>
      </div>
    );
  }
}

export default FrontPage;
