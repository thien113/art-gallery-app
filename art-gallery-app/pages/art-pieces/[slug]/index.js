import ArtPieceDetails from "../../../component/ArtPieceDetails";
import { useRouter } from "next/router";

export default function renderArtPiece({ pieces, artPiecesInfo, onSubmitHandler }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(artPiecesInfo)
  return <ArtPieceDetails id={slug} pieces={pieces} onSubmitHandler={onSubmitHandler}/>;
}
