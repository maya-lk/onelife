import React from 'react';

import './service-item.scss';

const ServiceItem = ({ item }) => (
    <div className="serviceItem">
        <div className="item">
            <div className="imgWrap" style={{ backgroundImage : `url(${item.imageUrl})` }} />
            <div className="contentWrap">
                <h4>{item.title}</h4>
                <h5>{item.subTitle}</h5>
                <div className="content" dangerouslySetInnerHTML={{__html: item.smallContent }} />
            </div>
        </div>
    </div>
);

export default ServiceItem;