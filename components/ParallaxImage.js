import { useRef, useLayoutEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import styles from './ParallaxImage.module.css';
import BigStar from './BigStar';

export default function ParallaxImage({ src, offsetAdd = 3, ...style }) {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(
    scrollY,
    [elementTop, elementTop + offsetAdd],
    [0, 1],
    {
      clamp: false,
    }
  );

  useLayoutEffect(
    () => {
      const element = ref.current;
      setElementTop(element.offsetTop);
    },
    [ref]
  );

  return (
    <div ref={ref} className="image-container">
      <motion.div className={styles.flickerEffect} style={{ ...style, y }}>
        <BigStar />
      </motion.div>
    </div>
  );
}
