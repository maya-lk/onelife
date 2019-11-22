import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAddress , selectEmail , selectContactNo } from '../../redux/common/common.selectors';

import './contact-details.styles.scss';

const ContactDetails = ({ address , email , contactNo }) => (
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
    </div>
);

const mapStateToProps = createStructuredSelector({
    address : selectAddress,
    email : selectEmail,
    contactNo : selectContactNo
});

export default connect(mapStateToProps)(ContactDetails);