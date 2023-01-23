import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className='about'>
      <header>
        <h1>CHESSONCHAIN</h1>
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
          <Image src='/the-game-desktop.png' alt='chessboard' fill />
        </div>
        <div className='ellipse left'></div>
        <div className='ellipse right'></div>
      </header>
      <Features />
    </main>
  );
};

const Features = () => {
  return (
    <section className='features'>
      <h2 className='section-title'>FEATURES</h2>
      <div className='blocks'>
        <div className='block'>
          <div className='image multichain'>
            <Image src='/multichain.png' alt='multichain' fill />
          </div>
          <h3>Multi-Chain</h3>
          <p>
            ChessOnChain is a multi-blockchain game, it&apos;s gameplay is
            designed to connect and enable connectivity of multiple blockchains,
            so far we&apos;re integrating Stacks, Solana, and Near and anchoring
            it all to an independent chain (substrate chain).
          </p>
        </div>
        <div className='block'>
          <div className='image token'>
            <Image src='/token.png' alt='multichain' fill />
          </div>
          <h3>Tokenized Gameplay</h3>
          <p>
            ChessOnchain is a tokenized chess game. Game data is tokenized for
            better recording and use case. Data like checkmate screenshots for
            NFT, game moves, and Special game types like Blockwars are tokenized
            for storage (intended cross-chain battle feature with IBC) tokens
            will be used to create good utility and use case token data types
            NFTs.
          </p>
        </div>
      </div>
      <div className='ellipse left'></div>
      <div className='ellipse right'></div>
    </section>
  );
};

export default About;
