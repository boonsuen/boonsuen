import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from "../components/seo"

const StyledHero = styled.header`
  height: 320px;
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

    div {
      width: 0%;
      height: 1px;
      background-color: #fff;
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
      <h1>My work</h1>
    </div>
  </StyledHero>
);

const ProjectSection = styled.section`
  padding: 50px 0;

  h2 {
    font-size: 18px;
  }
`;

const Projects = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  height: 200px;
  padding: 32px;
  box-shadow: 0px 8px 18px rgb(25 25 25 / 0.1);
  margin-bottom: 30px;

  @media (max-width: 700px) {
    width: 100%;
  }

  h3, p, a {
    font-size: 16px;
  }

  h3 {
    margin-bottom: 8px;
  }

  a {
    display: inline-block;
    text-align: center;
    width: 100px;
    height: 40px;
    line-height: 38px;
    border: 1px solid;
    color: #303030;
    transition: all 0.25s;

    &:hover {
      color: #fff;
      background: #303030;
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

const WorkPage = () => (
  <>
    <SEO title="Work" />
    <Hero />
    <ProjectSection className="container">
      <h2>Small projects</h2>
      <Projects>
        <Project>
          <h3>Hodler</h3>
          <p>A simple crypto price viewer.</p>
          <a href="https://boonsuen.com/hodler/" target="_blank" rel="noreferrer">Open</a>
        </Project>      
        <Project>
          <h3>ticTacToe</h3>
          <p>A tic-tac-toe game.</p>
          <a href="https://boonsuen.com/tictactoe/" target="_blank" rel="noreferrer">Open</a>
        </Project>
        <Project>
          <h3>Recurr</h3>
          <p>An android app to manage & track subscriptions.</p>
          <a href="https://github.com/boonsuen/recurr" target="_blank" rel="noreferrer">Open</a>
        </Project>
      </Projects>
    </ProjectSection>
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

export default WorkPage;