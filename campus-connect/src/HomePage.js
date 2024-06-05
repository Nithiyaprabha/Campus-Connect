import React from 'react';
import styled from 'styled-components';

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
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #2d72d9;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-left: 1rem;
  &:hover {
    background-color: #1a5bb8;
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
  background-image: url('https://i.pinimg.com/564x/54/87/a3/5487a3c99c2ec8b3bf6ab40efc1b6235.jpg'); /* Update with your image path */
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(0.5);
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const HeroSection = styled.div`
  max-width: 800px;
  margin: auto;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <BackgroundImage />
      <Content>
        <NavBar>
          <NavLogo>Campus Connect</NavLogo>
          <NavLinks>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/help">Help</NavLink>
          </NavLinks>
          <ButtonContainer>
            <Button href="/register">Sign Up</Button>
            <Button href="/login">Sign In</Button>
          </ButtonContainer>
        </NavBar>
        <HeroSection>
          <HeroTitle>Welcome to Campus Connect!</HeroTitle>
          <HeroSubtitle>Connect with fellow students and explore your campus community.</HeroSubtitle>
        </HeroSection>
      </Content>
    </HomePageContainer>
  );
};

export default HomePage;
