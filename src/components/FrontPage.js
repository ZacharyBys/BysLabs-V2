import React, { Component } from 'react';
import '../styles/FrontPage.css';
import NavBar from './NavBar';

class FrontPage extends Component {
  render() {
    return (
      <div className="frontpage-background">
        <NavBar/>
      </div>
    );
  }
}

export default FrontPage;
