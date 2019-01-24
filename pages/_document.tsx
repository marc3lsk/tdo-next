import Document, { Head, Main, NextScript } from "next/document";

const htmlStyle = {
  height: "100%"
};

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html style={htmlStyle}>
        <Head />
        <body>
          <style jsx>
            {`
              body {
                height: 100%;
                padding: 0;
                margin: 0;
              }
            `}
          </style>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
