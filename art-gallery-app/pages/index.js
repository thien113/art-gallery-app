import Spotlight from "../component/spotlight/Spotlight";

export default function SpotlightPage({ pieces }) {
  return (
    <div>
      <h1>Pieces of the Day</h1>
      <Spotlight pieces={pieces} />
    </div>
  );
}
