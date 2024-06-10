import { Table, type TableColumnsType } from "antd";
import React from "react";
import { useQuery } from "@apollo/client";
import { getAllGamesBySteamId } from "@/api/steam-server/queries/getAllGamesBySteamId.ts";
import { formatDuration, format, fromUnixTime, getTime } from "date-fns";
import { PlayerStatistics } from "@/components/molecules/PlayerStatistics/PlayerStatistics.tsx";
import SearchBar from "@/components/molecules/SearchBar";
import { getSteamUserDetails } from "@/api/steam-server/queries/getSteamUserDetails.ts";

type DataType = {
    key: React.Key;
    name: string;
    playtimeAll: number;
    playtimeTwoWeeks: number;
    playtimeFormatted: string;
    playtimeTwoWeeksFormatted: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'playtime - all',
    dataIndex: 'playtimeFormatted',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.playtimeAll - b.playtimeAll,
  },
  {
    title: 'playtime - 2 weeks',
    dataIndex: 'playtimeTwoWeeksFormatted',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.playtimeTwoWeeks - b.playtimeTwoWeeks,
  },
];

export type Props = {
    startId: string;
}

export const GameTimeTable = ({ startId = '' }: Props) => {
  const [steamId, setSteamId] = React.useState(startId);

  const { loading, data } = useQuery(getAllGamesBySteamId, {
    variables: { args: { steamId } },
  });

  const { loading: loadingSteamUserDetails, data: steamUserDetails } = useQuery(getSteamUserDetails, {
    variables: { args: { steamId } },
  });


  const dataSource = data?.getAllGamesBySteamId.games.map((game: { appId: number; name: string; playtimeTotal: number; playtimeLastTwoWeeks: number; }) => ({
    key: game.appId,
    name: game.name,
    playtimeAll: game.playtimeTotal,
    playtimeTwoWeeks: game.playtimeLastTwoWeeks,
    playtimeFormatted: formatDuration(
      {
        days:  Math.floor(game.playtimeTotal / 60 / 24),
        hours:  Math.floor(game.playtimeTotal / 60 % 24),
        minutes: game.playtimeTotal % 60,
      },
      { format: ['days', 'hours', 'minutes'] }
    ) || '0 minutes',
    playtimeTwoWeeksFormatted: formatDuration(
      {
        days: Math.floor(game.playtimeLastTwoWeeks / 1440),
        hours: Math.floor(game.playtimeLastTwoWeeks / 60 % 24),
        minutes: game.playtimeLastTwoWeeks % 60,
      },
      { format: ['days', 'hours', 'minutes'] }
    ) || '0 minutes',
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSteamId(e.target.value);
  };

  const formatedTotalPlaytime = formatDuration(
    {
      days: Math.floor(data?.getAllGamesBySteamId.totalPlaytime / 1440),
      hours: Math.floor(data?.getAllGamesBySteamId.totalPlaytime / 60 % 24),
      minutes: data?.getAllGamesBySteamId.totalPlaytime % 60,
    },
    { format: ['days', 'hours', 'minutes'] }
  ) || '0 minutes';

  const percentageOfLifeSpentGaming = (data?.getAllGamesBySteamId.totalPlaytime && steamUserDetails?.getSteamUserDetails.timeCreated)
    ? `${Math.floor(data?.getAllGamesBySteamId.totalPlaytime / (((getTime(new Date()) - steamUserDetails?.getSteamUserDetails.timeCreated * 1000)) / 60000) * 1000) / 10}%`
    : 'N/A';

  const activeSince = steamUserDetails?.getSteamUserDetails.timeCreated ? format(fromUnixTime(steamUserDetails?.getSteamUserDetails.timeCreated), 'dd/MM/yyyy') : 'N/A';

  return (
    <>
      <SearchBar label="Steam Id" value={steamId} onInput={handleInputChange} />
      {data && steamUserDetails && <PlayerStatistics
        avatar={steamUserDetails?.getSteamUserDetails.avatarUrl}
        playerName={steamUserDetails?.getSteamUserDetails.personaName}
        activeSince={activeSince}
        gamesOwned={data?.getAllGamesBySteamId.gameCount || 0}
        totalTimePlayed={formatedTotalPlaytime}
        percentageOfLifeSpentGaming={percentageOfLifeSpentGaming}
      /> }
      <Table
        loading={loading && loadingSteamUserDetails}
        columns={columns}
        dataSource={dataSource}
        showSorterTooltip={{ target: 'sorter-icon' }}
      />
    </>
  );
};
