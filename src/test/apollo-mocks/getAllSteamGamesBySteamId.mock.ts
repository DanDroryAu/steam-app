import { getAllGamesBySteamId } from "@/api/steam-server/queries/getAllGamesBySteamId.ts";

export const getAllSteamGamesBySteamIdMock = {
  request: {
    query: getAllGamesBySteamId,
    variables: {
      args: {
        steamId: 'test-id'
      }
    }
  },
  result: {
    data: {
      getAllGamesBySteamId: {
        gameCount: 2,
        totalPlaytime: 150,
        totalPlaytimeTwoWeeks: 50,
        games: [{
          appId: 'test-app',
          name: 'Half-life 3 (confirmed)',
          playtimeTotal: 50,
          playtimeLastTwoWeeks: 50,
          iconUrl: 'test-icon',
          logoUrl: 'test-logo'
        },
        {
          appId: 'test-app-two',
          name: 'Apex Legends',
          playtimeTotal: 100,
          playtimeLastTwoWeeks: 0,
          iconUrl: 'test-icon-two',
          logoUrl: 'test-logo-two'
        }]
      }
    }
  }
};
