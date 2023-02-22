import Spotlight from "../component/spotlight/Spotlight";
// import GlobalStyle from "../styles";

export default function SpotlightPage({ onToggleFavorite, pieces }) {
  return (
    <div>
      <h1 className="header__highlight">Pieces of the Day</h1>
      <Spotlight classname="preview__container"onToggleFavorite={onToggleFavorite} pieces={pieces} />
    </div>
  );
}
