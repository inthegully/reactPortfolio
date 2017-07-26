import React from 'react';
import '../Projects/DevDesArt.css';
import Mandalaimg from '../../images/mandala.png';
import Salvation from '../../images/[Salve]ation.png';
import Cactus from '../../images/CactusHead.png';

export default class Art extends React.Component {
  render () {
    return(
      <div className="art-container">
        <div className="project-container">
          <h3 className="project-title">Mandala</h3>
          <img className="project-image" src={Mandalaimg} alt="Mandala"/>
          <p className="project-description">
            Mandala originally drawn with ink and then recreated digitally in Illustrator.
          </p>
        </div>
        <div className="project-container">
          <h3 className="project-title">Cactus Head</h3>
          <img className="project-image" src={Cactus} alt="salvation"/>
          <p className="project-description">
            Reimagining of Michael in the desert. Posca paint pens on cardstock.
          </p>
        </div>
        <div className="project-container">
          <h3 className="project-title">[Salve]ation</h3>
          <img className="project-image" src={Salvation} alt="salvation"/>
          <p className="project-description">
            Product art and design for [Salve]ation hand salves.
          </p>
        </div>
        <div className="copyright">
          &copy; inthegully
        </div>
      </div>
    );
  }
}
