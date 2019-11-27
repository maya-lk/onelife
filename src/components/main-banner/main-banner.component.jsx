import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSiteLogo , selectLogoSubtext , selectMainContent , selectMainImage , selectOwnersBuilderPdf , selectLinkedinLink } from '../../redux/common/common.selectors';

import './main-banner.styles.scss';

const MainBanner = ({ siteLogo , logoSubtext , mainImage , mainContent , ownersBuilderPdf , linkedinLink }) => (
    <div className="mainBannerWrap">
        <div className="container d-flex p-0">
            <div className="mainBanner" style={{ backgroundImage : `url(${mainImage})` }} />
            <div className="mainContent">
                <nav className="navigationWrap navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        {
                            (ownersBuilderPdf)?
                            <li className="nav-item"><a className="nav-link btnLink" href={ownersBuilderPdf.url} download target="_blank" rel="noopener noreferrer">Owners Builder PDF</a></li>
                            : ''
                        }                        
                    </ul>
                </nav>
                <div className="logoWrap">
                    <img src={siteLogo} alt="Site Logo"/>
                    <div className="logoText" dangerouslySetInnerHTML={{__html: logoSubtext }} />
                </div>
                <div className="contentMain" dangerouslySetInnerHTML={{__html: mainContent }} />
                {
                    (linkedinLink)?
                    (
                        <div className="linkedingProfile">
                            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="btn"><i className="fab fa-linkedin-in"></i> View Profile</a>
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
    ownersBuilderPdf : selectOwnersBuilderPdf,
    linkedinLink : selectLinkedinLink
})

export default connect(mapStateToProps)(MainBanner);