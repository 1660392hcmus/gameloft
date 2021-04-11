import React, { useState } from 'react';
import { GameContentContainer, ImageWrapper, Infor } from '../stylesheets/GameContent.style';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import arrowIcon from '../assets/icons/arrow.svg';
import gamehub2 from '../assets/images/gamehub-2.jpg';
import gamehub3 from '../assets/images/gamehub-3.jpg';
import gamehub4 from '../assets/images/gamehub-4.jpg';
import gamehub5 from '../assets/images/gamehub-5.jpg';
import downloadIcon from '../assets/icons/download.svg';

const listImg = [
    {
        id: 1,
        src: gamehub2,
        name: 'gamehub2',
    },
    {
        id: 2,
        src: gamehub3,
        name: 'gamehub3',
    },
    {
        id: 3,
        src: gamehub4,
        name: 'gamehub4',
    },
    {
        id: 4,
        src: gamehub5,
        name: 'gamehub5',
    },
];

const GameContent = () => {
    const customeSlider = React.useRef();
    const [counterSlider, setCounterSlider] = React.useState(1);
    const [sliderSettings, setSliderSettings] = React.useState({
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
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

    const gotoNext = () => {
        let counter = counterSlider;
        counter++;
        if(counter > listImg.length){
            return;
        }
        setCounterSlider(counter);
        customeSlider.current.slickNext()
    }

    const gotoPrev = () => {
        let counter = counterSlider;
        counter--;
        if(counter < 1){
            return;
        }
        setCounterSlider(counter);
        customeSlider.current.slickPrev()
    }
    return (
        <GameContentContainer>
            <Infor>
                <p id='title'>Exclusive Game Content</p>
                <p id="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
            </Infor>
            <Slider {...sliderSettings} ref={customeSlider}>
                {listImg.map(img => 
                    <ImageWrapper>
                        <div class="topright">
                            <a href={img.src} download={img.name}>
                                <img src={downloadIcon} />
                            </a>
                        </div>
                        <img src={img.src} />
                    </ImageWrapper>
                )}
            </Slider>
            <div className="wrapper-button">
                <img id="prev" src={arrowIcon} onClick={()=>gotoPrev()}/>
                <p>{counterSlider}/{listImg.length}</p>
                <img src={arrowIcon} onClick={()=>gotoNext()}/>
            </div>
        </GameContentContainer>
    )
}

export default GameContent;