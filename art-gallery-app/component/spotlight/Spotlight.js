import Image from "next/image";

export default function Spotlight({ pieces }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const randomImageObject = pieces[randomIndex];

  return (
    <div>
      <Image
        className="pieces__image"
        src={randomImageObject.imageSource}
        width={400}
        height={500}
        alt="piece of the day"
      />
      <h3 className="pieces__artist">{randomImageObject.artist}</h3>
    </div>
  );
}
