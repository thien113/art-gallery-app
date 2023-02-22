import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <>
        <h2 className="header__highlight"> All Art Pieces</h2> 
      <ul className="details__container">
        {pieces.map((piece) => (
          <li className="details__container" key={piece.slug}>
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
