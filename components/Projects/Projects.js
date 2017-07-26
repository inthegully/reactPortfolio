import React from 'react';
import './Projects.css';
import Development from '../Development/Development';
import Design from '../Design/Design';
import Art from '../Art/Art';

export default class Projects extends React.Component {
  render () {
    return(
      <div className="projects-container">
        <h1 className="projects-title">
        </h1>
        <h2 className="subproject-title">
          Development
        </h2>
        <Development />
        <h2 className="subproject-title">
          Design
        </h2>
        <Design />
        <h2 className="subproject-title">
          Art
        </h2>
        <Art />
      </div>
    );
  }
}
