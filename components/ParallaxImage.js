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
        <svg width={style.width} height={style.height} class="pattern-swatch">
          <defs>
            <pattern
              id="stars-1"
              patternUnits="userSpaceOnUse"
              width="232.54613mm"
              height="248.19379mm"
            >
              <BigStar />
            </pattern>
          </defs>
          <rect
            style={{ fill: 'url(#stars-1) #fff' }}
            x="0"
            y="0"
            height={style.height}
            width={style.width}
          />
        </svg>
      </motion.div>
    </div>
  );
}
