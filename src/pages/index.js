import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';

const StyledHero = styled.header`
  height: 570px;
  background-color: #110F21;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 252px;
  padding: 75px 0;

  a {
    color: #fff;
  }
`;

const Name = styled.h1`
  margin-bottom: 1.75rem;
  font-size: 36px;
`;

const Hero = () => (
  <StyledHero>
    <div className="container">      
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/work/">Work</Link>
        <Link to="/contact/">Contact</Link>
      </Nav>
      <Name>Boonsuen Oh</Name>
      <p role="doc-subtitle">
        Hi, I'm Boonsuen. I'm a frontend developer focusing on JavaScript (React and Node). I'm also interested in Rust and Serverless technology.
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
        <a href="https://facebook.com/boonsuen" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://instagram.com/_wnxn_" target="_blank" rel="noreferrer">Instagram</a>
      </FooterLinksWrapper>      
    </Footer>
  </>
);

export default IndexPage;