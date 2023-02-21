import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <li key={slug}>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} height={400} width={500} />
      </Link>
      <h1>{title}</h1>
      <h3>{artist}</h3>
    </li>
  );
}
