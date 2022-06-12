import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 252px;
  padding: 75px 0;

  a {
    color: #314354;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 0%;
      height: 1px;
      background-color: #314354;
      transition: width 300ms;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const Nav: React.FC = () => (
  <StyledNav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/work">
      <a>Work</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </StyledNav>
);

export default Nav;