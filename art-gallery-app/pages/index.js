import useSWR from "swr";

export default function HomePage({ fetcher }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return (
    <div>
      {data.map((art) => (
        <h1>Hello from {art.artist}</h1>
      ))}
    </div>
  );
}
