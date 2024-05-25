// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
// import styled from 'styled-components';


// const slideImages = [
//   'https://img.freepik.com/premium-photo/hands-library-return-books-learning-knowledge-research-academy-development-reading-people-giving-closeup-with-welcome-care-help-desk-with-receptionist-university_590464-221815.jpg',
//   'https://i.pinimg.com/originals/7c/40/79/7c40790aadb7e9ca6d25fcfa46abe78b.jpg',
//   'https://i.pinimg.com/736x/6d/da/9b/6dda9b2f0bca33259ca0d5e17e96e0ec.jpg',
// ];

// const AboutUsContainer = styled.div`
//   text-align: center;
//   padding: 50px;
//   background-color: lightgrey;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   margin-top: 0px;
//   color: #333;
// `;

// const SlideContainer = styled.div`
//   width: 60%;
//   margin: auto;
// `;

// const EachSlide = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 500px; /* Decreased height */
//   background-size: cover;
//   background-position: center;
// `;

// const SlideText = styled.span`
//   background: rgba(0, 0, 0, 0.5);
//   color: black;
//   padding: 10px 20px;
//   font-size: 1.2rem;
// `;

// const AboutContent = styled.div`
//   margin-top: 20px;
//   font-size: 1.1rem;
//   line-height: 1.6;
//   color: black;
// `;

// const Paragraph = styled.p`
//   margin-bottom: 15px;
// `;

// const VisionSection = styled.div`
//   margin-top: 40px;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   text-align: left;
// `;

// const VisionTitle = styled.h3`
//   font-size: 2rem;
//   margin-bottom: 10px;
//   color: #333;
// `;

// const VisionContent = styled.div`
//   font-size: 1.1rem;
//   line-height: 1.6;
//   color: #333;
// `;

// const TeamSection = styled.div`
//   margin-top: 40px;
//   padding: 20px;
//   background-color: #f5f5f5;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   text-align: left;
// `;

// const TeamTitle = styled.h3`
//   font-size: 2rem;
//   margin-bottom: 10px;
//   color: #333;
// `;

// const TeamContent = styled.div`
//   font-size: 1.1rem;
//   line-height: 1.6;
//   color: #333;
// `;

// const AboutUs = () => {
//   return (
//     <AboutUsContainer>
//       <Title >About CampusConnect</Title>
      
//       <SlideContainer>
//         <Slide easing="ease">
//           {slideImages.map((image, index) => (
//             <EachSlide key={index} style={{ backgroundImage: `url(${image})` }}>
              
//             </EachSlide>
//           ))}
//         </Slide>
//       </SlideContainer>
//       <AboutContent>
//         <Paragraph>
//           Welcome to CampusConnect! We are your go-to platform for exchanging items within the college community.
//           Whether you are looking to buy, sell, or trade items like textbooks, electronics, or even dorm essentials, 
//           CampusConnect makes it easy and convenient. Our mission is to foster a sustainable and connected campus 
//           where students can easily find what they need and reduce waste by giving preloved items a new home.
//         </Paragraph>
//         <Paragraph>
//           Join us in building a vibrant community where everything you need is just a click away. Together, we can make 
//           our campus more sustainable and connected. Start exploring today and see what your peers have to offer!
//         </Paragraph>
//       </AboutContent>
//       <VisionSection>
//         <VisionTitle>Our Vision</VisionTitle>
//         <VisionContent>
//           <Paragraph>
//             At CampusConnect, our vision is to create a sustainable, eco-friendly campus environment where students can 
//             thrive both academically and socially. We believe that by facilitating the exchange of goods within the 
//             community, we can reduce waste, save money, and promote a culture of sharing and support among students.
//           </Paragraph>
//           <Paragraph>
//             We aim to become the leading platform for campus exchanges, known for our reliability, ease of use, and 
//             commitment to sustainability. Through continuous innovation and user feedback, we strive to enhance our 
//             services and expand our reach to campuses nationwide.
//           </Paragraph>
//         </VisionContent>
//       </VisionSection>
//       <TeamSection>
//         <TeamTitle>Meet Our Team</TeamTitle>
//         <TeamContent>
//           <Paragraph>
//             Our team is composed of passionate individuals dedicated to making campus life better for everyone. From 
//             our developers who bring the platform to life, to our support staff who ensure everything runs smoothly, 
//             each member of CampusConnect plays a crucial role in our success.
//           </Paragraph>
//           <Paragraph>
//             We believe in the power of collaboration and are always open to ideas and feedback from our users. If you 
//             have any suggestions or would like to get involved, don't hesitate to reach out to us!
//           </Paragraph>
//         </TeamContent>
//       </TeamSection>
//     </AboutUsContainer>
//   );
// };

// export default AboutUs;

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';

const slideImages = [
  'https://img.freepik.com/premium-photo/hands-library-return-books-learning-knowledge-research-academy-development-reading-people-giving-closeup-with-welcome-care-help-desk-with-receptionist-university_590464-221815.jpg',
  'https://i.pinimg.com/originals/7c/40/79/7c40790aadb7e9ca6d25fcfa46abe78b.jpg',
  'https://i.pinimg.com/736x/6d/da/9b/6dda9b2f0bca33259ca0d5e17e96e0ec.jpg',
];

const AboutUsContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-color: lightgrey;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-top: 0px;
  color: black; /* Updated to black */
`;

const SlideContainer = styled.div`
  width: 60%;
  margin: auto;
`;

const EachSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-size: cover;
  background-position: center;
`;

const SlideText = styled.span`
  background: rgba(0, 0, 0, 0.5);
  color: black;
  padding: 10px 20px;
  font-size: 1.2rem;
`;

const AboutContent = styled.div`
  margin-top: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: black; /* Updated to black */
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  color: black; /* Updated to black */
`;

const VisionSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const VisionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
  color: black; /* Updated to black */
`;

const VisionContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: black; /* Updated to black */
`;

const TeamSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const TeamTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
  color: black; /* Updated to black */
`;

const TeamContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: black; /* Updated to black */
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
      <VisionSection>
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
      </VisionSection>
      <TeamSection>
        <TeamTitle>Meet Our Team</TeamTitle>
        <TeamContent>
          <Paragraph>
            Our team is composed of passionate individuals dedicated to making campus life better for everyone. From 
            our developers who bring the platform to life, to our support staff who ensure everything runs smoothly, 
            each member of CampusConnect plays a crucial role in our success.
          </Paragraph>
          <Paragraph>
            We believe in the power of collaboration and are always open to ideas and feedback from our users. If you 
            have any suggestions or would like to get involved, don't hesitate to reach out to us!
          </Paragraph>
        </TeamContent>
      </TeamSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
