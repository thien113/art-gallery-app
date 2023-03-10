import Image from "next/image";
import Link from "next/link";
import CommentForm from "./comment/CommentForm";
import Comments from "./comment/Comments";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import styled from "styled-components";

export default function ArtPieceDetails({
  pieces,
  id,
  onToggleFavorite,
  onSubmitHandler,
}) {
  const localItems = JSON.parse(localStorage.getItem("art-pieces-info"));
  const isFavorite = JSON.parse(localStorage.getItem("art-pieces-info"))
    .filter((obj) => obj.slug === id)
    .shift().isFavorite;
  const artPieceObject = pieces.find((piece) => piece.slug === id);

  return (
    <section className="details__container">
      <Image
        src={artPieceObject.imageSource}
        width={500}
        height={400}
        alt={artPieceObject.slug}
      ></Image>
      <h2 className="details__title">{artPieceObject.title}</h2>
      <FavoriteButton
        isFavorite={isFavorite}
        slug={artPieceObject.slug}
        onToggleFavorite={onToggleFavorite}
      />
      <h3 className="details__artist">{artPieceObject.artist}</h3>
      <div className="details__year">{artPieceObject.year}</div>
      <div className="details_genre">{artPieceObject.genre}</div>
      <div className="details_color">
        Color-Palette:
        {artPieceObject.colors.map((color) => (
          <ColorItem color={color}></ColorItem>
        ))}
      </div>
      <Link href="/art-pieces">Back</Link>

      {localItems != false && <Comments id={artPieceObject.slug} />}
      <CommentForm
        slug={artPieceObject.slug}
        onSubmitHandler={onSubmitHandler}
      />
    </section>
  );
}
const ColorItem = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
