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
      style={{ ...style, overflow: 'hidden' }}
    >
      {/* <motion.div style={{ ...style, y: 0, position: 'absolute' }}>
        <svg
          width={style.width}
          height={style.height}
          viewBox="0 0 232.54613 248.19379"
          version="1.1"
          className="pattern-swatch"
        >
          <defs>
            <pattern id="milkystuff" patternUnits="userSpaceOnUse">
              <svg
                width={1000}
                height="248.19379mm"
                viewBox="0 0 232.54613 248.19379"
                version="1.1"
              >
                <g id="layer1" transform="translate(59.576632,40.942136)">
                  <path
                    d="m 172.96949,106.72629 v 11.46669 c -8.15587,0.81069 -12.65519,1.59068 -23.06108,4.27708 -4.97276,1.28341 -24.88883,4.94806 -27.60627,6.89998 -7.112,5.10681 3.85304,12.75433 8.49594,14.89816 13.37028,6.17397 27.53537,11.38696 42.17141,12.05512 v 26.9674 c -1.48766,-0.43847 -3.02753,-0.98665 -4.63585,-1.66726 -13.43589,-5.68072 -24.01217,-7.7541 -38.5946,-7.82564 -15.82737,-0.0787 -20.03213,-6.63716 -31.093125,-14.80891 -5.591881,-4.13138 -11.615562,-3.73027 -18.288001,-4.04459 -17.929226,2.54917 -36.656788,20.62582 -50.647603,22.47155 -19.472629,2.56784 -26.3740213,-4.04992 -47.859953,6.8694 -16.304402,7.4961 -24.765002,-1.11802 -41.050647,-4.98299 -0.11975,-0.0282 -0.248461,-0.0576 -0.376343,-0.0872 v -10.5205 c 7.236506,0.60042 14.196142,1.46113 20.377056,2.60561 14.833213,2.7449 26.895109,-1.9783 36.7661848,-13.46658 8.514645,-9.90918 10.5614618,-19.09975 -1.6894529,-26.45763 -23.5803029,-14.16403 -28.2117469,-10.3438 -53.2808959,-2.74567 -0.747448,0.22648 -1.469954,0.43956 -2.172892,0.6417 v -28.73693 c 2.438576,0.67487 4.748858,1.16276 6.848592,1.39418 13.598173,1.50072 23.148009,0.48437 37.650034,3.31647 12.9264842,2.52483 18.7638985,2.73297 31.783516,3.58281 l 4.304595,0.28046 c 30.987296,2.51354 36.136794,0.70555 64.930518,-5.16467 9.910586,-2.02107 16.834207,-2.80317 26.751847,-0.13653 11.28748,3.49003 15.07349,3.2124 26.7843,2.13113 16.91323,-1.67181 22.03521,-2.91288 33.49272,0.7874 z m 0,-107.9373029 V 11.323888 c -9.14717,-6.5722505 -16.14311,-12.15425363 -30.21788,-5.7344032 -16.28176,7.4270312 -24.6052,9.8834232 -41.7509,14.6395732 -3.645256,1.011414 -21.434077,6.048023 -14.392632,12.568415 6.785328,6.282619 26.232912,-2.798234 34.165122,-5.153026 13.70824,-4.069997 34.13936,-5.64515 47.34101,1.078442 1.67993,0.855486 3.29389,1.645003 4.85528,2.367492 V 49.358274 C 148.87618,52.083482 156.44044,31.015592 117.97814,47.862496 105.36139,53.38876 93.155281,61.080374 79.190219,60.460897 71.951219,60.139516 61.516404,59.492522 55.429576,55.258835 44.953134,41.900904 48.269598,39.867845 30.502297,31.432575 13.72736,23.467911 4.5061009,35.975295 -12.408536,40.628787 l -2.648303,0.728839 c -12.913784,3.205339 -28.415194,3.692525 -44.519793,3.11397 V 25.929242 c 6.103737,-1.21285 12.216459,-2.532592 17.754647,-3.777898 4.525751,-1.018117 12.074385,-2.120194 12.880376,-7.561792 C -29.534981,10.365391 -46.946894,5.2592848 -59.576632,2.8025402 V -11.361841 c 40.716848,12.8859144 55.4890657,-0.351719 95.702913,-6.503811 20.674895,-3.162653 48.228605,-6.213123 67.730869,3.528836 10.21362,5.10152 5.07047,9.5465203 -3.1944,10.5974446 C 85.236478,-1.777574 77.380469,-5.3046458 60.097532,0.1496511 38.513175,6.9614376 47.247601,11.081177 62.462202,10.640557 71.735319,10.371388 79.846033,9.2238017 89.604926,9.1592433 c 16.623244,-0.0889 25.580274,0.449439 38.569904,-11.2917118 9.3659,-8.0683805 24.55333,-12.2971275 35.7946,-5.897033 3.11079,1.7709446 6.07095,4.2026412 9.00006,6.8184886 v 0"
                    style={{
                      fill: '#404148',
                      fillOpacity: 1,
                      fillRule: 'evenodd',
                      stroke: 'none',
                      strokeWidth: 0.0352778,
                    }}
                    id="path6751"
                  />
                </g>
              </svg>
            </pattern>
          </defs>
          <rect
            style={{ fill: 'url(#milkystuff)' }}
            x="0"
            y="0"
            height={style.height}
            width={style.width}
          />
        </svg>
      </motion.div> */}
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
