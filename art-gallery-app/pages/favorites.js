export default function FavoriteFilter({ artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      <h2>My Favorites</h2>
      {artPiecesInfo
        .filter((artPieceInfo) => artPieceInfo.isFavorite === true)
        .map((favoritePieces) => (
          <div>{favoritePieces.slug}</div>
        ))}
    </>
  );
}
