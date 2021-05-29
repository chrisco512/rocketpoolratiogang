import Head from 'next/head';
import Image from 'next/image';
import Collapsible from 'react-collapsible';
import { useState } from 'react';

import Links from '../components/Links';
import FAQ from '../components/FAQ';
import Megatron from '../components/Megatron';
import RangeSlider from '../components/RangeSlider';
import usePromise from '../lib/hooks/usePromise';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [result, error, isLoading] = usePromise(() =>
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=rocket-pool,ethereum&vs_currencies=eth%2Cusd`
    ).then(r => r.json())
  );

  let ethRatio, rplUsdPrice, ethUsdPrice;

  if (result && !isLoading) {
    ethRatio = result['rocket-pool'].eth.toFixed(6);
    rplUsdPrice = result['rocket-pool'].usd;
    ethUsdPrice = result['ethereum'].usd;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rocketpool Ratio Gang</title>
        <meta
          name="description"
          content="Rocketpool ratio gang. Decentralized Ethereum staking pool."
        />
        <link rel="icon" href="/rocketpooliconwithtexture.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.megatronContainer}>
          <Megatron
            isLoading={isLoading}
            result={result}
            rplUsdPrice={rplUsdPrice}
            ethRatio={ethRatio}
          />
        </div>
        <div
          style={{
            marginTop: 192,
            marginBottom: 192,
            width: '100%',
            maxWidth: 640,
          }}
        >
          <RangeSlider
            ethRatio={ethRatio}
            ethUsdPrice={ethUsdPrice}
            rplUsdPrice={rplUsdPrice}
            isLoading={isLoading}
            result={result}
          />
        </div>
        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <FAQ />
        </div>
        <div style={{ marginTop: 32, marginBottom: 32 }}>
          <Links />
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <strong>Tip jar:</strong> <code>TheRocketman.eth</code> or{' '}
          <code>0xa2586DCeD56534FFBC903ea314C6D022f7ba306E</code>
        </div>
        <div>
          This project is open-source. Source code available on{' '}
          <a
            href="https://github.com/chrisco255/rocketpoolratiogang"
            target="_blank"
          >
            GitHub
          </a>.
        </div>
      </footer>
    </div>
  );
}
