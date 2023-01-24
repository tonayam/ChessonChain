import React, { useEffect, useState } from "react";
import Image from "next/image";
import { gameTypes } from "data/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
      <GameTypes />
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

const GameTypes = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(gameTypes.length - 1);
    }
    if (index > gameTypes.length - 1) {
      setIndex(0);
    }
  }, [index, gameTypes]);

  return (
    <section className='game-types'>
      <h2 className='section-title'>GAME TYPES</h2>
      <div className='games'>
        {gameTypes.map((game, gameIndex) => {
          let position = `nextSlide`;
          if (gameIndex === index) {
            position = "activeSlide";
          }
          if (
            gameIndex === index - 1 ||
            (index === 0 && gameIndex === gameTypes.length - 1)
          ) {
            position = `prevSLide`;
          }

          const { gameType, icon, info, iconWidth } = game;
          return (
            <div className={`game ${position}`} key={gameIndex}>
              <h3>{gameType}</h3>
              <div className='image'>
                <Image src={icon} style={{ width: iconWidth }} alt={gameType} />
              </div>
              <p>{info}</p>
            </div>
          );
        })}
        <div className='pagination'>
          {gameTypes.map((box, gameIndex) => {
            let position = ``;
            if (gameIndex === index) {
              position = "activeSlide";
            }

            return (
              <div
                className={`box ${position}`}
                key={gameIndex}
                onClick={() => setIndex(gameIndex)}
              ></div>
            );
          })}
        </div>
        <FaChevronLeft
          className='btn left-btn'
          onClick={() => setIndex(index - 1)}
        />
        <FaChevronRight
          className='btn right-btn'
          onClick={() => setIndex(index + 1)}
        />
      </div>
    </section>
  );
};

export default About;
