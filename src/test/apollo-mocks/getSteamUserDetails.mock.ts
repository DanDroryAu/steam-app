import { getSteamUserDetails } from "@/api/steam-server/queries/getSteamUserDetails.ts";

export const getSteamUserDetailsMock = {
  request: {
    query: getSteamUserDetails,
    variables: {
      args: {
        steamId: 'test-id'
      }
    }
  },
  result: {
    data: {
      getSteamUserDetails: {
        personaName: 'test-name',
        avatarUrl: 'test-avatar',
        profileUrl: 'test-profile',
        personaState: 'test-state',
        realName: 'test-real',
        primaryClanId: 'test-clan',
        timeCreated: 1234567890,
        locCountryCode: 'test-code'
      }
    }
  }
};
