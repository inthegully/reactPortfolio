import React from 'react';
import '../Projects/DevDesArt.css';
import TMwedding from '../../images/tmweddinginvites.png';
import Programs from '../../images/programs.png';
import SBbabyshower from '../../images/SBbabyshowerinvitations.png';

export default class Design extends React.Component {
  render () {
    return(
      <div className="design-container">
        <div className="project-container">
          <h3 className="project-title">Wedding Invitations</h3>
          <img className="project-image" src={TMwedding} alt="Tiffany and Michael wedding invitation"/>
          <p className="project-description">
            Wedding invitations I designed and painted for my own wedding.
          </p>
        </div>
        <div className="project-container">
          <h3 className="project-title">Wedding Programs</h3>
          <img className="project-image" src={Programs} alt="Tiffany and Michael wedding programs"/>
          <p className="project-description">
            Wedding programs I designed and painted for my own wedding.
          </p>
        </div>
        <div className="project-container">
          <h3 className="project-title">Baby Shower Invites</h3>
          <img className="project-image" src={SBbabyshower} alt="baby shower invitation"/>
          <p className="project-description">
            Baby shower invitations I designed with a "April Showers" theme.
          </p>
        </div>
      </div>
    );
  }
}
