import React, { Component } from 'react';
import '../styles/Project.css';

class Project extends Component {
  render() {
    return (
      <a className="project-link" href={this.props.link} target="_blank">  
        <table className="project-container">
            <tr>
                <td className="project-image-container">
                    <img className="project-image" src={this.props.image}/>
                </td>
                <td className="project-text-container">
                    <h1 className="project-title">{this.props.title}</h1>
                    <div className="project-line"/>
                    <p className="project-description">{this.props.description}</p>
                </td>
            </tr>
        </table>
      </a>
    );
  }
}

export default Project;