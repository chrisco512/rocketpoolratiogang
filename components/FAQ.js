import { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';

import styles from './FAQ.module.css';

function ChevronDown() {
  return (
    <svg width="24px" height="24px" viewBox="0 0 444.819 444.819" fill="white">
      <g>
        <path d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561
		L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416
		C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848
		c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693
		C444.819,130.287,441.295,121.629,434.252,114.203z" />
      </g>
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg width="24px" height="24px" viewBox="0 0 444.819 444.819" fill="white">
      <g>
        <path d="M433.968,278.657L248.387,92.79c-7.419-7.044-16.08-10.566-25.977-10.566c-10.088,0-18.652,3.521-25.697,10.566
		L10.848,278.657C3.615,285.887,0,294.549,0,304.637c0,10.28,3.619,18.843,10.848,25.693l21.411,21.413
		c6.854,7.23,15.42,10.852,25.697,10.852c10.278,0,18.842-3.621,25.697-10.852L222.41,213.271L361.168,351.74
		c6.848,7.228,15.413,10.852,25.7,10.852c10.082,0,18.747-3.624,25.975-10.852l21.409-21.412
		c7.043-7.043,10.567-15.608,10.567-25.693C444.819,294.545,441.205,285.884,433.968,278.657z" />
      </g>
    </svg>
  );
}

function AccordionContainer() {
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleClick(accordionPosition) {
    const newPosition =
      accordionPosition === activeIndex ? -1 : accordionPosition;
    setActiveIndex(newPosition);
  }

  // useEffect(
  //   () => {
  //     window.dispatchEvent(new Event('resize'));
  //   },
  //   [activeIndex]
  // );

  return (
    <div className={styles.container}>
      <Collapsible
        accordionPosition={0}
        open={activeIndex === 0}
        handleTriggerClick={handleClick}
        easing="ease-in-out"
        transitionTime={125}
        trigger={
          <div
            className={styles.faqHeader}
            style={
              activeIndex !== 1
                ? { borderBottom: '1px solid rgba(255,255,255, 0.7)' }
                : {}
            }
          >
            <span>What is Rocketpool?</span>
            <ChevronDown />
          </div>
        }
        triggerWhenOpen={
          <div className={styles.faqHeaderOpen}>
            <span>What is Rocketpool?</span>
            <ChevronUp />
          </div>
        }
      >
        <div className={styles.faqContent}>
          <p>
            Rocketpool is a decentralized Ethereum 2.0 staking protocol. As
            Ethereum transitions away from proof-of-work consensus to
            proof-of-stake, Ethereum 2.0 validators will become responsible for
            securing the network. In return for doing so, validators get a share
            of transaction fees, tips, and new issuance of ETH. Rocketpool
            allows passive ETH holders to pool funds together with validators
            who operate and maintain the nodes and therefore share a greater
            portion of the staking rewards. Rocket Pool is the most
            decentralized and trustless staking protocol that will soon be
            available.
          </p>
        </div>
      </Collapsible>
      <Collapsible
        accordionPosition={1}
        open={activeIndex === 1}
        handleTriggerClick={handleClick}
        easing="ease-in-out"
        transitionTime={125}
        trigger={
          <div
            className={styles.faqHeader}
            style={
              activeIndex !== 2
                ? { borderBottom: '1px solid rgba(255,255,255, 0.7)' }
                : {}
            }
          >
            <span>
              Why is Rocketpool an important part of the ETH2 ecosystem?
            </span>
            <ChevronDown />
          </div>
        }
        triggerWhenOpen={
          <div className={styles.faqHeaderOpen}>
            <span>
              Why is Rocketpool an important part of the ETH2 ecosystem?
            </span>
            <ChevronUp />
          </div>
        }
      >
        <div className={styles.faqContent}>
          <p>
            As ETH2 requires a 32ETH deposit to run a validator for the network,
            there is some concern that centralized exchanges or pools could grow
            to exert an outsized influence on the Ethereum protocol.
            Centralized, custodial entitities such as Coinbase or Binance can
            more easily pool user deposits and abstract the complexity of
            running validators for their users. This may leave single nodes
            making up a smaller and smaller portion of the ETH2 validator set.
            Rocketpool is the only fully audited, decentralized ETH2 pooling
            solution. With Rocketpool, single node validators can not only
            potentially make higher profits through greater capital efficiency,
            but can also gain from being part of a coalition that will work
            together to ensure the long-term security and stability of the
            Ethereum network.
          </p>
        </div>
      </Collapsible>
      <Collapsible
        accordionPosition={2}
        open={activeIndex === 2}
        handleTriggerClick={handleClick}
        easing="ease-in-out"
        transitionTime={125}
        trigger={
          <div
            className={styles.faqHeader}
            style={
              activeIndex !== 3
                ? { borderBottom: '1px solid rgba(255,255,255, 0.7)' }
                : {}
            }
          >
            <span>When does Rocketpool launch on mainnet?</span>
            <ChevronDown />
          </div>
        }
        triggerWhenOpen={
          <div className={styles.faqHeaderOpen}>
            <span>When does Rocketpool launch on mainnet?</span>
            <ChevronUp />
          </div>
        }
      >
        <div className={styles.faqContent}>
          <p>
            Rocketpool will be launching October 6th, 2021! For more details
            about the launch, check out the{' '}
            <a
              href="https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-4-2635c44e4f7e?source=collection_home---4------0-----------------------"
              target="_blank"
            >
              most recent article
            </a>{' '}
            from the team. And follow along with the community on
            <a href="https://twitter.com/Rocket_Pool" target="_blank">
              Twitter
            </a>
            or
            <a href="https://discordapp.com/invite/tCRG54c" target="_blank">
              Discord
            </a>
            for more information.
          </p>
        </div>
      </Collapsible>
      <Collapsible
        accordionPosition={3}
        open={activeIndex === 3}
        handleTriggerClick={handleClick}
        easing="ease-in-out"
        transitionTime={125}
        trigger={
          <div
            className={styles.faqHeader}
            style={
              activeIndex !== 4
                ? { borderBottom: '1px solid rgba(255,255,255, 0.7)' }
                : {}
            }
          >
            <span>What's with the 'ratio gang' thing?</span>
            <ChevronDown />
          </div>
        }
        triggerWhenOpen={
          <div className={styles.faqHeaderOpen}>
            <span>What's with the 'ratio gang' thing?</span>
            <ChevronUp />
          </div>
        }
      >
        <div className={styles.faqContent}>
          <p>
            This site was inspired by{' '}
            <a href="https://ratiogang.com" target="_blank">
              ratiogang.com
            </a>. That site tracks the ETH/BTC ratio and projects a future
            outcome in which the Ethereum market cap exceeds Bitcoin's. While
            Rocketpool's native token (RPL) is not competing with ETH, there are
            those of us in the Rocketpool community that believe over the medium
            term, RPL's performance should exceed ETH's. This is because the
            impact and value of staking has not been fully realized as we wait
            for EIP-1559 to roll out (est. July 28th, 2021) and the Merge.
          </p>
          <p>
            For more info, please see{' '}
            <a
              href="https://old.reddit.com/r/ethfinance/comments/m4jj0i/rocketpool_investment_thesis_round_3/"
              target="_blank"
            >
              Rocketpool Investment Thesis
            </a>.
          </p>
        </div>
      </Collapsible>
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      <h2 className={styles.faqSectionHeader}>FAQs</h2>
      <div>
        <AccordionContainer />
      </div>
    </div>
  );
}
