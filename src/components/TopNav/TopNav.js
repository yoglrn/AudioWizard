import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg'

const TopNav = () => (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt="Logo"/>
        </a>

        <button className="btn btn-outline-success my-2 my-sm-0">Nom</button>
    </nav>
);

TopNav.propTypes = {};

TopNav.defaultProps = {};

export default TopNav;
