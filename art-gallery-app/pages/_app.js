import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../component/layout/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Layout />
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
    </>
  );
}
