import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';

import styles from './RangeSlider.module.css';
import image from 'next/image';

function MilestoneTippy({
  ethUsdPrice,
  milestoneRatio,
  content,
  maxRatio = 0.03,
  sliderThumbWidth = 125,
}) {
  const milestonePercentage = milestoneRatio / maxRatio * 100;

  return (
    <Tippy
      content={
        <div>
          <div>Ξ{milestoneRatio.toFixed(6)}</div>
          <div style={{ color: '#DBC206' }}>
            (${(ethUsdPrice * milestoneRatio).toFixed(2)})
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {content}
          </div>
        </div>
      }
      theme="tomato"
      visible={true}
      placement="bottom"
      interactive={true}
      offset={[0, 60]}
      moveTransition="none"
      popperOptions={{
        strategy: 'fixed',
        modifiers: [
          { name: 'flip', options: { fallbackPlacements: ['bottom'] } },
        ],
      }}
    >
      <div
        className="milestone"
        style={{
          position: 'absolute',
          left: `calc(${milestonePercentage}% - ${-(sliderThumbWidth / 2) +
            sliderThumbWidth * (milestonePercentage / 100)}px + 5px)`,
        }}
      />
    </Tippy>
  );
}

function MilestoneTippyReaction({ imageUrl = '/kekwemote.png' }) {
  return (
    <div
      style={{
        height: 32,
        width: 32,
        margin: 4,
        borderRadius: 5,
        border: '1px solid #91B3F2',
        backgroundColor: '#3674E7',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}

function ThumbTippy({
  touched,
  ethRatio,
  sliderTwoRatio,
  rplUsdPrice,
  ethUsdPrice,
  reset,
  isLoading,
  result,
  sliderTwoPercentage,
}) {
  return (
    <Tippy
      content={
        <div>
          <div>Ξ{!touched ? ethRatio : sliderTwoRatio.toFixed(6)}</div>
          <div style={{ color: '#DBC206' }}>
            (${!touched
              ? rplUsdPrice
              : (ethUsdPrice * sliderTwoRatio).toFixed(2)})
          </div>
          {touched ? (
            <div>
              <button onClick={reset}>Reset Meter</button>
            </div>
          ) : (
            <div>{`We're here.`}</div>
          )}
        </div>
      }
      theme={touched ? 'greentomato' : 'tomato'}
      offset={[0, 30]}
      visible={!isLoading && result}
      placement="top"
      interactive={true}
      moveTransition="none"
      popperOptions={{
        strategy: 'fixed',
        modifiers: [{ name: 'flip', options: { fallbackPlacements: ['top'] } }],
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: `calc(${sliderTwoPercentage}% - ${-67.5 +
            125 * (sliderTwoPercentage / 100)}px)`,
        }}
      />
    </Tippy>
  );
}

export default function RangeSlider({
  maxRatio = 0.03,
  ethRatio = 0,
  ethUsdPrice,
  rplUsdPrice,
  isLoading = true,
  result,
}) {
  const [sliderTwo, setSliderTwo] = useState(ethRatio * 1000);
  const [touched, setTouched] = useState(false);

  let sliderTwoRatio = sliderTwo / 1000;
  let sliderTwoPercentage = sliderTwo / 30 * 100;

  function reset() {
    setSliderTwo(ethRatio * 1000);
    setTouched(false);
  }

  useEffect(
    () => {
      setSliderTwo(ethRatio * 1000);
      sliderTwoRatio = sliderTwo / 1000;
      sliderTwoPercentage = sliderTwo / 30 * 100;
    },
    [ethRatio, ethUsdPrice, rplUsdPrice]
  );

  return (
    <div className={styles.slideContainer}>
      <MilestoneTippy
        milestoneRatio={0.002}
        ethUsdPrice={ethUsdPrice}
        content={<MilestoneTippyReaction imageUrl="/wutface.png" />}
        maxRatio={maxRatio}
      />

      <MilestoneTippy
        milestoneRatio={0.015}
        ethUsdPrice={ethUsdPrice}
        content={<MilestoneTippyReaction imageUrl="/lulface.png" />}
        maxRatio={maxRatio}
      />

      <MilestoneTippy
        milestoneRatio={0.028}
        ethUsdPrice={ethUsdPrice}
        content={<MilestoneTippyReaction imageUrl="/kekwemote.png" />}
        maxRatio={maxRatio}
      />

      <ThumbTippy
        touched={touched}
        ethRatio={ethRatio}
        sliderTwoRatio={sliderTwoRatio}
        rplUsdPrice={rplUsdPrice}
        ethUsdPrice={ethUsdPrice}
        reset={reset}
        isLoading={isLoading}
        result={result}
        sliderTwoPercentage={sliderTwoPercentage}
      />

      <input
        className={styles.slider}
        type="range"
        min={0}
        max={30}
        step={0.00001}
        value={sliderTwo}
        style={{
          backgroundImage: `url(/exhaust.svg)`,
          backgroundSize: `calc(${sliderTwoPercentage}% + ${
            sliderTwoPercentage < 50 ? 5 : -5
          }px) 100%`,
          backgroundPosition: '0px center',
          backgroundRepeat: 'no-repeat',
        }}
        onChange={({ target: { value: radius } }) => {
          setSliderTwo(radius);
          setTouched(true);
        }}
      />
    </div>
  );
}
