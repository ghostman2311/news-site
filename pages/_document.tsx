import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Link from "next/link";

export default class MyDocument extends Document {
  static async getIntialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const OriginalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        OriginalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const intialProps = await Document.getInitialProps(ctx);

      return {
        ...intialProps,
        styles: (
          <>
            {intialProps.styles} {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="The Next generation of a news feed"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:wght@300;700&display=swap"
            rel="stylesheet"
          />
          {this.props.styles}
        </Head>
      </Html>
    );
  }
}
