import ArtPieces from "../component/ArtPieces";
import useSWR from "swr";

export default function PiecesPage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
