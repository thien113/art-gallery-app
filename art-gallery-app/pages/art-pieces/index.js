import ArtPieces from "../../component/art-piece/ArtPiece";

export default function GalleryPage({ pieces }) {
  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}
