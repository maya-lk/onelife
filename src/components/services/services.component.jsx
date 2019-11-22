import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectServices } from '../../redux/services/services.selectors';

import ServiceItem from '../service-item/service-item.component';

import './services.styles.scss';

const OurServices = ({ services }) => (
    <div className="ourServicesWrap" id="services">
        <div className="container">
            <h2 className="text-center">Our Services</h2>
            <div className="servicesWrap d-flex flex-wrap row">
                {
                    (services)?
                    services.map( item => <ServiceItem key={item.ID} item={item} /> )
                    : ''
                }
            </div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    services : selectServices
});

export default connect(mapStateToProps)(OurServices);