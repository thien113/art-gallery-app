import Spotlight from "../component/spotlight/Spotlight";

export default function SpotlightPage({ onToggleFavorite, pieces }) {
  return (
    <div>
      <h1>Pieces of the Day</h1>
      <Spotlight onToggleFavorite={onToggleFavorite} pieces={pieces} />
    </div>
  );
}
