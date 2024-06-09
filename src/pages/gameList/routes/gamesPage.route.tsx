import GamesPage from "@/pages/gameList/pages/GamesPage";

const gamesPageRoute =  {
  path: "/games",
  layout: 'default',
  element: (
    <GamesPage />
  ),
};

const routes = [gamesPageRoute];

export default routes;
