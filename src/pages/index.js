import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>ChessonChain</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Header />
        <TheGame />
        <MultiChainEconomy />
      </main>
    </>
  );
}

const Header = () => {
  return (
    <header>
      <div className='ellipse'></div>
      <h1>P2E MULTI-CHAIN/INTER-CHAIN CHESS GAME</h1>
      <p>
        Play and earn in an exciting multi-chain NFT chess game for chess and
        blockchain enthusiasts.
      </p>
      <a href='#'>
        <button className='green'>Play game</button>
      </a>
    </header>
  );
};

const TheGame = () => {
  return (
    <section className='the-game'>
      <h2 className='section-title'>THE GAME</h2>
      <div className='blocks'>
        <div className='block img'></div>
        <div className='block'>
          <p>
            ChessOnchain is a play to earn digital chess game where players can
            collect NFTs and compete in multichain/interchain chess competitions
            and 1v1 matches.
          </p>
          <a href='#'>
            <button className='green'>Learn More</button>
          </a>
        </div>
      </div>
    </section>
  );
};

const MultiChainEconomy = () => {
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
        <div className='block img'></div>
      </div>
    </section>
  );
};
