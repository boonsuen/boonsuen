import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';

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

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 252px;
  padding: 75px 0;

  a {
    color: #314354;
  
    div {
      width: 0%;
      height: 1px;
      background-color: #314354;
      transition: width 300ms;
    }

    &:hover div {
      width: 100%;
    }
  }
`;

const Title = styled.h1`
  color: #131339;
  margin-bottom: 1.75rem;
  font-size: 36px;
`;

const Hero = () => (
  <StyledHero>
    <div className="container">      
      <Nav>
        <Link to="/">Home<div></div></Link>
        <Link to="/work/">Work<div></div></Link>
        <Link to="/contact/">Contact<div></div></Link>
      </Nav>
      <Title>Hello there</Title>
      <p role="doc-subtitle">
        Hi, I'm Boonsuen. I'm a frontend developer with a focus on JavaScript (React and Node). I'm also interested in Rust and Serverless ecosystem.
      </p>
    </div>
  </StyledHero>
);

const Footer = styled.footer`
  height: 225px;
  padding-top: 56px;

  span {
    margin-right: 35px;
  }

  a {
    color: #0037C6;
  }
`;

const FooterLinksWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Footer className="container">
      <span>Find me on</span>
      <FooterLinksWrapper>
        <a href="https://twitter.com/_wnxn" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://github.com/boonsuen" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://instagram.com/_wnxn_" target="_blank" rel="noreferrer">Instagram</a>
      </FooterLinksWrapper>      
    </Footer>
  </>
);

export default IndexPage;