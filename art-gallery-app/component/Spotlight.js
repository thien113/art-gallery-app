import useSWR from "swr";
import Image from "next/image";

export default function Spotlight() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  
    const randomIndex =  Math.floor(Math.random() *data.length);
    const randomImageObject = data[randomIndex]
  
  return (
    <div>
      
      <Image className="pieces__image" src={randomImageObject.imageSource} width={400} height={500} alt="piece of the day"/>
      <h3 className="pieces__artist">{randomImageObject.artist}</h3>
    </div>
  );
}
