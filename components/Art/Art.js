import React from 'react';
import '../Projects/DevDesArt.css';
import Mandalaimg from '../../images/mandala.png';
import Salvation from '../../images/[Salve]ation.png';

export default class Art extends React.Component {
  render () {
    return(
      <div className="art-container">
        <div className="project-container">
          <h3 className="project-title">Mandala</h3>
          <img className="project-image" src={Mandalaimg} alt="Mandala"/>
          <p className="project-description">
            Mandala I origianly drew and then recreated in Illustrator.
          </p>
        </div>
        <div className="project-container">
          <h3 className="project-title">[Salve]ation</h3>
          <img className="project-image" src={Salvation} alt="salvation"/>
          <p className="project-description">
            Prodcut art for [Salve]ation hand salves.
          </p>
        </div>
      </div>
    );
  }
}
