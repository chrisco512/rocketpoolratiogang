import styles from './Links.module.css';

export default function Links() {
  return (
    <div className={styles.container}>
      <h2 className={styles.linkResourcesTitle}>Links & Resources</h2>
      <div className={styles.linkResource}>
        <h3>
          <a href="https://www.rocketpool.net/" target="_blank">
            Rocketpool Homepage
          </a>
        </h3>
        <p>
          The official homepage of the Rocketpool protocol. Learn about the
          team, the roadmap, read the blog and white paper, and find links to
          other community pages.
        </p>
      </div>

      <div className={styles.linkResource}>
        <h3>
          <a
            href="https://github.com/isidorosp/awesome-rocketpool"
            target="_blank"
          >
            Awesome Rocketpool
          </a>
        </h3>
        <p>
          A curated list of Rocketpool links, from how to set up a node on a
          Raspberry Pi, to video content on the Rocketpool protocol. So much
          great content and constantly updated by the community.
        </p>
      </div>
      <div className={styles.linkResource}>
        <h3>
          <a href="https://ethmerge.com/" target="_blank">
            The Ethereum Proof-of-Stake Merge
          </a>
        </h3>
        <p>
          A great resource on the future of the Ethereum 2.0 network. Makes the
          case that that after the proof-of-stake merge, Ethereum will become
          the most credibly neutral and energy-efficient blockchain network in
          the world.
        </p>
      </div>
      <div className={styles.linkResource}>
        <h3>
          <a href="https://old.reddit.com/r/rocketpool/" target="_blank">
            /r/rocketpool
          </a>
        </h3>
        <p>The official subreddit of the Rocketpool community.</p>
      </div>
      <div className={styles.linkResource}>
        <h3>
          <a href="https://old.reddit.com/r/ethfinance/" target="_blank">
            /r/ethfinance
          </a>
        </h3>
        <p>Arguably the best Ethereum and crypto subreddit.</p>
      </div>
      <div className={styles.subSection}>
        <h2 className={styles.linkResourcesTitle}>Twitter Profiles</h2>
        <div className={styles.linkResource}>
          <p>
            A list of Rocketpool and Ethereum community members worth following.
          </p>
          <ul className={styles.twitterList}>
            <li>
              <a href="https://twitter.com/Rocket_Pool" target="_blank">
                @Rocket_Pool
              </a>
            </li>
            <li>
              <a href="https://twitter.com/TheRocketmaneth" target="_blank">
                @TheRocketmanEth
              </a>
            </li>
            <li>
              <a href="https://twitter.com/defi_rocketeer" target="_blank">
                @defi_rocketeer
              </a>
            </li>
            <li>
              <a href="https://twitter.com/0xpenguin0x" target="_blank">
                @0xpenguin0x
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sassal0x" target="_blank">
                @sassal0x
              </a>
            </li>
            <li>
              <a href="https://twitter.com/panic__zone" target="_blank">
                @panic__zone
              </a>
            </li>
            <li>
              <a href="https://twitter.com/drakefjustin" target="_blank">
                @drakefjustin
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Shimbob_rpl" target="_blank">
                @Shimbob_rpl
              </a>
            </li>
            <li>
              <a href="https://twitter.com/superphiz" target="_blank">
                @superphiz
              </a>
            </li>
            <li>
              <a href="https://twitter.com/InsideTheSim" target="_blank">
                @InsideTheSim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
