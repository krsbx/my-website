import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { LandingPage } from 'src/components/pageComponents';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Augmented Reality on Web</title>
        <meta name="description" content="Developed by KRSBX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </React.Fragment>
  );
};

export default Home;
