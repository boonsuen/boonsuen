import Head from 'next/head';
import { fontFaceRules } from './GlobalStyle.css';

type DocHeadProps = {
  docTitle: string;
};

const DocHead = (props: DocHeadProps) => (
  <Head>
    <title>{props.docTitle}</title>
    <link rel="icon" href="/img/icon.svg" />
    <meta property="og:title" content={props.docTitle} />
    <meta property="og:url" content="https://boonsuen.com/" />
    <style
      dangerouslySetInnerHTML={{
        __html: fontFaceRules,
      }}
    ></style>
  </Head>
);

export default DocHead;
