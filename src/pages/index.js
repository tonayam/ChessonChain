import Head from 'next/head';
import Image from 'next/image';
import { chartData, tokenDistribution } from 'data/data';
import { useGlobalContext } from 'context/context';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const wakeServer = async () => {
    try {
      await fetch(`https://chessonchain-waitlist-api.onrender.com`, {
        method: `GET`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {}
  };

  useEffect(() => {
    wakeServer();
  }, []);
  return (
    <>
      <Head>
        <title>ChessonChain</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='home'>
        <Header />
        <TheGame />
        <MultiChainEconomy />
        <NFT />
      </main>
    </>
  );
}

const Header = () => {
  return (
    <header>
      <div className='ellipse'></div>
      <div className='chessonchain img'>
        <Image src='/chessonchain-block.png' alt='chess on chain' fill />
      </div>
      <h1>The #1 chess integration with the blockchain</h1>
      <p>
        Play and earn in an exciting multi-chain NFT chess game for chess and
        blockchain enthusiasts.
      </p>
      <div className='btn'>
        <button className='grey'>
          <Link href='/waitlist'>Join Waitlist</Link>
        </button>
      </div>
    </header>
  );
};

const TheGame = () => {
  return (
    <section className='the-game'>
      <h2 className='section-title'>THE GAME</h2>
      <div className='blocks'>
        <div className='block img'>
          <Image src='/the-game.png' alt='chessboard' fill />
        </div>
        <div className='block'>
          <p>
            ChessOnchain is a play to earn digital chess game where players can
            collect NFTs and compete in multichain/interchain chess competitions
            and 1v1 matches.
          </p>
          <button className='green'>
            <Link href='/about'>Learn More</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

const MultiChainEconomy = () => {
  const { lightMode } = useGlobalContext();

  return (
    <section className='multi-chain-economy'>
      <h2 className='section-title'>MULTI-CHAIN ECONOMY</h2>
      <div className='blocks'>
        <div className='block'>
          <p>
            The idea for a simple economy among multiple blockchain ecosystems
            for competitions and on-chain records as a data store is useful to
            the blockchain and gaming markets as competitions help improve
            market stat, it would boost and improve areas like the global chess
            market, the blockchain and multi-chain economy since multi-chain is
            the desired future of the blockchain economy.
          </p>
        </div>
        <motion.div
          className='block img'
          animate={{ rotateZ: '360deg' }}
          transition={{
            duration: 10,
            repeat: Infinity,
            // type: `tween`,
            ease: 'linear',
          }}
        >
          {lightMode ? (
            <Image
              src='/multichain-desktop-light.svg'
              alt='multi-chain-economy diagram'
              fill
            />
          ) : (
            <Image
              src='/multichain-desktop.png'
              alt='multi-chain-economy diagram'
              fill
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

const NFT = () => {
  const { lightMode } = useGlobalContext();

  return (
    <section className='nft'>
      <h2 className='section-title'>NFT</h2>
      <div className='img'>
        {lightMode ? (
          <Image src='/nft-light.svg' alt='nft' fill />
        ) : (
          <Image src='/nft.png' alt='nft' fill />
        )}
      </div>
      <p>
        The chessOnchain NFTs are the representatives of the world blockchain
        multi-chain chess gaming community. Holders of this NFT will be
        recognized as part of the blockchain chess association, and have special
        abilities and in game advantages
      </p>
      <div className='btn'>
        <button className='green'>
          <Link href='/nft'>Learn More</Link>
        </button>
      </div>
      <div className='ellipse left'></div>
      <div className='ellipse right'></div>
    </section>
  );
};
