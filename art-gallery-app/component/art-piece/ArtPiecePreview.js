import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  onToggleFavorite,
  image,
  title,
  artist,
  slug,
}) {

  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} height={400} width={500} alt={title} />
      </Link>
      <h1>{title}</h1>
      <h3>{artist}</h3>
      <FavoriteButton onToggleFavorite={onToggleFavorite} slug={slug} />
    </>
  );
}
