import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px;
`;

export const Card = styled.div`
    background-image: linear-gradient(#2699FB, black);
    border: 1px solid #2699FB;
    border-radius: 10px;
    position: relative;
    padding: 10%;
    img {
        width:100%;
        height:100%;
        margin: 20% auto;
        margin: 20% auto 80% auto;
    }

    .content {
        color: #FFFFFF;
        font-weight: bolder;
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