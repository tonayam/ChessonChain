import oneVone from '../public/1v1.png';
import randomSelector from '../public/random-selector.png';
import speedChess from '../public/speed-game.png';
import interChain from '../public/interchain.png';
import targetChallenge from '../public/target-challenge.png';
import bugHouse from '../public/bughouse.png';

export const chartData = [
  { color: `#4574C6`, text: `Validator` },
  { color: `#EF7E32`, text: `Token sale (combined public and private sale)` },
  { color: `#A5A5A5`, text: `Rewards for users` },
  {
    color: `#FFC000`,
    text: `For marketing, operations and partnerships (should be vested and spent publicly)`,
  },
  { color: `#5A9BD5`, text: `Rewards to the team (vested?)` },
  { color: `#70AD46`, text: `Airdrop` },
  { color: `#274579`, text: `For chess institutions` },
];

export const gameTypes = [
  {
    gameType: `1 V 1`,
    icon: oneVone,
    iconWidth: 78.369,
    iconHeight: 62.459,
    info: `You can play with a friend you know.`,
  },
  {
    gameType: `RANDOM SELECTOR`,
    icon: randomSelector,
    iconWidth: 101.001,
    iconHeight: 45.394,
    info: `Using random selector you're matched with people available to play at that time on the random match function.`,
  },
  {
    gameType: `Speed Up`,
    icon: speedChess,
    iconWidth: 45.496,
    iconHeight: 58,
    info: `A clock with the same time for both users, which runs down as they take their turns.`,
  },
  {
    gameType: `INTERCHAIN`,
    icon: interChain,
    iconWidth: 67.302,
    iconHeight: 64,
    info: `BLOCK WARS playing interchain, you either use the random selector or join routinely made competitions for special token types (block wars)`,
  },
  {
    gameType: `TARGET/CHALLENGE`,
    icon: targetChallenge,
    iconWidth: 50,
    iconHeight: 50,
    info: `Identify another user by public key and challenge them to a game`,
  },
  {
    gameType: `BUGHOUSE`,
    icon: bugHouse,
    iconWidth: 90,
    iconHeight: 40,
    info: `A chess variant played on two chessboards by four players in teams of two, Normal chess rules apply, except that captured pieces on one board are passed on to the teammate on the other board`,
  },
];
