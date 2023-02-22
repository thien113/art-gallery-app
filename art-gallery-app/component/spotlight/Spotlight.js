import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({ pieces, onToggleFavorite }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const randomImageObject = pieces[randomIndex];

  return (
    <>
      <Image
      className="preview__image"
        src={randomImageObject.imageSource}
        width={400}
        height={500}
        alt="piece of the day"
      />
      <div className="preview__container">
        <section className="preview__title">{randomImageObject.name}</section>
        <section className="preview__artist">
          {randomImageObject.artist}
        </section>
        {/* <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          slug={randomImageObject.slug}
        /> */}
      </div>
    </>
  );
}
