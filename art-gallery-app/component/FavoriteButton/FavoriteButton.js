import Heart from "../../assets/heart.svg";
import HeartFilled from "../../assets/heart-filled.svg";
// import "./FavoriteButton.css"

export default function FavoriteButton({ onToggleFavorite, slug, isFavorite }) {
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
    return (
      <HeartFilled
        className="button__favorite-active"
        width="50"
        height="auto"
        onClick={() => {
          onToggleFavorite(slug);
        }}
      />
    );
  }
}
