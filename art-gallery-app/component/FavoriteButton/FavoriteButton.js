import Heart from "../../assets/heart.svg";
// import "./FavoriteButton.css"

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
    if (!isFavorite) {
      return (
        <Heart
          className="button__favorite-unactive"
          width="50"
          height="50"
          onClick={() => {
              onToggleFavorite(slug)}
              }
        />
      );
    } else {
      <Heart
        className="button__favorite-active"
        width="50"
        height="auto"
      />;

  // return (
  //   <button
  //     onClick={() => {
  //       onToggleFavorite();
  //     }}
  //   >
  //     I like
  //   </button>
  // );
}
}
