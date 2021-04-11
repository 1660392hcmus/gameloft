import styled from 'styled-components';

export const ContactContainer = styled.div`
    background: rgba(216,237,255,0.5);
    display: flex;
    font-family: Montserrat;
    padding: 0 20%;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 100vh;
`;

export const ImageLeft = styled.div`
    flex-grow: 1;
    img {
        width: 75%;
    }
    margin: 20% 0;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const FormRight = styled.div`
    flex-grow: 1;
    margin: 20% 0;
    h2 {
        max-width: fit-content;
        color: #2699FB;
    }
    p {
        max-width: fit-content;
        color: #2699FB;
    }
    
    input {
        border: 2px solid #2699FB;
        border-radius: 5px;
        margin: 10px 0;
        height: 30px;
        width: 100%;
        ::placeholder {
            color: #2699FB;
        }
    }

    select {
        border: 2px solid #2699FB;
        border-radius: 5px;
        margin: 10px 0;
        height: 30px;
        width: 100%;
        color: #2699FB;
    }

    .checkbox{
        display: flex;
        max-width: fit-content;
        input {
            width: auto;
        }

        span {
            color: #2699FB;
            margin: 15px 0 15px 15px;
        }
    }
`;