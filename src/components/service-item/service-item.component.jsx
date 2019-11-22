import React from 'react';

import './service-item.scss';

const ServiceItem = ({ item }) => (
    <div className="serviceItem col-md-4 col-12">
        <div className="item">
            <div className="imgWrap" style={{ backgroundImage : `url(${item.imageUrl})` }} />
            <h4>{item.title}</h4>
            <h5>{item.subTitle}</h5>
            <div className="content" dangerouslySetInnerHTML={{__html: item.smallContent }} />
        </div>
    </div>
);

export default ServiceItem;