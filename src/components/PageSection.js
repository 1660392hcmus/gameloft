import { element, string } from 'prop-types';
import React from 'react';
import { PageSectionWrapper } from '../stylesheets/LandingGlobal.style';


const PageSection = ({ backgroundImg, backgroundColor, component, align }) => {
console.log("🚀 ~ file: PageSection.js ~ line 7 ~ PageSection ~ backgroundImg", backgroundImg)
  return (
    <PageSectionWrapper imgSrc={`../assets/images/${backgroundImg}`} align={align} bg={backgroundColor}>
      {component}
    </PageSectionWrapper>
  );
};

PageSection.propTypes = {
  backgroundImg: string,
  backgroundColor: string,
  component: element.isRequired,
  align: string,
};

PageSection.defaultProps = {
  backgroundImg: '',
  backgroundColor: '#fff',
  align: 'center',
};

export default PageSection;
