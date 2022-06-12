import Head from './Head';
import { GlobalStyle } from './GlobalStyle.css';
import Footer, { FooterProps } from '../ui/Footer';

type LayoutProps = {
  docTitle: string;
  footerTheme: FooterProps["theme"];
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Head {...props} />
      <GlobalStyle />
      {props.children}
      <Footer theme={props.footerTheme} />
    </>
  );
};

export default Layout;