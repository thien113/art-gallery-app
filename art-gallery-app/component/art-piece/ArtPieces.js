import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  const isFavorite = JSON.parse(localStorage.getItem("art-pieces-info"));
  return (
    <>
      <ul>
        {pieces.map((piece) => (
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
        ))}
      </ul>
    </>
  );
}
