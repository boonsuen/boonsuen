import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Nav from '../ui/Nav';

const StyledHero = styled.header`
  height: 320px;
  /* background-color: #110F21; */
  background: conic-gradient(from -90deg at bottom center, papayawhip, peachpuff);
  color: #314354;
`;

const Hero = () => (
  <StyledHero>
    <div className="container">      
      <Nav />
      <h1>My Work</h1>
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
  justify-content: flex-start;
  width: 48%;
  padding: 32px;
  box-shadow: 0px 8px 18px rgb(25 25 25 / 0.1);
  margin-bottom: 30px;

  @media (max-width: 700px) {
    width: 100%;
  }

  h3, p, a {
    font-size: 16px;
  }

  a {
    margin-top: auto;
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
    border: 1px solid #303030;
    color: #303030;
    transition: all 0.25s;

    &:hover {
      color: #fff;
      background: #303030;
    }
  }
`;

const WorkPage = () => (
  <Layout docTitle="Work | Boonsuen" footerTheme="DARK">
    <Hero />
    <ProjectSection className="container">
      <h2>Small projects</h2>
      <Projects>
        <Project>
          <h3>Process Scheduling Solver</h3>
          <p>Generate gantt chart and calculation for CPU scheduling algorithms.</p>
          <a href="https://process-scheduling-solver.boonsuen.com" target="_blank" rel="noreferrer">Open</a>
        </Project>
        <Project>
          <h3>Hodler</h3>
          <p>A simple crypto price viewer.</p>
          <a href="https://hodler.boonsuen.com" target="_blank" rel="noreferrer">Open</a>
        </Project>    
        <Project>
          <h3>ticTacToe</h3>
          <p>A tic-tac-toe game.</p>
          <a href="https://tictactoe.boonsuen.com" target="_blank" rel="noreferrer">Open</a>
        </Project>
        <Project>
          <h3>Recurr</h3>
          <p>An android app to manage & track subscriptions.</p>
          <a href="https://github.com/boonsuen/recurr" target="_blank" rel="noreferrer">Open</a>
        </Project>
      </Projects>
    </ProjectSection>    
  </Layout>
);

export default WorkPage;
