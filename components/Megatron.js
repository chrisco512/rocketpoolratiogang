import styles from './Megatron.module.css';

export default function Megatron({ isLoading, result, rplUsdPrice, ethRatio }) {
  return (
    <div className={styles.megatron}>
      <div className={styles.titleContainer}>
        <div className={styles.rocketpoolLogoContainer}>
          <img src="/rocketpoolicon.svg" width="100%" />
        </div>
        <div className={styles.titleTextContainer}>
          <h1 className={styles.titleTextRPL}>
            ROCKET<span className={styles.titleTextPool}>POOL</span>
          </h1>
          <h2 className={styles.titleTextRG}>RATIOGANG</h2>
        </div>
      </div>

      <div className={styles.titleMoneyContainer}>
        <div className={styles.titleEthContainer}>
          {!isLoading && result ? (
            <div className={styles.titleEthContent}>
              <span className={styles.titleEthLogo}>
                <img src="/ethereumcoinwhiteoutline.svg" width="100%" />
              </span>
              {/* <span className={styles.titleEthLogo}>Ξ</span> */}
              <span className={styles.titleEthRatio}>{ethRatio}</span>
            </div>
          ) : null}
        </div>
        <div className={styles.titleDollarContainer}>
          {!isLoading && result ? (
            <div className={styles.titleDollarContent}>
              <span className={styles.titleDollarLogo}>
                <img src="/dollarcoinwhiteoutline.svg" width="100%" />
              </span>
              <span className={styles.titleDollarRatio}>
                {Number(rplUsdPrice).toFixed(2)}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
