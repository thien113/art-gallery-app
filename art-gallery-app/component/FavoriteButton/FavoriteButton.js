import Heart from "../../assets/heart.svg";
import HeartFilled from "../../assets/heart-filled.svg";
// import "./FavoriteButton.css"

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  if (!isFavorite) {
    return (
      <Heart
        className="button__favorite-unactive"
        width="50"
        height="50"
        title="button__favorite-unactive"
        onClick={() => {
          onToggleFavorite(slug);
        }}
      />
    );
  } else {
    <HeartFilled
      className="button__favorite-active"
      width="50"
      height="auto"
      onClick={() => {
        onToggleFavorite(slug);
      }}
    />;
  }
}
