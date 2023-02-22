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
      <h2>My Favorites</h2>
      {favorites.map((piece) => {
        return (
          <li>
            <ArtPiecePreview
              key={piece.slug}
              title={piece.name}
              artist={piece.artist}
              image={piece.imageSource}
              alt={piece.slug}
              onToggleFavorite={onToggleFavorite}
            />
          </li>
        );
      })}
    </>
  );
}
