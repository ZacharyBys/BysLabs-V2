import React, { Component } from 'react';
import '../styles/Timeline.css';
import Concordia from '../resources/Concordia.png';
import Eidos from '../resources/Eidos-Montreal.png';
import Coveo from '../resources/Coveo.png';
import HackConcordia from '../resources/HackConcordia.png';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-container" id="link-timeline">
      <h1 className="timeline-title">School & Experience</h1>
      <div className="timeline-line"/>
        <table className="timeline-table">
            <tr className="timeline-info-top-row">
                <td> </td>
                <td className="timeline-info-box-container" colspan="3">
                  <div className="timeline-info-box">
                    <h1>Concordia</h1>
                    <h2>2016 - Present</h2>
                    <ul className="timeline-info-list"> 
                      <li>Software Engineering</li>
                      <li>Member of Co-op Institute</li>
                      <li>Dean's List</li>
                    </ul>
                  </div>
                </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="timeline-info-box-container" colspan="3">
                  <div className="timeline-info-box">
                    <h1>Coveo</h1>
                    <h2>Apr. 2018 - Aug. 2018</h2>
                    <ul className="timeline-info-list"> 
                      <li>Software Developer Intern</li>
                      <li>Backend Programming</li>
                      <li>Java, Spring, MySQL, AWS</li>
                    </ul>
                  </div>
                </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
            </tr>
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
            <tr className="timeline-info-bottom-row">
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="timeline-info-box-container" colspan="3">
                  <div className="timeline-info-box">
                    <h1>Eidos-Montréal</h1>
                    <h2>Sept. 2017 - Apr. 2018</h2>
                    <ul className="timeline-info-list"> 
                      <li>Gameplay Programming Intern</li>
                      <li>Shadow of the Tomb Raider</li>
                      <li>C++</li>
                    </ul>
                  </div>
                </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td className="timeline-info-box-container" colspan="3">
                  <div className="timeline-info-box">
                    <h1>HackConcordia</h1>
                    <h2>May. 2018 - Present</h2>
                    <ul className="timeline-info-list"> 
                      <li>VP Technology</li>
                      <li>Tech for ConUHacks</li>
                      <li>React, Node, MongoDB, Python</li>
                    </ul>
                  </div>
                </td>
                <td> </td>
            </tr>
        </table>
      </div>
    );
  }
}

export default Timeline;