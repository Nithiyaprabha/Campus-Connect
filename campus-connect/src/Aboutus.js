import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
import aboutus from './aboutus.jpg';

const slideImages = [
  'https://img.freepik.com/premium-photo/hands-library-return-books-learning-knowledge-research-academy-development-reading-people-giving-closeup-with-welcome-care-help-desk-with-receptionist-university_590464-221815.jpg',
  'https://i.pinimg.com/originals/7c/40/79/7c40790aadb7e9ca6d25fcfa46abe78b.jpg',
  'https://i.pinimg.com/736x/6d/da/9b/6dda9b2f0bca33259ca0d5e17e96e0ec.jpg',
];

const AboutUsContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-image: url(${aboutus}); /* Background image for the about us section */
  background-size: cover;
  background-position: center;
  color: white;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-top: 0px;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const SlideContainer = styled.div`
  width: 80%;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
`;

const EachSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const SlideText = styled.span`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 20px;
  font-size: 1.5rem;
  border-radius: 5px;
  // text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const AboutContent = styled.div`
  margin-top: 30px;
  font-size: 1.2rem;
  line-height: 1.8;
  color: white;
  
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  color:white;
`;

const Section = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: black;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const VisionTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: black;
`;

const VisionContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: black;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Title>About CampusConnect</Title>
      
      <SlideContainer>
        <Slide easing="ease">
          {slideImages.map((image, index) => (
            <EachSlide key={index} style={{ backgroundImage: `url(${image})` }}>
              <SlideText>{/* Add any text if needed */}</SlideText>
            </EachSlide>
          ))}
        </Slide>
      </SlideContainer>
      <AboutContent>
        <Paragraph>
          Welcome to CampusConnect! We are your go-to platform for exchanging items within the college community.
          Whether you are looking to buy, sell, or trade items like textbooks, electronics, or even dorm essentials, 
          CampusConnect makes it easy and convenient. Our mission is to foster a sustainable and connected campus 
          where students can easily find what they need and reduce waste by giving preloved items a new home.
        </Paragraph>
        <Paragraph>
          Join us in building a vibrant community where everything you need is just a click away. Together, we can make 
          our campus more sustainable and connected. Start exploring today and see what your peers have to offer!
        </Paragraph>
      </AboutContent>
      <Section>
        <VisionTitle>Our Vision</VisionTitle>
        <VisionContent>
          <Paragraph>
            At CampusConnect, our vision is to create a sustainable, eco-friendly campus environment where students can 
            thrive both academically and socially. We believe that by facilitating the exchange of goods within the 
            community, we can reduce waste, save money, and promote a culture of sharing and support among students.
          </Paragraph>
          <Paragraph>
            We aim to become the leading platform for campus exchanges, known for our reliability, ease of use, and 
            commitment to sustainability. Through continuous innovation and user feedback, we strive to enhance our 
            services and expand our reach to campuses nationwide.
          </Paragraph>
        </VisionContent>
      </Section>
      <Section>
        <VisionTitle>Meet Our Team</VisionTitle>
        <VisionContent>
          <Paragraph>
            Our team is composed of passionate individuals dedicated to making campus life better for everyone. From 
            our developers who bring the platform to life, to our support staff who ensure everything runs smoothly, 
            each member of CampusConnect plays a crucial role in our success.
          </Paragraph>
          <Paragraph>
            We believe in the power of collaboration and are always open to ideas and feedback from our users. If you 
            have any suggestions or would like to get involved, don't hesitate to reach out to us!
          </Paragraph>
        </VisionContent>
      </Section>
    </AboutUsContainer>
  );
};

export default AboutUs;