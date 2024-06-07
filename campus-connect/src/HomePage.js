import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem; /* Adjust font size as needed */
  font-weight: bold;
  color: white;
`;

const NavLogoImage = styled.img`
  width: 60px; /* Adjust logo size as needed */
  height: auto;
  margin-right: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 1.2rem;
  &:hover {
    text-decoration: none;
  }
`;

const HomePageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://image.slidesdocs.com/responsive-images/background/blue-business-technology-elegant-line-business-flat-business-powerpoint-background_731bdfa2a9__960_540.jpg'); /* Update with your image path */
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(0.5);
`;

const BoxContainer = styled.div`
  position: absolute;
  top: 55%;
  right: 7%; /* Adjust right position as needed */
  transform: translateY(-50%);
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 450px; /* Adjust width as needed */
  height: 500px; /* Adjust height as needed */
`;

const Image = styled.img`
  width: 100%; /* Adjust size to fit container */
  height: 100%; /* Adjust size to fit container */
  border-radius: 10px; /* Ensure image follows container's border radius */
  object-fit: cover; /* Ensure image covers the container */
`;

const DescriptionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 5%; /* Adjust left position */
  transform: translateY(-50%);
  color: white;
  font-size: 1.2rem; /* Adjust font size as needed */
  text-align: left;
  max-width: calc(100% - (3% + 370px + 2rem)); /* Adjust maximum width */
`;

const ZigzagLine = styled.div`
  &:nth-child(odd) {
    text-align: center;
    width: 95%;
  }
  &:nth-child(even) {
    text-align: left;
    width: 110%;
  }
`;

const WelcomeHeader = styled.h2`
  text-align: center;
  color: white;
  font-size: 3.5rem; /* Adjust font size as needed */
  margin-bottom: 2rem; /* Adjust margin as needed */
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const IconLink = styled.a`
  color: white;
  margin: 0 1rem;
  font-size: 2rem;
  &:hover {
    color: #ff9900; /* Change hover color as needed */
  }
`;

const Content = () => {
  return (
    <HomePageContainer>
      <BackgroundImage />
      <NavBar>
        <NavLogo>
          <NavLogoImage src="https://i.pinimg.com/564x/b0/a0/fc/b0a0fc29c504a389c7eab5083dff0811.jpg" alt="Campus Connect Logo" /> {/* Update with your logo image path */}
          <span style={{ fontSize: '1.5rem' }}>Campus Connect</span> {/* Adjust font size as needed */}
        </NavLogo>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/register">Register</NavLink>
          <NavLink href="/login">Login</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/help">Help</NavLink>
        </NavLinks>
      </NavBar>
      <BoxContainer>
        <Image src="https://img.freepik.com/premium-photo/record-album-with-box-that-says-music-it_655090-82238.jpg" alt="Profile Image" />
        {/* Replace the src attribute with your image URL */}
      </BoxContainer>
      <DescriptionContainer>
        <WelcomeHeader>Welcome to Campus Connect</WelcomeHeader>
        <ZigzagLine>Our Campus Connect is a platform for the college students to buy, sell, and exchange items</ZigzagLine>
        <ZigzagLine>the campus community.Whether you're looking for textbooks, electronics, or </ZigzagLine>
        <ZigzagLine>furniture, Campus Connect provides a convenient and secure way to connect with fellow students.</ZigzagLine>
        <ZigzagLine>Join our vibrant community today and discover a new way to shop and interact with us.</ZigzagLine>
        <SocialMediaIcons>
          <IconLink href="https://www.linkedin.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink href="https://www.whatsapp.com" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} />
          </IconLink>
          <IconLink href="https://www.twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </IconLink>
          <IconLink href="https://www.instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </IconLink>
        </SocialMediaIcons>
      </DescriptionContainer>
    </HomePageContainer>
  );
};

export default Content;