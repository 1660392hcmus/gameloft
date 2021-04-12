import { element } from 'prop-types';
import React from 'react';
import { PageSectionWrapper } from '../stylesheets/LandingGlobal.style';


const PageSection = ({ component }) => {
  return (
    <PageSectionWrapper>
      {component}
    </PageSectionWrapper>
  );
};

PageSection.propTypes = {
  component: element.isRequired,
};

PageSection.defaultProps = {
};

export default PageSection;
