import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {isMobile} from 'react-device-detect';

import API from './lib/api';

import { 
  setSiteLogo , 
  setLogoSubtext , 
  setMainImage , 
  setMainContent , 
  setAddress , 
  setEmail , 
  setContactNo ,
  setLinkedinLink , 
  setBioSection , 
  setOwnersBuilderPdf , 
  setGoogleCalender , 
  setMenus , 
  setBioImage , 
  setCalenderAPI , 
  setZoomID , 
  setZoomName
} from './redux/common/common.actions';
import { setServices } from './redux/services/services.actions';

import Home from './pages/home/home.component';
import MobileMenu from './components/mobile-menu/mobile-menu.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  componentDidMount(){

    const { 
      setSiteLogo , 
      setLogoSubtext , 
      setMainImage , 
      setMainContent , 
      setAddress , 
      setEmail , 
      setContactNo , 
      setServices ,
      setLinkedinLink , 
      setBioSection , 
      setOwnersBuilderPdf , 
      setGoogleCalender , 
      setMenus , 
      setBioImage , 
      setCalenderAPI ,
      setZoomID , 
      setZoomName
    } = this.props;

    //Common API
    API.get('common')
    .then(function(response){
      setSiteLogo(response.data.siteLogo);
      setLogoSubtext(response.data.logoSubtext);
      setMainImage(response.data.mainImage);
      setMainContent(response.data.mainContent);
      setAddress(response.data.address);
      setEmail(response.data.email);
      setContactNo(response.data.contactNo);
      setLinkedinLink(response.data.linkedinLink);
      setBioSection(response.data.bioSection);
      setOwnersBuilderPdf(response.data.ownersBuilderPdf);
      setGoogleCalender(response.data.googleCalender);
      setMenus(response.data.menus);
      setBioImage(response.data.bioImage);
      setCalenderAPI(response.data.calenderAPI);
      setZoomID(response.data.zoomID);
      setZoomName(response.data.zoomName);
    });

    //Set Services
    API.get('services')
    .then(function(response){
      setServices(response.data);
    });

  }

  render(){
    return (
      <div className="appWrapper">
        <Route path="/" exact component={Home} />
        {
          (isMobile)?
          <MobileMenu/>
          : ''
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setSiteLogo : (siteLogo) => dispatch(setSiteLogo(siteLogo)),
  setLogoSubtext : (logoSubtext) => dispatch(setLogoSubtext(logoSubtext)),
  setMainImage : (mainImage) => dispatch(setMainImage(mainImage)),
  setMainContent : (mainContent) => dispatch(setMainContent(mainContent)),
  setAddress : (address) => dispatch(setAddress(address)),
  setEmail : (email) => dispatch(setEmail(email)),
  setContactNo : (contactNo) => dispatch(setContactNo(contactNo)),
  setServices : (services) => dispatch(setServices(services)),
  setLinkedinLink : (linkedinLink) => dispatch(setLinkedinLink(linkedinLink)), 
  setBioSection : (bioSection) => dispatch(setBioSection(bioSection)), 
  setOwnersBuilderPdf : (ownersBuilderPdf) => dispatch(setOwnersBuilderPdf(ownersBuilderPdf)), 
  setGoogleCalender : (googleCalender) => dispatch(setGoogleCalender(googleCalender)), 
  setMenus : (menus) => dispatch(setMenus(menus)),
  setBioImage : (bioImage) => dispatch(setBioImage(bioImage)),
  setCalenderAPI : (calenderAPI) => dispatch(setCalenderAPI(calenderAPI)),
  setZoomID : (zoomID) => dispatch(setZoomID(zoomID)),
  setZoomName : (zoomName) => dispatch(setZoomName(zoomName)),
});

export default connect(null , mapDispatchToProps)(App);