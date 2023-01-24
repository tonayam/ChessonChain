import oneVone from "../public/1v1.png";
import randomSelector from "../public/random-selector.png";
import speedChess from "../public/speed-game.png";
import interChain from "../public/interchain.png";
import targetChallenge from "../public/target-challenge.png";
import bugHouse from "../public/bughouse.png";

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

export const tokenDistribution = [
  { title: `Total Supply`, num: 10000000000, class: `grey` },
  { title: `Validator`, num: 3000000000, class: `dark` },
  { title: `Token sale`, num: 1500000000, class: `grey` },
  { title: `Reward for users`, num: 1500000000, class: `dark` },
  { title: `For marketing`, num: 1000000000, class: `grey` },
  { title: `Reward to team`, num: 2000000000, class: `dark` },
  { title: `To airdrop`, num: 500000000, class: `grey` },
  { title: `To chess institution`, num: 500000000, class: `dark` },
];

export const gameTypes = [
  {
    gameType: `1 V 1`,
    icon: oneVone,
    iconWidth: 104.08,
    info: `You can play with a friend you know.`,
  },
  {
    gameType: `RANDOM SELECTOR`,
    icon: randomSelector,
    iconWidth: `222.5px`,
    info: `Using random selector you're matched with people available to play at that time on the random match function.`,
  },
  {
    gameType: `SPEED OR CLOCK CHESS`,
    icon: speedChess,
    iconWidth: `78.23px`,
    info: `A clock with the same time for both users, which runs down as they take their turns. Once they move, the other players clock begins to run down, and so on. This is popular in bughouse but also in friendly competition, and it is frequently used in chess tournaments to prevent delays. Maximum time on a clock should be 12 hours, minimum 5 minutes (ideally a clock match could be it's own type of match or a clock could be applied to interchain, challenge, random, or 1v1 modes)`,
  },
  {
    gameType: `INTERCHAIN`,
    icon: interChain,
    iconWidth: `105.16px`,
    info: `BLOCK WARS playing interchain, you either use the random selector or join routinely made competitions for special token types (block wars)`,
  },
  {
    gameType: `TARGET/CHALLENGE`,
    icon: targetChallenge,
    iconWidth: `100px`,
    info: `Identify another user by public key and challenge them to a game`,
  },
  {
    gameType: `BUGHOUSE`,
    icon: bugHouse,
    iconWidth: `225px`,
    info: `A chess variant played on two chessboards by four players in teams of two, Normal chess rules apply, except that captured pieces on one board are passed on to the teammate on the other board`,
  },
];
