export default function FavoriteFilter({ artPiecesInfo}) {
  return (
    <>
      <h2>My Favorites</h2>
      {artPiecesInfo
        .filter((artPieceInfo) => artPieceInfo.isFavorite === true)
        .map((favoritePieces) => (
            <> 
            <h2>{favoritePieces.title}</h2>
            <h3>{favoritePieces.artist}</h3>
          <div>{favoritePieces.slug}</div>
            </>
        ))}
    </>
  );
}
