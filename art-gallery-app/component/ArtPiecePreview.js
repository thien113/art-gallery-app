export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <img src={image} />
      <h1>{title}</h1>
      <h3>{artist}</h3>
    </>
  );
}
