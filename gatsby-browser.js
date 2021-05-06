const React = require("react");
const GlobalStyle = require("./src/components/GlobalStyle.css").default;
const { fontFaceRules } = require("./src/components/GlobalStyle.css");
const { Helmet } = require("react-helmet");

exports.wrapPageElement = ({ element, props }) => {
  return (
    <React.Fragment>
      <Helmet>
        <style>{fontFaceRules}</style>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PR31CLCPW1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PR31CLCPW1');`}
        </script>
      </Helmet>
      <GlobalStyle />
      {element}
    </React.Fragment>
  );
};