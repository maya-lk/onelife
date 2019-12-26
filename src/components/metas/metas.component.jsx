import React from "react";
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSiteTitle , selectSiteDescription } from '../../redux/common/common.selectors';
 
class Metas extends React.Component {
    render () {

        const { siteTitle , siteDescription } = this.props;

        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${siteTitle} | ${siteDescription}`}</title>
                <meta name="description" content={siteDescription} />
            </Helmet>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    siteTitle : selectSiteTitle,
    siteDescription : selectSiteDescription
})  

export default connect(mapStateToProps)(Metas);