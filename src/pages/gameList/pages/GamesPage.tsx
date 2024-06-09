import { GameTimeTable } from "@/widgets/GameTimeTable/GameTimeTable.tsx";
import { useSearchParams } from "react-router-dom";

export const GamesPage = () => {
  const [searchParams] = useSearchParams();

  const steamId = searchParams.get('steamId');

  return (<GameTimeTable startId={steamId || ''} />);
};

export default GamesPage;
