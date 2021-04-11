import { 
    EventPromotionContainer,
    Infor,
    SliderContainer,
    Count,
} from '../stylesheets/EventPromotion.style';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import React, { useState } from 'react'
import EventPromotionCard from './EventPromotionCard';
import socialPost from '../assets/images/social-post.png';

const EventPromotion = () => {
    //creating the ref
    const customeSlider = React.useRef();
    // setting slider configurations
    const [sliderSettings, setSliderSettings] = useState({
        className: "center",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        centerMode: true,
        centerPadding: "60px",
        focusOnSelect: true,
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
    })
    return (
        <EventPromotionContainer>
            <Infor>
                <p id='title'>Special Events & Promotional</p>
                <p id="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
            </Infor>
            
            <SliderContainer>
                <Slider {...sliderSettings}>
                    <EventPromotionCard src={socialPost} style={{ width: 250 }}></EventPromotionCard>
                    <EventPromotionCard src={socialPost} style={{ width: 250 }}></EventPromotionCard>
                    <EventPromotionCard src={socialPost} style={{ width: 250 }}></EventPromotionCard>
                    <EventPromotionCard src={socialPost} style={{ width: 250 }}></EventPromotionCard>
                    <EventPromotionCard src={socialPost} style={{ width: 250 }}></EventPromotionCard>
                    <EventPromotionCard src={socialPost} style={{ width: 250 }}></EventPromotionCard>
                </Slider>
            </SliderContainer>
            <Count>1</Count>
        </EventPromotionContainer>
    )
}

export default EventPromotion;