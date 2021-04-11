import styled from 'styled-components';

export const GameContentContainer = styled.div`
    margin: auto;
    height: 100vh;

    .wrapper-button {
        display: flex;
        align-items: center;
        margin-top: 5%;
        justify-content: center;
        img {
        margin: 10px;
        height: 30px;
        width: 30px;
        }
        #prev{
        transform: rotate(180deg); 
        }
        p {
            color: #2699FB;
        }
    }
`;

export const Infor = styled.div`
    margin: 5% 20%;
    padding: 60px 0px;
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

export const ImageWrapper = styled.div`
    /* margin: 10px; */
    position: relative;

    img {
        /* margin: 20% auto; */
        height: 50%;
        width: 90%;
        margin: auto;
    }

    .topright {
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 18px;
    }   
`;