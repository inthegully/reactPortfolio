import React from 'react';
import '../Projects/DevDesArt.css';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import SandG from '../../images/sandg.png';
import LnL from '../../images/lnl.png';
import DDell from '../../images/DDell.png';
import Purple from '../../images/Purple.png';

export default class Projects extends React.Component {
  render () {
    return(
      <div className="development-container">
        <a href="http://www.purple.com/" target="_blank">
          <div className="project-container">
            <h3 className="project-title">Purple</h3>
            <img className="project-image" src={Purple} alt="Purple Mattress Website"/>
            <p className="project-description">
              Purple is a billion dollar mattress company. I build and maintain the e-commerce site, including multiple new product launches, writing Ruby scripts for the world's largest Shopify site, implementing tracking and analytics, as well as cross-browser optimization.
              Using Optimizely, I run A/B tests and have increased conversion rates based on my findings. Currently working on building out the new version of the site using the Craft CMS with Sass, ES6+.
            </p>
          </div>
        </a>
        <a href="http://www.stevenandgillian.com/" target="_blank">
          <div className="project-container">
            <h3 className="project-title">Wedding Website</h3>
            <img className="project-image" src={SandG} alt="Steven and Gillian Wedding Website"/>
            <p className="project-description">
              Designed and created all art for the wedding website of Steve and Gillian
              using React and latest JS tools.
            </p>
          </div>
        </a>
        <a href="https://lipsticknlaceetc.com/" target="_blank">
          <div className="project-container">
            <h3 className="project-title">Lipstick n' Lace etc.</h3>
            <img className="project-image" src={LnL} alt="Lipstick n' Lace etc. shopping website"/>
            <p className="project-description">
              Designed and built the ecommerce website using React, Redux, and ES6+
              hitting Contentful and Snipcart APIs.
            </p>
          </div>
        </a>
        <a href="http://www.dimpledellwild.com/" target="_blank">
          <div className="project-container">
            <h3 className="project-title">Keep Dimple Dell Wild</h3>
            <img className="project-image" src={DDell} alt="Keep dimple dell wild"/>
            <p className="project-description">
              Designed and built nonprofit website for the protection of Dimple Dell Nature Reserve in Sandy, UT.
            </p>
          </div>
        </a>
      </div>
    );
  }
}
