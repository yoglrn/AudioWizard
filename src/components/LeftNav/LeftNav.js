import React from 'react';
import PropTypes from 'prop-types';


const LeftNav = () => (
  <div>
          <ul className="sidebar-nav navbar-light bg-light navbar-nav w-25 h-100">
              <li className="nav-item">
                  <a className="nav-link" href="#">1ère visite</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Adaptation</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Patients</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Patients</a>
              </li>
          </ul>
  </div>
);

LeftNav.propTypes = {};

LeftNav.defaultProps = {};

export default LeftNav;
