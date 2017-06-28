import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import '../css/index.css';
import LogoHouse from '../components/LogoHouse/LogoHouse';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="index-body">
        </div>
        <div>
          <LogoHouse />
          <About />
          <Projects />
        </div>
      </div>
    );
  }
}
