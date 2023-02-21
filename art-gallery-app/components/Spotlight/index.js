import { useState } from "react";
import "./Spotlight.css";

export default function Spotlight({ image, artist }) {
  const [currentImage, setCurrentImage] = useState(0);

  function getRandomImg(image) {
    const randomImage =  Math.floor(Math.random() * image.length);
    setCurrentImage({currentImage: randomImage})
  } 

  return (
    <div>
      <h2 className="pieces__header">Piece of the Day</h2>
      <img className="pieces__image" source={randomImage} />
      <h3>{artist}</h3>
    </div>
  );
}
