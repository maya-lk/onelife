import React from 'react';
import { connect } from 'react-redux';

import { toggleMobileHidden } from '../../redux/mobile/mobile.actions';

import './mobile-menu-button.styles.scss';

const MobileMenuButton = ({ toggleMobileHidden }) => (
    <div className="btn mobileMenuBtn" onClick={toggleMobileHidden}><i className="fas fa-bars"></i></div>
)

const mapDispatchToProps = dispatch => ({
    toggleMobileHidden : () => dispatch(toggleMobileHidden())
});

export default connect(null , mapDispatchToProps)(MobileMenuButton);