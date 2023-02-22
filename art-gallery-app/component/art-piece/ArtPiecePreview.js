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
  const isFavorite = JSON.parse(localStorage.getItem("art-pieces-info"))
    .filter((obj) => obj.slug === slug)
    .shift().isFavorite;
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} height={400} width={500} alt={title} />
      </Link>
      <h1>{title}</h1>
      <h3>{artist}</h3>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
    </>
  );
}
