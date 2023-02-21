import useSWR from "swr";
import Spotlight from "../component/Spotlight";

export default function HomePage() {
  return (
    <div>
      <h1>Pieces of the Day</h1>
      <Spotlight/>
    </div>
  );
}
