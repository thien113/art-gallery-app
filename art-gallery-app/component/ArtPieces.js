import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            image={piece.image}
            title={piece.titles}
            artist={piece.artist}
          />
        ))}
      </ul>
    </>
  );
}
