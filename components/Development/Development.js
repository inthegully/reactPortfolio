import React from 'react';
import '../Projects/DevDesArt.css';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import SandG from '../../images/sandg.png';
import LnL from '../../images/lnl.png';
import Spotify from '../../images/spotifyPC.png';

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
            <img className="project-image" src={LnL} alt="Lipstick n' Lace etc. shopping website"/>
            <p className="project-description">
              Shopping website built in react hitting Contentful and Snipcart APIs.
            </p>
          </div>
        </a>
        <a href="http://spotifyplaylistcreator.site44.com/" target="_blank">
          <div className="project-container">
            <h3 className="project-title">Spotify Playlist Creator</h3>
            <img className="project-image" src={Spotify} alt="Spotify Playlist Creator"/>
            <p className="project-description">
              Playlist creator that uses Spotify's API and creates a playlist from the typed in artist.
            </p>
          </div>
        </a>
      </div>
    );
  }
}
