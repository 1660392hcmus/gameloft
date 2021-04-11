import React from 'react';
import { SocialGroup } from '../stylesheets/CommunityHub.style';
import { FooterContainer, GroupLeft, GroupRight, LogoContainer, UpperContainer, BottomContainer, Social } from '../stylesheets/Footer.style';
import gameloftIcon from '../assets/icons/Gameloft_Logo.svg';
import fbIcon from '../assets/icons/fb-footer.svg';
import inIcon from '../assets/icons/linkedin-footer.svg';
import twIcon from '../assets/icons/twitter-footer.svg';
import ytIcon from '../assets/icons/youtube-footer.svg';

const logoSrc = "https://getlogovector.com/wp-content/uploads/2020/05/gameloft-logo-vector.png";
const Footer = () => {
  return (
    <FooterContainer>
      <UpperContainer>
        <GroupLeft>
          <LogoContainer>
            <img src={logoSrc} />
            <img src={logoSrc} />
            <img src={logoSrc} />
            <img src={logoSrc} />
            <img src={logoSrc} />
            <img src={logoSrc} />
            <img src={logoSrc} />
            <img src={logoSrc} />
            <img src={logoSrc} />
          </LogoContainer>

            <p>FOLLOW US</p>
          <Social>
            <img src={fbIcon} id="fb"></img>
            <img src={inIcon}></img>
            <img src={twIcon}></img>
            <img src={ytIcon}></img>
          </Social>

          <select id="country" name="country">
              <option value="" disabled selected>Flatform</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
        </GroupLeft>
        <GroupRight>
          <p className="title">VISIT</p>
          <p>Gameloft Games </p>
          <p>Gameloft Careers </p>
          <p>Gameloft News </p>
          <p>Gameloft Forum </p>
          <p>Gameloft Corporate </p>
          <p>Gameloft Advertising </p>
          <p>Gameloft Support </p>

          <p className="title">LEGAL </p>
          <p>Terms of Use </p>
          <p>Privacy Policy </p>
          <p>Cookies Policy </p>
          <p>EULA </p>
          <p>Legal Notices </p>
          <p>Event Rules </p>
          <p>Business Contacts </p>
        </GroupRight>
      </UpperContainer>

      <BottomContainer>
        <hr class="new1" />
        <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries.</p>
        <p>All other trademarks are the property of their respective owners.</p>
      </BottomContainer>
      
    </FooterContainer>
  );
};

export default Footer;
