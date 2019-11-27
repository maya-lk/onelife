import React from 'react';

import MainBanner from '../../components/main-banner/main-banner.component';
import BioSection from '../../components/bio-section/bio-section.component';
import OurServices from '../../components/services/services.component';
import Consultations from '../../components/consultations/consultations.component';

import './home.styles.scss';

const Home = () => (
    <div className="homeWrap" id="home">
        <MainBanner />
        <BioSection />
        <OurServices />
        <Consultations />
    </div>
);

export default Home;