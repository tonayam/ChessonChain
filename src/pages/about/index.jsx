import React, { useEffect, useState } from "react";
import Image from "next/image";
import { gameTypes } from "data/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "context/context";

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
      <Features />
      <GameTypes />
      <TheTeam />
    </main>
  );
};

const Features = () => {
  const { lightMode } = useGlobalContext();

  return (
    <section className='features'>
      <h2 className='section-title'>FEATURES</h2>
      <div className='blocks'>
        <div className='block'>
          <div className='image multichain'>
            {lightMode ? (
              <Image src='/multichain-light.png' alt='multichain' fill />
            ) : (
              <Image src='/multichain.png' alt='multichain' fill />
            )}
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
  }, [index]);

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

          const { gameType, icon, info, widthClass } = game;
          return (
            <div className={`game ${position}`} key={gameIndex}>
              <h3>{gameType}</h3>
              <div className={`image ${widthClass}`}>
                <Image src={icon} fill alt={gameType} />
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

const TheTeam = () => {
  return (
    <section className='the-team'>
      <h2 className='section-title'>THE TEAM</h2>
      <div className='team-members'>
        <div className='member'>
          <div className='image'></div>
          <h3>Name</h3>
          <h4>Role</h4>
        </div>
        <div className='member'>
          <div className='image'></div>
          <h3>Name</h3>
          <h4>Role</h4>
        </div>
        <div className='member'>
          <div className='image'></div>
          <h3>Name</h3>
          <h4>Role</h4>
        </div>
      </div>
      <div className='ellipse one'></div>
      <div className='ellipse two'></div>
      <div className='ellipse three'></div>
    </section>
  );
};

export default About;
