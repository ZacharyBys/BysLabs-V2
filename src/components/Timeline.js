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
            <tr className="timeline-arrow-row">
                <td> </td>
                <td> </td>
                <td><div className="timeline-info-up"/></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><div className="timeline-info-up"/></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
            </tr>
            <tr>
                <td className="timeline-image-container"><div className="timeline-point-left"/></td>
                <td className="timeline-image-container"><div className="timeline-point-connector-left"/></td>
                <td className="timeline-image-container"><img src={Concordia} className="timeline-image"/></td>
                <td className="connector"><div className="timeline-connector"/></td>
                <td className="timeline-image-container"><img src={Eidos} className="timeline-image"/></td>
                <td className="connector"><div className="timeline-connector"/></td>
                <td className="timeline-image-container"><img src={Coveo} className="timeline-image"/></td>
                <td className="connector"><div className="timeline-connector"/></td>
                <td className="timeline-image-container"><img src={HackConcordia} className="timeline-image"/></td>
                <td className="timeline-image-container"><div className="timeline-point-connector-right"/></td>
                <td className="timeline-image-container"><div className="timeline-point-right"/></td>
            </tr>
            <tr className="timeline-arrow-row">
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><div className="timeline-info-down"/></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><div className="timeline-info-down"/></td>
                <td> </td>
                <td> </td>
            </tr>
        </table>
      </div>
    );
  }
}

export default Timeline;