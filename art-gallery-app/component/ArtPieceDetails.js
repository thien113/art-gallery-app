import Image from "next/image";
import Link from "next/link";
import CommentForm from "./comment/CommentForm";
import Comments from "./comment/Comments";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({ pieces, id }) {
  const artPieceObject = pieces.find((piece) => piece.slug === id);

  return (
    <>
      <Image
        className="details__image"
        src={artPieceObject.imageSource}
        width={500}
        height={400}
        alt={artPieceObject.title}
      ></Image>
      <h2 className="details__title">{artPieceObject.title}</h2>
      <h3 className="details__artist">{artPieceObject.artist}</h3>
      <div className="details__year">{artPieceObject.year}</div>
      <div className="details_genre">{artPieceObject.genre}</div>
      <Link href="/art-pieces">Back</Link>
      <FavoriteButton slug={artPieceObject.slug} />
      <Comments />
      <CommentForm />
    </>
  );
}
