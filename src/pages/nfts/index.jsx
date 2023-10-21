import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { gameTypes } from 'data/data';
import Link from 'next/link';

const NFTS = () => {
  return (
    <main className='nft-page'>
      <header>
        <h1 className='section-title'>CHESSONCHAIN NFTS</h1>
        <p>
          1000 pieces of NFT arts will be listed on all chains to onboard users
          and gamers
        </p>
        <ul>
          <li>KINGS: 16 PIECES</li>
          <li>QUEENS: 35 PIECES</li>
          <li>ROOKS: 48 PIECES</li>
          <li>BISHOPS: 58 PIECES</li>
          <li>KNIGHTS: 58 PIECES</li>
          <li>PAWNS: 785 PIECES</li>
        </ul>
        <p>
          Together the NFT holders will engage in competitions to win prizes ,as
          well as enjoy other game utilities ,Our selected starter blockchains
          are Stacks , Polkadot , Near, Solana, Eth
        </p>
        <div className='ellipse left'></div>
        <div className='ellipse right'></div>
      </header>
      <div className='table'>Table here</div>

      <NftUtilities />
      <EarnLimits />
      <EcosystemTournaments />
      <GuildIdeas />
      <MultiChainTournaments />
      <StakeRiskHouse />
    </main>
  );
};

const NftUtilities = () => {
  return (
    <section className='section nft-utilities'>
      <h2 className='title'>CHESS ONCHAIN NFT UTILITIES</h2>
      <p className='brief'>
        The ChessOnchain nfts are the representatives of the world blockchain
        multi chain chess gaming community (COC)
      </p>
      <p className='brief'>
        The holders of this NFT will be recognized as part of the blockchain
        chess association, and have special abilities and in game advantages
      </p>

      <div className='grid'>
        <div className='item'>
          <h3>COMPETITIONS:</h3>
          <p>
            KINGS and QUEENS NFTS will host ecosystem tournaments and cash
            prizes will be awarded in crypto.
          </p>
        </div>

        <div className='item'>
          <h3>KING TOURNAMENT PRIZES ARE:</h3>
          <p>First place 500$</p>
          <p>Second place 250$</p>
          <p>Third place 100$</p>
        </div>

        <div className='item'>
          <h3>QUEENS TOURNAMENT PRIZES ARE:</h3>
          <p>First place 1000$</p>
          <p>Second place 500$</p>
          <p>Third place 250$</p>
        </div>
      </div>
    </section>
  );
};

const EarnLimits = () => {
  return (
    <section className='section nft-utilities'>
      <h2 className='title'>EARN LIMIT WITH SPECIAL NFTS</h2>
      <p className='brief'>
        Because ChessOnchain is a play to earn game model , (the in game tokens
        must be regulated to ensure a steady token economy) special NFTs are
        used to control/regulate game play earn limit , by default a player can
        play as much as he wants but only earns for 2 plays a day.
      </p>
      <p className='brief'>
        But with the special NFTs , each piece has their allowed earn limit , to
        enable you to have more earn times than the ordinary and default player.
      </p>

      <div className='img'></div>
    </section>
  );
};

const EcosystemTournaments = () => {
  return (
    <section className='section ecosystem-tournaments'>
      <h2 className='title'>ECOSYSTEM TOURNAMENTS</h2>
      <p className='brief'>
        The ChessonChain community organizes routinely ecosystem tournaments
      </p>
      <p className='brief'>
        TOURNAMENTS WITHIN EACH BLOCKCHAIN So having a special NFT type enables
        you to contest within the ecosystem, This is how we will rank players
        from each ecosystem and give them rewards. This will help us engage
        blockchain lovers from each connected ecosystem
      </p>

      <div className='img'>Image here</div>
    </section>
  );
};

const GuildIdeas = () => {
  return (
    <section className='section guild-ideas'>
      <h2 className='title'>GUILD IDEAS</h2>
      <ol>
        <li>
          The global blockchain chess community support GUILD creators or
          leaders who can propose to the blockchain chess gaming community to
          carry out a guild or idea within their imagination, like hackathons ,
          chess collabs , competition , tournaments, etc with their own rules
          and Ideas .
        </li>
        <li>
          Requirements to be a guild tournament leader or organizer is a KING or
          QUEEN.
        </li>
        <li>
          Guilds can have extra moves or a chessboard nft branded with his/her
          name or any other decided reward for participation
        </li>
      </ol>
      <div className='img'>Image here</div>
    </section>
  );
};

const MultiChainTournaments = () => {
  return (
    <section className='section multichain-tournaments'>
      <h2 className='title'>MULTI-CHAIN ECO-SYSTEM TOURNAMENTS</h2>
      <p className='brief'>
        The chessOnchain gaming community organizes routine tournaments and
        competitions against the blockchain ecosystems involved and record the
        game moves and results Players can contest to be an chessOnchain
        champion with the special nfts.
      </p>
      <p className='brief'>
        Kings and queens from each ecosystem can compete to be chessOnchain
        champs and earn rewards for the weekly rumble , I&apos;m sure ecosystems
        will find the representative battles a fun thing.
      </p>

      <div className='img'>Image here</div>
    </section>
  );
};

const StakeRiskHouse = () => {
  return (
    <section className='section stake-risk-house'>
      <h2 className='title'>STAKE/RISK HOUSE</h2>
      <p className='brief'>
        NFT holders have access to the stake and gambple nfts and fungible
        tokens , inside the stake house you can put on offers and accept listed
        offers to play with a stake
      </p>
      <ul className='grid'>
        <li>OPTIONS ARE NFTS STAKE/GABLE OFFER</li>
        <li>FUNGIBLE TOKEN STAKE/GABMLE OFFER</li>
        <li>
          YOU CAN OFFER TO PLAY WITHOUT A PIECE AND STAKE A REWARD FOR A
          CHALLENGE
        </li>
      </ul>
      <div className='img'>Image here</div>
    </section>
  );
};

export default NFTS;
