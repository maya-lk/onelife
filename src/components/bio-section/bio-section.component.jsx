import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectBioSection , selectBioImage } from '../../redux/common/common.selectors';

import './bio-section.styles.scss';

const BioSection = ({ bioSection , bioImage }) => (
    <div className="bioSectionWrap">
        <div className="container d-flex flex-wrap" >
            <div className="content col-md-6 col-12" dangerouslySetInnerHTML={{ __html : bioSection }} />
            <div className="imageWrap col-md-6 col-12" style={{ backgroundImage : `url(${bioImage})` }}></div>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    bioSection : selectBioSection,
    bioImage : selectBioImage
});

export default connect(mapStateToProps)(BioSection);