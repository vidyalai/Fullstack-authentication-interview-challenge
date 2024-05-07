import Head from 'next/head';
import React from 'react';

const App = ({ Component, pageProps }) => (
  <React.Fragment>
    <Head>
      <title>Fullstack Authentication Interview Challenge</title>
      {/* Use minimum-scale=1 to enable GPU rasterization */}
      <meta
        name={'viewport'}
        content={
          'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        }
      />
    </Head>
    <Component {...pageProps} />
  </React.Fragment>
);

export default App;
