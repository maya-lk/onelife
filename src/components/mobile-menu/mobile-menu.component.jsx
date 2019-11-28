import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOwnersBuilderPdf } from '../../redux/common/common.selectors';
import { selectMobileHidden } from '../../redux/mobile/mobile.selectors';

import { toggleMobileHidden } from '../../redux/mobile/mobile.actions';

import './mobile-menu.styles.scss';

const MobileMenu = ({ ownersBuilderPdf , mobileHidden , toggleMobileHidden }) => (
    <div className={`${ (mobileHidden)? 'openMenu' : '' } mobileMenuWrap`}>
        <div className="closeBtnWrap">
            <span className="closeBtn btn" onClick={toggleMobileHidden}><i className="fas fa-times"></i></span>
        </div>
        <nav className="navigationWrap navbar">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#home" onClick={toggleMobileHidden}>Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#services" onClick={toggleMobileHidden}>Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact" onClick={toggleMobileHidden}>Contact</a></li>
                {
                    (ownersBuilderPdf)?
                    <li className="nav-item"><a className="nav-link btnLink" href={ownersBuilderPdf.url} download target="_blank" rel="noopener noreferrer">Owners Builder PDF</a></li>
                    : ''
                } 
            </ul>
        </nav>
    </div>
);

const mapStateToProps = createStructuredSelector({
    ownersBuilderPdf : selectOwnersBuilderPdf,
    mobileHidden : selectMobileHidden
});

const mapDispatchToProps = dispatch => ({
    toggleMobileHidden : () => dispatch(toggleMobileHidden())
});

export default connect(mapStateToProps , mapDispatchToProps)(MobileMenu);