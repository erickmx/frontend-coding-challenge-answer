import React from 'react';

import Document, { Head, Main, NextScript } from 'next/document';

export default class BaseDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <title>Camper vans</title>
        <Head>
          <meta
            name="description"
            content="page application demo to show a challenge doing this responsive site"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
