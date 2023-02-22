import Image from "next/image";
import Link from "next/link";
import CommentForm from "./comment/CommentForm";
import Comments from "./comment/Comments";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({
  pieces,
  id,
  onToggleFavorite,
  onSubmitHandler,
}) {
  const localItems = JSON.parse(localStorage.getItem("art-pieces-info"));

  const artPieceObject = pieces.find((piece) => piece.slug === id);
  return (
    <>
      <Image
        className="preview__image"
        src={artPieceObject.imageSource}
        width={400}
        height={500}
        alt={artPieceObject.slug}
      ></Image>
      <div className="preview__container"> 

      <section className="preview__title">{artPieceObject.name}</section>
      <section className="preview__artist">{artPieceObject.artist}</section>
      <div className="preview__year">
      <section >{artPieceObject.year}</section>
      <section >{artPieceObject.genre}</section>
      </div>
      </div>
      <FavoriteButton
        slug={artPieceObject.slug}
        onToggleFavorite={onToggleFavorite}
      />
      {localItems != false && <Comments id={artPieceObject.slug} />}
      <CommentForm
        slug={artPieceObject.slug}
        onSubmitHandler={onSubmitHandler}
      />
      <Link className="nav__back" href="/art-pieces">Back to All Artpieces</Link>
    </>
  );
}
