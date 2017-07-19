import React from 'react';
import '../Projects/DevDesArt.css';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import SandG from '../../images/sandg.png';

export default class Projects extends React.Component {
  render () {
    return(
      <div className="development-container">
        <a href="http://www.stevenandgillian.com/" target="_blank">
          <div className="project-container">
            <h3 className="project-title">Wedding Website</h3>
            <img className="project-image" src={SandG} alt="Steven and Gillian Wedding Website"/>
            <p className="project-description">
              Wedding website for Steve and Gillian written in React. Art also
              done by me.
            </p>
          </div>
        </a>
        <a href="https://lipsticknlaceetc.com/" target="_blank">
          <div className="project-container">
            <h3 className="project-title">Lipstick n' Lace etc.</h3>
            <img className="project-image" src={SandG} alt="Lipstick n' Lace etc. shopping website"/>
            <p className="project-description">
              Shopping website built in react hitting contentful and snipcart APIs.
            </p>
          </div>
        </a>
      </div>
    );
  }
}
