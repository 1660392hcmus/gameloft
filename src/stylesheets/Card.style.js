import styled from 'styled-components';

export const Container = styled.div`
    margin: 10px;
`;

export const Card = styled.div`
    background-color: #D5ECFF;
    border: 1px solid #2699FB;
    border-radius: 10px;
    position: relative;
    padding: 10%;
    img {
        margin: 20% auto;
    }

    .social-img {
        width:100%;
        height:100%;
    }

    .topleft {
        position: absolute;
        top: 8px;
        left: 16px;
        font-size: 18px;
    }
    .topright {
        position: absolute;
        top: 8px;
        right: 16px;
        font-size: 18px;
    }   
`;