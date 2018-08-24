import React, { Component } from 'react';
import '../styles/Timeline.css';
import Concordia from '../resources/Concordia.png';
import Eidos from '../resources/Eidos-Montreal.png';
import Coveo from '../resources/Coveo.png';
import HackConcordia from '../resources/HackConcordia.png';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-container">
        <table className="timeline-table">
            <tr>
                <td> </td>
                <td><img src={Concordia}/></td>
                <td><div className="timeline-connector"/></td>
                <td><img src={Eidos}/></td>
                <td><div className="timeline-connector"/></td>
                <td><img src={Coveo}/></td>
                <td><div className="timeline-connector"/></td>
                <td><img src={HackConcordia}/></td>
                <td> </td>
            </tr>
        </table>
      </div>
    );
  }
}

export default Timeline;