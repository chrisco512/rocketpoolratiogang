import '../styles/globals.css';

import ParallaxImage from '../components/ParallaxImage';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ParallaxImage
        src="/bigstars.svg"
        offsetAdd={4}
        top={0}
        left={0}
        width="100%"
        height="100%"
        position="absolute"
        zIndex={0}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
