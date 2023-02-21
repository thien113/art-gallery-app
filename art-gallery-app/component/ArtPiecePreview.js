export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <li key={slug}>
      <img src={image} height={400} width={500} />
      <h1>{title}</h1>
      <h3>{artist}</h3>
    </li>
  );
}
