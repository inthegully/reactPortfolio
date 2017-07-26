import React from 'react';
import '../Projects/DevDesArt.css';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import SandG from '../../images/sandg.png';
import LnL from '../../images/lnl.png';
import Spotify from '../../images/spotifyPC.png';
import DDell from '../../images/DDell.png';

export default class Projects extends React.Component {
  render () {
    return(
      <div className="development-container">
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
        <a href="http://spotifyplaylistcreator.site44.com/" target="_blank">
          <div className="project-container">
            <h3 className="project-title">Spotify Playlist Creator</h3>
            <img className="project-image" src={Spotify} alt="Spotify Playlist Creator"/>
            <p className="project-description">
              Playlist creator written in jQuery with AJAX hitting Spotify's API
              which creates a playlist from the searched artist.
            </p>
          </div>
        </a>
      </div>
    );
  }
}
