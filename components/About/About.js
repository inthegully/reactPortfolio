import React from 'react';
import './About.css';
import PortfolioPic from '../../images/portfoliopic.jpg';

export default class About extends React.Component {
  render () {
    return (
      <div className="about-container">
        <h1 className="about-title"></h1>
        <div className="me-split">
          <div className="portfolio-pic-div">
            <img className="portfolio-pic" src={PortfolioPic} alt="Tiffany Fritz"/>
          </div>
          <div className="about-blurb-div">
            <p className="about-blurb">
              My name is Tiffany Fritz.
            </p>
            <p className="about-blurb">
              I am a developer, designer, and artist from Salt Lake City.
            </p>
            <p className="about-blurb">
              I am always curious and love to learn new things.
            </p>
            <p className="about-blurb">
              I get things done with HTML, CSS, JavaScript, React, Photoshop,
              and Illustrator.
            </p>
            <p className="about-blurb">
              My first love was art. I draw inspiration from the natural world,
              dreams, and the subconscious. These sources of inspiration represent
              different realms that are both seperate, yet intertwining places
              that influence our everyday being. The environments in which we
              all create and take up space have always fascinated me - the internet
              being another one of those places. Through the path of digital art,
              I was led toward web development. My interest in the internet space
              made me not only want to consume it, but to be able to create it as
              well - not just the pleasing visuals, but also the functionality and
              interactivity.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
