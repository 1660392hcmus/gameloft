import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 100vh;
    background-color: #2699FB;
`;

export const UpperContainer = styled.div`
    margin: 0% 20%;
    padding: 5%;
    display: flex;
    justify-content: space-between;
`;

export const Social = styled.div`
    img {
        margin-right: 10px;
    }
    #fb {
        height: 52.99px;
        width: 52.99px;
    }
`;

export const BottomContainer = styled.div`
    color: #FFFFFF;
    text-align: center;
`;

export const GroupLeft = styled.div`
    padding: 10% 0%;
    img {
        color: white;
    }
    p {
        color: #FFFFFF;
        font-weight: bold
    }
`;

export const GroupRight = styled.div`
    padding: 10% 0%;
    p {
        color: #FFFFFF;
    }
    .title {
        margin: 45px 0px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10%;
    width: 40%;
    img {
        width: 100px;
        height: 40px;
        flex: 1 0 30%;
    }
`;