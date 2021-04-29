import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from "../components/seo"

import img_github from '../assets/img/github.svg';
import img_twitter from '../assets/img/twitter.svg';
import img_producthunt from '../assets/img/producthunt.svg';
import img_instagram from '../assets/img/instagram.svg';
import img_facebook from '../assets/img/facebook.svg';

const StyledHero = styled.header`
  height: 320px;
  background-color: #FFD3D3;
  color: #000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 252px;
  padding: 75px 0;

  a {
    color: #000;

    div {
      width: 0%;
      height: 1px;
      background-color: #000;
      transition: width 300ms;
    }

    &:hover div {
      width: 100%;
    }
  }
`;

const Hero = () => (
  <StyledHero>
    <div className="container">      
      <Nav>
        <Link to="/">Home<div></div></Link>
        <Link to="/work/">Work<div></div></Link>
        <Link to="/contact/">Contact<div></div></Link>
      </Nav>
      <h1>Drop a message</h1>
    </div>
  </StyledHero>
);

const SocialMedia = styled.div`
  width: 300px;
  height: 130px;
  margin: 58px 0 70px 0;
  padding: 30px 40px;
  background-color: #FAFAFA;
  
  h3 {
    font-weight: 400;
    font-size: 16px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & img {
      margin: 0;
    }
  }
`;

const Footer = styled.footer`
  height: 225px;
  padding-top: 56px;
  background-color: #000;
  color: #fff;

  span {
    margin-right: 35px;
  }

  a {
    color: #B0B0B0;
  }
`;

const FooterLinksWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <Hero />    
    <div className="container">
      <SocialMedia>
        <h3>Social Media</h3>
        <div>
          <a href="https://github.com/boonsuen" target="_blank" rel="noreferrer">
            <img src={img_github} />
          </a>
          <a href="https://twitter.com/_wnxn" target="_blank" rel="noreferrer">
            <img src={img_twitter} />
          </a>
          <a href="https://www.producthunt.com/@boonsuen" target="_blank" rel="noreferrer">
            <img src={img_producthunt} />
          </a>
          <a href="https://instagram.com/_wnxn_" target="_blank" rel="noreferrer">
            <img src={img_instagram} />
          </a>
          <a href="https://facebook.com/boonsuen" target="_blank" rel="noreferrer">
            <img src={img_facebook} />
          </a>
        </div>      
      </SocialMedia>
    </div>
    <Footer>
      <div className="container">
        <span>Find me on</span>
        <FooterLinksWrapper>
          <a href="https://twitter.com/_wnxn" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://facebook.com/boonsuen" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com/_wnxn_" target="_blank" rel="noreferrer">Instagram</a>
        </FooterLinksWrapper>      
      </div>
    </Footer>
  </>
);

export default ContactPage;