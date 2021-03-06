import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
    selectAddress , 
    selectEmail , 
    selectContactNo , 
    selectMenus , 
    selectOwnersBuilderPdf , 
    selectZoomID , 
    selectZoomName ,
    selectResourcesTitle , 
    selectResources 
} from '../../redux/common/common.selectors';

import './contact-details.styles.scss';

const ContactDetails = ({ address , email , contactNo , menus , ownersBuilderPdf , zoomID , zoomName , resourcesTitle , resources }) => (
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
        <div className="contactDetail">
            <h5>Zoom</h5>
            <span>ID : {zoomID}</span><br/>
            <span>Name : {zoomName}</span>
        </div>
        <ul className="navbar-nav">
            {
                (menus)?
                menus.map( menu => <li key={menu.name} className="nav-item"><a className="nav-link" href={menu.link} target="_blank" rel="noopener noreferrer">{menu.name}</a></li>)
                : ''
            }
            {
                (resourcesTitle)?
                <li className="nav-item title">{resourcesTitle}</li>
                : ''
            }
            {
                (resources)?
            resources.map( resou => <li key={resou.resource_name} className="nav-item"><a className="nav-link" href={resou.file} download target="_blank" rel="noopener noreferrer" style={{ backgroundColor : '#343536' , color : '#fff' }}>{resou.resource_name}</a></li> )
                : ''
            }                     
        </ul>
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    address : selectAddress,
    email : selectEmail,
    contactNo : selectContactNo , 
    menus : selectMenus,
    ownersBuilderPdf : selectOwnersBuilderPdf,
    zoomID : selectZoomID,
    zoomName : selectZoomName,
    resourcesTitle : selectResourcesTitle , 
    resources : selectResources
});

export default connect(mapStateToProps)(ContactDetails);