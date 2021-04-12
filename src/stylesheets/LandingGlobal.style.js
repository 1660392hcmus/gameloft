import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  height: 100vh; //Temporary because of the header
  width: 100%;
  font-family: 'Montserrat';
  font-size: 1rem;
`;

export const PageSectionWrapper = styled.section`
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  z-index: 1;
  /* display: flex; */
  /* justify-content: center; */
  align-items: ${(props) => props.align || 'center'};
`;