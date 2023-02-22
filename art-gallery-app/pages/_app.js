import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../component/layout/Layout";
import { useImmer } from "use-immer";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmer([]);

  function handleToggleFavorite() {
    console.log("clicked");
    // updateArtPiecesInfo((draft) => {
    //   const slugObject = draft.find((artPiecesInfo) => artPiecesInfo.slug === slug)
    //   if(slugObject){
    //     draft.isFavorite = !isFavorite;
    //   } else {
    //     draft.slug = slug;
    //     draft.isFavorite = true
    //   }
    // })
  }

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <>
      <Layout />
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
