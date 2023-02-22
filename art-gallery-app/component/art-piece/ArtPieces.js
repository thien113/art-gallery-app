import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite }) {
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
            />
        </li>
          ))}
      </ul>
    </>
  );
}
