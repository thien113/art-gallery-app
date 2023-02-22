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
        <Image className="preview__image" src={image} height={500} width={500} alt={title} />
      </Link>
      <div className="preview__container">
      <section className="preview__title">{title}</section>
      <section className="preview__artist">{artist}</section>
      </div>
      <FavoriteButton onToggleFavorite={onToggleFavorite} slug={slug} />
    </>
  );
}
