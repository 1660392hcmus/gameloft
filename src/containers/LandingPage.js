import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import CommunityHub from '../components/CommunityHub';
import { LandingPageContainer } from '../stylesheets/LandingGlobal.style';
import EventPromotion from '../components/EventPromotion';
import GameContent from '../components/GameContent';
import PageSection from '../components/PageSection';

const LandingPage = () => {
  return (
    <LandingPageContainer>
        <Header />
        <Contact />
        <CommunityHub />
        <EventPromotion />
        <GameContent />
        <Footer></Footer>
    </LandingPageContainer>
  );
};

export default LandingPage;
