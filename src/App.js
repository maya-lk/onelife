import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import API from './lib/api';

import { setSiteLogo , setLogoSubtext , setMainImage , setMainContent , setAddress , setEmail , setContactNo } from './redux/common/common.actions';
import { setServices } from './redux/services/services.actions';

import Home from './pages/home/home.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  componentDidMount(){

    const { setSiteLogo , setLogoSubtext , setMainImage , setMainContent , setAddress , setEmail , setContactNo , setServices } = this.props;

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
});

export default connect(null , mapDispatchToProps)(App);