import styled from 'styled-components';

type StyledFooterProps = {
  theme: FooterProps['theme'];
};

const StyledFooter = styled.footer<StyledFooterProps>`
  height: 225px;
  padding-top: 56px;
  background-color: ${(props) => (props.theme === 'DARK' ? '#000' : '#fff')};
  color: ${(props) => props.theme === 'DARK' && '#fff'};

  span {
    margin-right: 35px;
  }

  a {
    color: ${(props) => props.theme === 'DARK' ? '#B0B0B0' : '#0037c6'};
  }
`;

const FooterLinksWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export type FooterProps = {
  theme: 'LIGHT' | 'DARK';
};

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <StyledFooter theme={props.theme}>
      <div className="container">
        <span>Find me on</span>
        <FooterLinksWrapper>
          <a href="https://twitter.com/_wnxn" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a
            href="https://github.com/boonsuen"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://instagram.com/_wnxn_"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </FooterLinksWrapper>
      </div>
    </StyledFooter>
  );
};

export default Footer;
