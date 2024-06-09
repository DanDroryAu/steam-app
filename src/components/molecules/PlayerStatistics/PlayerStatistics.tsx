import classes from './PlayerStatistics.module.scss';


export type Props = {
  gamesOwned: number;
  totalTimePlayed: string;
  playerName?: string;
  activeSince?: string;
  avatar?: string;
  percentageOfLifeSpentGaming?: string;
}

export const PlayerStatistics = ({
  gamesOwned,
  totalTimePlayed,
  playerName,
  activeSince,
  avatar,
  percentageOfLifeSpentGaming,
}: Props) => {
  return (
    <div className={classes.playerStatistics}>
      {!!playerName && <h2>{ playerName }</h2> }
      <div className={classes.profileContainer}>
        {!!avatar && <img src={avatar} alt="Player avatar" /> }
        <div className={classes.statisticsContainer}>
          {!!activeSince && <p>Active since: <span>{ activeSince }</span></p>}
          <p>Number of games owned: <span>{ gamesOwned }</span></p>
          <p>Total time played: <span>{ totalTimePlayed }</span></p>
          <p>Percentage of life spent gaming: <span>{ percentageOfLifeSpentGaming }</span></p>
        </div>
      </div>
    </div>
  );
};
