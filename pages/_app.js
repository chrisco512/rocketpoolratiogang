import { useState, useEffect } from 'react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';

import '../styles/globals.css';

import ParallaxImage from '../components/ParallaxImage';

function MyApp({ Component, pageProps }) {
  const [docHeight, setDocHeight] = useState('100%');

  // Used for background image size adjustments
  useEffect(() => {
    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    const setDocHeightToClientHeight = debounce(clientHeight => {
      setDocHeight(clientHeight);
    }, 150);

    const resizeObserver = new ResizeObserver(entries => {
      setDocHeightToClientHeight(entries[0].target.clientHeight);
    });

    resizeObserver.observe(document.body);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <ParallaxImage
        offsetAdd={4}
        top={0}
        left={0}
        right={0}
        bottom={0}
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
