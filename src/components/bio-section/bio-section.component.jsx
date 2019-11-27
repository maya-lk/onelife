import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectBioSection } from '../../redux/common/common.selectors';

import './bio-section.styles.scss';

const BioSection = ({ bioSection }) => (
    <div className="bioSectionWrap">
        <div className="container" dangerouslySetInnerHTML={{ __html : bioSection }} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    bioSection : selectBioSection
});

export default connect(mapStateToProps)(BioSection);