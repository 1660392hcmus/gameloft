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
    .topleft {
        display: none;
        .content-topleft {
            font-size: 15px;
        }
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
        display: none;
        position: absolute;
        top: 8px;
        right: 16px;
        font-size: 18px;
        cursor: pointer;
    }   
    .read-more {
        display: none;
    }

    &:hover {
        .topright {
            display: block;
        }
        .read-more {
            display: block;
            height: 40px;
            width: 100%;
            background: none;
            color: #FFFFFF;
            border: 2px solid #FFFFFF;
            border-radius: 5px;
            cursor: pointer;
        }
        .content {
            display: none;
        }
        .topleft {
            display: block;
            color: #FFFFFF;
        }
    }
`;