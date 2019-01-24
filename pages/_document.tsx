import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html style={{ height: "100%" }}>
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
