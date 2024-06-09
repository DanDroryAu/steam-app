import { gql } from "@apollo/client";

export const getAllGamesBySteamId = gql`
    query GetAllGamesBySteamId($args: GetAllGamesBySteamIdInput) {
        getAllGamesBySteamId(args: $args) {
            gameCount
            totalPlaytime
            totalPlaytimeTwoWeeks
            games {
                appId
                name
                playtimeLastTwoWeeks
                playtimeTotal
                logoUrl
                iconUrl
                hasCommunityVisibleStats
            }
        }
    }

`;
