import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Nav from '../ui/Nav';

const StyledHero = styled.header`
  height: 570px;
  background: radial-gradient(
      ellipse at 103% 161%,
      #476fde 17%,
      rgba(255, 255, 255, 0) 40%
    ),
    linear-gradient(318deg, #f78ff0 0%, rgba(255, 255, 255, 0) 46%),
    linear-gradient(182deg, #d9deff 49%, rgba(255, 255, 255, 0) 79%),
    linear-gradient(243deg, #f1d1f8 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(18deg, #ff9670 39%, rgba(255, 255, 255, 0) 100%),
    radial-gradient(
      circle at 104% 148%,
      #a0289d 39%,
      rgba(255, 255, 255, 0) 84%
    );
  color: #314354;
`;

const Title = styled.h1`
  color: #131339;
  margin-bottom: 1.75rem;
  font-size: 36px;
`;

const Hero = () => (
  <StyledHero>
    <div className="container">
      <Nav />
      <Title>Hello there</Title>
      <p role="doc-subtitle">
        Hi, I'm Boonsuen. I'm a frontend developer with a focus on JavaScript
        (React and Node). I'm also interested in Rust and Serverless ecosystem.
      </p>
    </div>
  </StyledHero>
);

const HomePage: React.FC = () => (
  <Layout docTitle="Home | Boonsuen" footerTheme="LIGHT">
    <Hero />
  </Layout>
);

export default HomePage;
