import React from 'react';

import MainBanner from '../../components/main-banner/main-banner.component';
import OurServices from '../../components/services/services.component';
import Consultations from '../../components/consultations/consultations.component';

import './home.styles.scss';

const Home = () => (
    <div className="homeWrap" id="home">
        <MainBanner />
        <OurServices />
        <Consultations />
    </div>
);

export default Home;