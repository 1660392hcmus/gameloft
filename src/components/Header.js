import React from 'react';
import StarRatings from 'react-star-ratings';
import {HeaderWrapper, Navbar, Hero, DownloadBar} from '../stylesheets/Header.style';
import logo from '../assets/icons/Gameloft_Logo_Flat_White_Line-01.svg';
import background from '../assets/images/background.jpg';
import nintedo from '../assets/icons/nintedo.png';
import microsoft from '../assets/icons/microsoft.png';
import steam from '../assets/icons/steam.png';
import mail from '../assets/icons/mail.svg';
import support from '../assets/icons/support.svg';
import share from '../assets/icons/share.svg';

const Header = () => {
  return (
      <HeaderWrapper>
          <Navbar>
            <a href="#">
                <img src={logo}></img>
            </a>
            <div className="topnav-right">
                <span>icon</span>
            </div>  
          </Navbar>

          <Hero background={background}>
                <div className="content">
                    <h1>Gameloft game</h1>
                    <div className="group-rating">
                        <span>Rating / Action | </span>
                        <StarRatings
                                rating={4}
                                starDimension='15px'
                                starRatedColor="yellow"
                                changeRating={true}
                                numberOfStars={5}
                                name='rating'
                        />
                    </div>
                    
                    <p className="content-game">Lorem ipsum dolor sit amet, consectetur adipiscinlus aem. Aliquam in nisi id lectus auctor mollis. Ut vel nibh venenatis, elementum nulla quis, iaculis quam. Etiam vel ornare metus. In fermentum enim elit.</p>
                </div>
                <div className="bottom-right">
                    <img src={share} />
                    <img src={mail} />
                    <img src={support} />
                </div>
          </Hero>

         <DownloadBar>
             <div className="container">
                <p>Download the latest version</p>
                <div className="download-group">
                    <img src={nintedo} />
                    <img src={microsoft} />
                    <img src={steam} />
                </div>
             </div>
         </DownloadBar>
         
      </HeaderWrapper>
  )
};

export default Header;
