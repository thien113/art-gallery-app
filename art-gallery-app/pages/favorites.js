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
          <li key={piece.slug}>
            <ArtPiecePreview
              onToggleFavorite={onToggleFavorite}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              alt={piece.name}
              slug={piece.slug}
            />
          </li>
        );
      })}
    </>
  );
}
