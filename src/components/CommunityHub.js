import {
    CommunityContainer,
    Title,
    GamehubContainer,
    SocialPostContainer,
    SocialContainer,
    SocialGroup
} from '../stylesheets/CommunityHub.style';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import React, { useState } from 'react';
import SocialCard from './SocialCard';
import gamehub1 from '../assets/images/gamehub-1.jpg';
import gamehub2 from '../assets/images/gamehub-2.jpg';
import gamehub3 from '../assets/images/gamehub-3.jpg';
import gamehub4 from '../assets/images/gamehub-4.jpg';
import gamehub5 from '../assets/images/gamehub-5.jpg';
import gamehub6 from '../assets/images/gamehub-6.jpg';
import socialPost from '../assets/images/social-post.png';
import arrowIcon from '../assets/icons/arrow.svg';
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg';
import fb from '../assets/icons/facebook-circle.svg';
import { useMediaQuery } from 'react-responsive';
import { socialPosts } from '../utils/ENUM';
import Posts from './Posts';

const listGameHub = [
    {
        "src": gamehub1,
        "name": "Short Title"
    },
    {
        "src": gamehub2,
        "name": "Short Title"
    },
    {
        "src": gamehub3,
        "name": "Short Title"
    },
    {
        "src": gamehub4,
        "name": "Short Title"
    },
    {
        "src": gamehub5,
        "name": "Short Title"
    },
    {
        "src": gamehub6,
        "name": "Short Title"
    }
];


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    centerMode: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const postsPerPage = 3;
let arrayForHoldingPosts = [];

const CommunityHub = () => {
    const isMobile = useMediaQuery({ maxDeviceWidth: 600 })
    //creating the ref
    const customeSlider = React.useRef();
    const [counterSlider, setCounterSlider] = React.useState(1);
    const [postsToShow, setPostsToShow] = useState([]);
    const [next, setNext] = useState(3);

    const loopWithSlice = (start, end) => {
        const slicedPosts = socialPosts.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
    };

    React.useEffect(() => {
        loopWithSlice(0, postsPerPage);
    }, []);

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
    };


    const gotoNext = () => {
        let counter = counterSlider;
        counter++;
        if (counter > 10) {
            return;
        }
        setCounterSlider(counter);
        customeSlider.current.slickNext()
    }

    const gotoPrev = () => {
        let counter = counterSlider;
        counter--;
        if (counter < 1) {
            return;
        }
        setCounterSlider(counter);
        customeSlider.current.slickPrev()
    }
    return (
        <CommunityContainer>
            <GamehubContainer>
                <Title>Game Community Hub</Title>
                <p>Live Game Updates</p>
                <Slider {...settings}>
                    {listGameHub.map(gamehub => (
                        <div className='card-info'>
                            <img src={gamehub.src} />
                            <p className="legend">{gamehub.name}</p>
                        </div>
                    ))}
                </Slider>
            </GamehubContainer>

            <SocialPostContainer>
                <SocialContainer>
                    <Title allPost>All Posts</Title>
                    <SocialGroup>
                        <img src={twitter} />
                        <img src={instagram} />
                        <img src={fb} />
                    </SocialGroup>
                    <input type='text' placeholder="Search"></input>
                </SocialContainer>
                {isMobile ? 
                <>
                    <div className="post-loadmore">
                        <Posts postsToRender={postsToShow} component={SocialCard}/>
                    </div> 
                    <div className="load-more">
                        <button onClick={handleShowMorePosts}>More</button>
                    </div>
                </>
                :
                <>
                    <Slider {...settings} ref={customeSlider}>
                        {socialPosts.map((post) => (
                            <SocialCard src={socialPost} style={{ width: 100 }}></SocialCard>
                        ))}
                    </Slider>
                    <div className="wrapper-button">
                        <img id="prev" src={arrowIcon} onClick={() => gotoPrev()} />
                        <p>{counterSlider}/10</p>
                        <img src={arrowIcon} onClick={() => gotoNext()} />
                    </div>
                </>
                }
                
                
            </SocialPostContainer>
        </CommunityContainer>
    )
}

export default CommunityHub;