import styled from 'styled-components';

export const CommunityContainer = styled.div`
  font-family: 'Montserrat';
  font-size: 1rem;
  height: 100vh;
  @media (max-width: 600px) {
      height: auto;
  }
`;

export const GamehubContainer = styled.div`
  margin: 0 20%;
  font-family: 'Montserrat';
  font-size: 1rem;

  img {
    width: 80%;
    height: 160px;
  }

  p {
    color: #2699FB;
    font-weight: bold;
  }

  .slick-arrow {
    &:before {
      color: #2699FB;
    }
  }

  .card-info{
    text-align: center;

    img {
      margin: auto;
    }
  }

  @media (max-width: 641px) {
    margin: 0 5%;
  }
`;

export const SocialPostContainer = styled.div`
  margin: 0;
  font-family: 'Montserrat';
  font-size: 1rem;

  img {
    width: 80%;
  }

  p {
    color: #2699FB;
  }

  .slick-arrow {
    &:before {
      color: #2699FB;
    }
  }

  .wrapper-button {
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: center;
    img {
      margin: 10px;
      height: 30px;
      width: 30px;
    }
    #prev{
      transform: rotate(180deg); 
    }
  }
`;

export const SocialContainer = styled.div`
  margin: 30px 20%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 641px) {
    margin: 5%;
  }
`

export const SocialGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 40px;
    height: 40px;
    margin: 0px 15px;
  }

  input {
    height: 35px;
    border: 2px solid #2699FB;
    border-radius: 5px;
    ::placeholder {
        color: #2699FB;
    }
  }
`;
export const Title = styled.div`
  margin-top: ${(props) => !props.allPost && '5%'};
  font-size: 45px; 
  color: #2699FB;
  font-family: 'Montserrat-Bold';
  font-weight: bold;
  @media (max-width: 641px) {
    font-size: ${(props) => props.allPost ? '20px' : '25px'};
  }
`;