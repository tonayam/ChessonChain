import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { gameTypes } from 'data/data';
import Link from 'next/link';

const About = () => {
  return (
    <main className='about'>
      <header>
        <h1 className='section-title'>CHESSONCHAIN</h1>
        <p>
          ChessOnChain is a digital multichain/interchain, Play to Earn NFT game
          for chess and blockchain enthusiasts. It is a game of chess that is
          integrated with multiple blockchain ecosystems, the NEAR Protocol,
          Stacks, and Solana block-chain in which Game data is tokenized from
          each chain, and backed by a governance token of its substrate app
          chain. Players of chess can authenticate using their web or mobile
          wallets to play different game types of chess, for tokens and fun game
          features.
        </p>
        <div className='image'>
          <Image src='/the-game.png' alt='chessboard' fill />
        </div>
        <div className='ellipse left'></div>
        <div className='ellipse right'></div>
      </header>
      <div className='row'>
        <Features />
        <GameTypes />
      </div>
      <JoinWaitlistNow />
    </main>
  );
};

const Features = () => {
  return (
    <section className='features'>
      <h2 className='section-title'>FEATURES</h2>
      <div className='block'>
        <div className='title-img'>
          <h3>Multi-Chain</h3>
          <div className='img multichain'>
            <Image src='/multichain.png' alt='multichain' fill />
          </div>
        </div>
        <p>
          ChessOnChain is a multi-blockchain game, it&apos;s gameplay is
          designed to connect and enable connectivity of multiple blockchains,
          so far we&apos;re integrating Stacks, Solana, and Near and anchoring
          it all to an independent chain (substrate chain).
        </p>
        <div className='line'></div>
      </div>
      <div className='block'>
        <div className='title-img'>
          <h3>Tokenized Gameplay</h3>
          <div className='img token'>
            <Image src='/token.png' alt='token' fill />
          </div>
        </div>
        <p>
          “ChessOnchain is a tokenized chess game. Game data is tokenized for
          better recording and use case. Data like checkmate screenshots for
          NFT, game moves, and Special game types like Blockwars are tokenized
          for storage (intended cross-chain battle feature with IBC) tokens will
          be used to create good utility and use case token data types NFTs.”
        </p>
        <div className='line'></div>
      </div>
    </section>
  );
};

const GameTypes = () => {
  return (
    <section className='game-mode'>
      <h2 className='section-title'>GAME MODE</h2>
      <div className='lines'>
        <div className='short'></div>
        <div className='long'></div>
      </div>

      <div className='new-era'>
        <div className='img'>
          <Image src='/new-chess-era-piece.png' alt='new era chess' fill />
        </div>
        <h5>
          <span>A NEW ERA OF</span>
          <span>CHESS</span>
        </h5>
      </div>

      <h3 className='blockchain-era'>
        <span>THE BLOCKCHAIN ERA</span>
        <span>OF CHESS.</span>
        <span>#CHESSONCHAIN</span>
      </h3>

      <div className='games'>
        {gameTypes.map((game, gameIndex) => {
          const { gameType, icon, info, iconHeight, iconWidth } = game;
          return (
            <div className='game' key={gameIndex}>
              <div className='img'>
                <Image
                  src={icon}
                  width={iconWidth}
                  height={iconHeight}
                  alt={gameType}
                />
              </div>
              <div className='info'>
                <h3>{gameType}</h3>
                <p>{info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// const TheTeam = () => {
//   return (
//     <section className='the-team'>
//       <h2 className='section-title'>THE TEAM</h2>
//       <div className='team-members'>
//         <div className='member'>
//           <div className='image'></div>
//           <h3>Name</h3>
//           <h4>Role</h4>
//         </div>
//         <div className='member'>
//           <div className='image'></div>
//           <h3>Name</h3>
//           <h4>Role</h4>
//         </div>
//         <div className='member'>
//           <div className='image'></div>
//           <h3>Name</h3>
//           <h4>Role</h4>
//         </div>
//       </div>
//       <div className='ellipse one'></div>
//       <div className='ellipse two'></div>
//       <div className='ellipse three'></div>
//     </section>
//   );
// };

const JoinWaitlistNow = () => {
  return (
    <section className='join-waitlist'>
      <h2>Join Waitlist Now!!!</h2>
      <p>
        Play and earn in an exciting multi-chain NFT chess game for chess and
        blockchain enthusiasts.
      </p>
      <button className='green'>
        <Link href='/waitlist'>Join Waitlist</Link>
      </button>
    </section>
  );
};

export default About;
