export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <img src={image} height={400} width={500} />
      <h1>{title}</h1>
      <h3>{artist}</h3>
    </li>
  );
}
