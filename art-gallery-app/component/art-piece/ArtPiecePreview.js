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
        <Image
          className="preview__image"
          src={image}
          height={500}
          width={500}
          alt={title}
        />
      </Link>
      <div className="preview__container">
        <h2 className="preview__title">{title}</h2>
        <h3 className="preview__artist">{artist}</h3>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        />
      </div>
    </>
  );
}
