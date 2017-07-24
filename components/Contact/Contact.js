import React from 'react';
import './contact.css';
import GitHub from '../../images/githublogo.png';
import LinkedIn from '../../images/linkedinlogo.png';
import Insta from '../../images/instagramlogo.png';
import Twitter from '../../images/Twitterlogo.png';


export default class Contact extends React.Component {
  render () {
    return (
      <div className="contact-container">
        <h1 className="contact-title">Contact</h1>
        <h2 className="email">inthegullydesign@gmail.com</h2>
        <div className="contact-logos-flex">
          <div>
            <a href="https://github.com/inthegully" target="_blank">
              <img className="contact-logo" src={GitHub} alt="Github logo"/>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/inthegully/" target="_blank">
              <img className="contact-logo" src={LinkedIn} alt="Linkedin logo"/>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/inthegully/" target="_blank">
              <img className="contact-logo" src={Insta} alt="Instagram logo"/>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/inthegully" target="_blank">
              <img className="contact-logo" src={Twitter} alt="Twitter logo"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
