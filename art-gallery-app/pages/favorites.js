import ArtPiecePreview from "../component/art-piece/ArtPiecePreview";

export default function FavoriteFilter({
  artPiecesInfo,
  onToggleFavorite,
  pieces,
}) {
  const favorites = pieces.filter((piece) => {
    return artPiecesInfo.find(
      (info) => info.slug === piece.slug && info.isFavorite
    );
  });
  return (
    <>
      <h2 className="header__highlight">My Favorites</h2>
      <ul className="details__container">

      {favorites.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              title={piece.name}
              artist={piece.artist}
              image={piece.imageSource} className="preview__image"
              alt={piece.slug}
              onToggleFavorite={onToggleFavorite}
            />
          </li>
        );
      })}
      </ul>
    </>
  );
}
