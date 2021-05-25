import { useState, useEffect } from 'react';
import '../styles/globals.css';

import ParallaxImage from '../components/ParallaxImage';

function MyApp({ Component, pageProps }) {
  const [docHeight, setDocHeight] = useState('100%');

  // Used for background image size adjustments
  useEffect(() => {
    function setDocHeightToScrollHeight() {
      setDocHeight(window ? document.body.scrollHeight : '100%');
    }

    setDocHeightToScrollHeight();
    window.addEventListener('resize', setDocHeightToScrollHeight);

    return () =>
      window.removeEventListener('resize', setDocHeightToScrollHeight);
  }, []);

  return (
    <div>
      <ParallaxImage
        offsetAdd={4}
        top={0}
        left={0}
        width="100%"
        height={docHeight}
        position="absolute"
        zIndex={0}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
