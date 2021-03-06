import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height: 100vh;
`;


export const Navbar = styled.div`
    background-color: #D8EDFF;
    .nav-icon {
        float: right;
        cursor: pointer;
    }
    .nav-icon {
        margin: 1em;
        width: 40px;
    }

    .nav-icon:after, 
    .nav-icon:before, 
    .nav-icon div {
        background-color: #000000;
        border-radius: 3px;
        content: '';
        display: block;
        height: 5px;
        margin: 7px 0;
        transition: all .2s ease-in-out;
    }

    .nav-icon:hover:before {
        transform: translateY(12px) rotate(135deg);
    }

    .nav-icon:hover:after {
        transform: translateY(-12px) rotate(-135deg);
    }

    .nav-icon:hover div {
        transform: scale(0);
    }

    position: fixed;
    z-index: 10000;
    top: 0px;
    width: 100%;
`;

export const Hero = styled.div`
    background-image: url(${(props) => props.background});
    height: 90vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .content {
        margin-left: 20%;
        position: absolute;
        top: 80%;
        transform: translate(0%, -50%);
        color: white;
    }
    .content > .content-game {
        width: 50%;
    }
    .content > .group-rating {
        display: inline;
    }
    .bottom-right {
        cursor: pointer;
        position: fixed;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        img {
            margin: 15px 0px;
        }
        bottom: 8px;
        right: 16px;
    }
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://mkt-web.gameloft.com/static/24740422a38712adcfd0aecba061ebf0.jpg"); background-position: 50% 0px;

    @media (max-width: 768px) {
        height: 80vh;
        .content {
            margin-left: 5%;
        }
        .content > .content-game {
            width: 90%;
        }
    }

    @media (max-width: 500px) {
        height: 75vh;
    }
`;

export const DownloadBar = styled.div`
    background-color: #D8EDFF;
    height: 10vh;

    .container{
        display: flex;
        flex-direction : row;
        align-items: center;
        margin: 0 20%;
        height: 100%;
        justify-content: space-between;
        flex-wrap: wrap
    }

    .container > p {
        font-weight: bold;
        color: #2699FB;
    }

    .download-group{
        display: inline-flex;
        flex-wrap: wrap;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        height: 20vh;
    }
    @media (max-width: 500px) {
        height: 25vh;
    }
`;