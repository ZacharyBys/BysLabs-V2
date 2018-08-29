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
                <td> </td>
                <td> </td>
                <td><div className="timeline-info-up"/></td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
            </tr>
            <tr className="timeline-images-row">
                <td><div className="timeline-point-left"/></td>
                <td><div className="timeline-point-connector-left"/></td>
                <td><img src={Concordia} className="timeline-image"/></td>
                <td><div className="timeline-connector"/></td>
                <td><div className="timeline-connector"/></td>
                <td><img src={Eidos} className="timeline-image"/></td>
                <td><div className="timeline-connector"/></td>
                <td><div className="timeline-connector"/></td>
                <td><img src={Coveo} className="timeline-image"/></td>
                <td><div className="timeline-connector"/></td>
                <td><div className="timeline-connector"/></td>
                <td><img src={HackConcordia} className="timeline-image"/></td>
                <td><div className="timeline-point-connector-right"/></td>
                <td><div className="timeline-point-right"/></td>
            </tr>
            <tr className="timeline-arrow-row">
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><div className="timeline-info-down"/></td>
                <td> </td>
                <td> </td>
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