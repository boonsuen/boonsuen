import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Nav from '../ui/Nav';

const StyledHero = styled.header`
  height: 320px;
  background-color: #ffd3d3;
  color: #000;
`;

const Hero = () => (
  <StyledHero>
    <div className="container">
      <Nav />
      <h1>Drop a message</h1>
    </div>
  </StyledHero>
);

const SocialMedia = styled.div`
  width: 300px;
  height: 130px;
  margin: 58px 0 70px 0;
  padding: 30px 40px;
  background-color: #fafafa;

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

const ContactPage: React.FC = () => (
  <Layout docTitle="Contact | Boonsuen" footerTheme="DARK">
    <Hero />
    <div className="container">
      <SocialMedia>
        <h3>Social Media</h3>
        <div>
          <a
            href="https://github.com/boonsuen"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/github.svg" />
          </a>
          <a href="https://twitter.com/_wnxn" target="_blank" rel="noreferrer">
            <img src="/img/twitter.svg" />
          </a>
          <a
            href="https://www.producthunt.com/@boonsuen"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/producthunt.svg" />
          </a>
          <a
            href="https://instagram.com/_wnxn_"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/instagram.svg" />
          </a>
          <a
            href="https://facebook.com/boonsuen"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/facebook.svg" />
          </a>
        </div>
      </SocialMedia>
    </div>
  </Layout>
);

export default ContactPage;
