import styled from 'styled-components';

export const EventPromotionContainer = styled.div`
  font-family: 'Montserrat';
  font-size: 1rem;
  height: 100vh;
  background-color: #D8EDFF;
`;

export const Infor = styled.div`
    margin: 0 20%;
    padding: 30px 0px;
    color: #2699FB;
    
    #title {
        font-size: 45px; 
        font-family: 'Montserrat-Bold';
        font-weight: bold;
    }

    #content {
        font-size: 25px;
    }

    @media (max-width: 641px) {
        #title {
            font-size: 25px;
        }
        #content {
            font-size: 20px;
        }
        margin: 0 5%;
    }
`;

export const SliderContainer = styled.div`
    .slick-slide.slick-center {
        transform: scale(1.1);
    }
`;

export const Count = styled.div`
`;