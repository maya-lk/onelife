import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {isMobile} from 'react-device-detect';

import { selectSiteLogo , selectLogoSubtext , selectMainContent , selectMainImage , selectLinkedinLink } from '../../redux/common/common.selectors';

import MobileMenuButton from '../mobile-menu-button/mobile-menu-button.component';

import './main-banner.styles.scss';

const MainBanner = ({ siteLogo , logoSubtext , mainImage , mainContent  , linkedinLink }) => (
    <div className="mainBannerWrap">
        <div className="container d-flex flex-wrap p-0">
            {
                (isMobile)?
                <MobileMenuButton/>
                : ''
            }

            {
                (!isMobile)?
                <nav className="navigationWrap navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>                 
                    </ul>
                </nav>
                : ''
            }

            <div className="mainBanner" style={{ backgroundImage : `url(${mainImage})` }} />
            <div className="mainContent">               
                
                <div className="logoWrap">
                    <img src={siteLogo} alt="Site Logo"/>
                    <div className="logoText" dangerouslySetInnerHTML={{__html: logoSubtext }} />
                </div>
                <div className="contentMain" dangerouslySetInnerHTML={{__html: mainContent }} />
                {
                    (linkedinLink)?
                    (
                        <div className="linkedingProfile">
                            <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer" className="btn">View Profile</a>
                        </div>
                    )
                    : ''
                }                 
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    siteLogo : selectSiteLogo, 
    logoSubtext : selectLogoSubtext, 
    mainContent : selectMainContent, 
    mainImage : selectMainImage,
    linkedinLink : selectLinkedinLink
})

export default connect(mapStateToProps)(MainBanner);