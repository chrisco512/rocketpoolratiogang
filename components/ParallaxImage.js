import { useRef, useLayoutEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import styles from './ParallaxImage.module.css';
import BigStar from './BigStar';
import BigStar2 from './BigStar2';
import BigStar3 from './BigStar3';

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

  const y2 = useTransform(
    scrollY,
    [elementTop, elementTop + offsetAdd + 0.5],
    [0, 1.0],
    {
      clamp: false,
    }
  );

  const y3 = useTransform(
    scrollY,
    [elementTop, elementTop + offsetAdd - 0.9],
    [0, 1.0],
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
    <div
      ref={ref}
      className="image-container"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        overflow: 'hidden',
      }}
    >
      <motion.div
        className={styles.flickerEffect}
        style={{ ...style, y, position: 'absolute' }}
      >
        <svg
          width={style.width}
          height={style.height}
          className="pattern-swatch"
        >
          <defs>
            <pattern
              id="stars-1"
              patternUnits="userSpaceOnUse"
              width={1000}
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

      <motion.div
        className={styles.flickerEffect}
        style={{ ...style, y: y2, position: 'absolute' }}
      >
        <svg width={style.width} height={style.height}>
          <defs>
            <pattern
              id="stars-2"
              patternUnits="userSpaceOnUse"
              width={1000}
              height={667.094}
            >
              <BigStar2 />
            </pattern>
          </defs>
          <rect
            style={{ fill: 'url(#stars-2) #fff' }}
            x="0"
            y="0"
            height={style.height}
            width={style.width}
          />
        </svg>
      </motion.div>

      <motion.div
        className={styles.flickerEffect}
        style={{ ...style, y: y3, position: 'absolute' }}
      >
        <svg width={style.width} height={style.height}>
          <defs>
            <pattern
              id="stars-3"
              patternUnits="userSpaceOnUse"
              width={391}
              height={493}
            >
              <BigStar3 />
            </pattern>
          </defs>
          <rect
            style={{ fill: 'url(#stars-3) #fff' }}
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
