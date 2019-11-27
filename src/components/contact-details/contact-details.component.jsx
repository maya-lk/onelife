import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAddress , selectEmail , selectContactNo , selectMenus } from '../../redux/common/common.selectors';

import './contact-details.styles.scss';

const ContactDetails = ({ address , email , contactNo , menus }) => (
    <div className="contactDetailsWrap" id="contact">
        <h2>Contact</h2>
        <div className="contactDetail">
            <h5>Address</h5>
            <div dangerouslySetInnerHTML={{__html: address }}/>
        </div>
        <div className="contactDetail">
            <h5>E mail</h5>
            {email}
        </div>
        <div className="contactDetail">
            <h5>Mobile Phone</h5>
            {contactNo}
        </div>
        <ul className="navbar-nav">
            {
                (menus)?
                menus.map( menu => <li key={menu} className="nav-item"><a className="nav-link" href={menu.link} target="_blank">{menu.name}</a></li>)
                : ''
            }                       
        </ul>
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    address : selectAddress,
    email : selectEmail,
    contactNo : selectContactNo , 
    menus : selectMenus
});

export default connect(mapStateToProps)(ContactDetails);