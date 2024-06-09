import { gql } from "@apollo/client";

export const getSteamUserDetails = gql`
    query GetSteamUserDetails($args: GetSteamUserDetailsInput) {
        getSteamUserDetails(args: $args) {
            personaName
            avatarUrl
            profileUrl
            personaState
            realName
            primaryClanId
            timeCreated
            locCountryCode
        }
    }
`;
