import GlobalStyle from "../styles";
import "./styles.css";
import useSWR from "swr";
import Layout from "../component/layout/Layout";
import { useImmerLocalStorageState } from "./useImmerLocalStorageState";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  const pieces = data;

  function handleToggleFavorite(slug) {
    updateArtPiecesInfo((draft) => {
      const artPieceLike = draft.find((piece) => piece.slug === slug);
      if (!artPieceLike) {
        return [
          ...draft,
          {
            slug,
            isFavorite: true,
            comments: [],
          },
        ];
      } else {
        artPieceLike.isFavorite = !artPieceLike.isFavorite;
        return draft;
      }
    });
  }

  function onSubmitHandler(slug, comment) {
    updateArtPiecesInfo((draft) => {
      const artPieceComment = draft.find((piece) => piece.slug === slug);
      const [time, today] = timeAndDayHandler();
      if (!artPieceComment) {
        return [
          ...draft,
          {
            slug,
            isFavorite: false,
            comments: [
              {
                comment: comment,
                day: today,
                time: time,
              },
            ],
          },
        ];
      } else {
        artPieceComment.comments.push({
          comment: comment,
          day: today,
          time: time,
        });
        return draft;
      }
    });
  }
  function timeAndDayHandler() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes();

    today = mm + "/" + dd + "/" + yyyy;
    return [time, today];
  }

  return (
    <>
      <Layout />
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
        onSubmitHandler={onSubmitHandler}
      />
    </>
  );
}
