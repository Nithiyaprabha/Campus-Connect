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
    text-decoration: underline;
  }
`;

const AboutUsPageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 70px; /* Adjust for fixed navbar */
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://i.pinimg.com/564x/54/87/a3/5487a3c99c2ec8b3bf6ab40efc1b6235.jpg'); /* Update with your image path */
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(0.7);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem; /* Adjust font size as needed */
  color: white;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem; /* Adjust font size as needed */
  color: white;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem; /* Adjust font size as needed */
  color: white;
  line-height: 1.6;
  margin-bottom: 2rem;
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

const AboutUs = () => {
  return (
    <AboutUsPageContainer>
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
          <NavLink href="/aboutus">About Us</NavLink>
          <NavLink href="/help">Help</NavLink>
        </NavLinks>
      </NavBar>
      <ContentContainer>
        <Title>About Us</Title>
        <SectionTitle>Our Mission</SectionTitle>
        <Description>
          Our mission is to create a secure and convenient platform for college students to buy, sell, and exchange items within the campus community. We aim to foster a vibrant and supportive environment where students can find what they need and connect with their peers.
        </Description>
        <SectionTitle>Our Vision</SectionTitle>
        <Description>
          We envision a connected campus where students have easy access to resources and can support each other through the exchange of goods and services. Campus Connect strives to be the go-to platform for students to fulfill their needs and enhance their campus experience.
        </Description>
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
      </ContentContainer>
    </AboutUsPageContainer>
  );
};

export default AboutUs;
