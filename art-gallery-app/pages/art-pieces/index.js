import ArtPieces from "../../component/art-piece/ArtPieces";

export default function GalleryPage({ pieces, onToggleFavorite }) {

  return (
    <>
      <ArtPieces onToggleFavorite={onToggleFavorite} pieces={pieces} />
    </>
  );
}
